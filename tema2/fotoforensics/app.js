'use strict';
const KEY='digitalizacion-tema2-fotoforensics-s07-v1';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const FIELDS=Object.fromEntries(GROUPS.flatMap(g=>g.fields.map(f=>[f.key,f])));
const TOTAL=GROUPS.length+QUIZ.length;
let state={},saveTimer,storageAvailable=true;
const allowed=new Set(['student','classroom','partner','sessiondate',...Object.keys(FIELDS),...QUIZ.map((_,i)=>'quiz'+i)]);
function cleanState(input){
 if(!input||typeof input!=='object'||Array.isArray(input))throw Error('Formato de respuestas no válido.');
 const clean={};
 for(const [k,v] of Object.entries(input)){
  if(!allowed.has(k)||typeof v!=='string')continue;
  const limit=FIELDS[k]?.rows?3000:FIELDS[k]?500:k==='classroom'?60:k==='sessiondate'?32:160;
  if(v.length>limit)throw Error('Hay un campo demasiado largo.');
  if(/^quiz\d+$/.test(k)&&v!==''&&!['0','1','2','3'].includes(v))throw Error('Hay una respuesta de test no válida.');
  clean[k]=v;
 }
 return clean;
}
try{const saved=localStorage.getItem(KEY);if(saved)state=cleanState(JSON.parse(saved));}catch(e){storageAvailable=false;$('#saveState').textContent='Usa Guardar copia: no se pudo recuperar el guardado local.';}
function has(k){return typeof state[k]==='string'&&state[k].trim()!==''}
function validUrl(v){try{return ['http:','https:'].includes(new URL(v).protocol)}catch(e){return false}}
function complete(k){return has(k)&&(FIELDS[k]?.type!=='url'||validUrl(state[k]))}
function counts(){const c={};for(const g of GROUPS)c[g.id]=g.fields.every(f=>complete(f.key))?1:0;c.quiz=QUIZ.filter((_,i)=>has('quiz'+i)).length;c.total=GROUPS.reduce((sum,g)=>sum+c[g.id],0)+c.quiz;return c;}
function identityReady(){return has('student')&&has('classroom')&&/^\d{4}-\d{2}-\d{2}$/.test(state.sessiondate||'')}
function fieldHtml(f){const common=`id="field-${f.key}" data-field="${f.key}" placeholder="${esc(f.placeholder||'Responde con tus palabras tras consultar la fuente')}"`;return `<label class="${f.rows?'wide':''}" for="field-${f.key}">${esc(f.label)}${f.rows?`<textarea ${common} rows="${f.rows}" maxlength="3000"></textarea>`:`<input ${common} type="${f.type||'text'}" maxlength="500">`}</label>`}
function render(){
 for(const g of GROUPS)$('#'+g.id+'form').innerHTML=g.fields.map(fieldHtml).join('');
 $('#quiz').innerHTML=QUIZ.map((q,i)=>`<fieldset class="question"><legend><span>${String(i+1).padStart(2,'0')} /</span> ${esc(q.question)}</legend><div class="answers">${q.options.map((o,j)=>`<label><input type="radio" name="quiz${i}" data-field="quiz${i}" value="${j}"><span>${esc(o)}</span></label>`).join('')}</div></fieldset>`).join('');
 $('#resources').innerHTML=RESOURCES.map(([t,u])=>`<div class="source"><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)} ↗</a></div>`).join('');
 document.querySelectorAll('[data-field]').forEach(el=>{const v=state[el.dataset.field]??'';if(el.type==='radio')el.checked=el.value===v;else el.value=v;});
 updateProgress();
}
function updateProgress(){const c=counts();$('#progress').value=c.total;$('#progress').max=TOTAL;$('#progressText').textContent=`${c.total} / ${TOTAL}`;$('#checklist').innerHTML=[['Identificación',identityReady()?'Completa':'Faltan nombre, grupo o fecha'],...GROUPS.map(g=>[g.title,c[g.id]?'Completo':'Pendiente']),['Formulario individual',`${c.quiz} de ${QUIZ.length}`]].map(([a,b])=>`<div class="check"><span>${esc(a)}</span><b>${esc(b)}</b></div>`).join('');document.querySelectorAll('input[type="url"]').forEach(el=>el.setAttribute('aria-invalid',has(el.dataset.field)&&!complete(el.dataset.field)?'true':'false'));}
const value=k=>has(k)?state[k]:'Sin responder';
function report(){const c=counts(),blocks=[],add=(kind,text)=>blocks.push({kind,text:String(text)});
 add('title','FotoForensics: observar, contrastar y argumentar');add('meta','Digitalización · 4.º ESO · IES Sancti Petri · Sesión 07');add('meta','Generado: '+new Date().toLocaleString('es-ES'));
 add('h2','Identificación');add('p','Nombre y apellidos: '+value('student'));add('p','Curso y grupo: '+value('classroom'));add('p','Fecha de consulta / práctica: '+value('sessiondate'));if(has('partner'))add('p','Pareja: '+state.partner);
 add('meta',(identityReady()&&c.total===TOTAL?'Registros y respuestas completados.':'BORRADOR: faltan datos, respuestas o direcciones válidas.')+` Progreso: ${c.total}/${TOTAL}. Indica cumplimentación, no aciertos ni verificación de visitas externas.`);
 for(const g of GROUPS){add('h2',g.title);add('meta','Fuente de partida: '+g.source);add('meta','Localización: '+g.where);for(const f of g.fields){add('h3',f.label);add('answer',value(f.key));if(has(f.key)&&!complete(f.key))add('meta','Revisa esta dirección: debe empezar por http:// o https://.');}if(!c[g.id])add('meta','Registro pendiente de completar.');}
 add('h2','Formulario individual');QUIZ.forEach((q,i)=>{add('h3',`${i+1}. ${q.question}`);add('answer','Respuesta: '+(has('quiz'+i)?q.options[+state['quiz'+i]]:'Sin responder'));});
 add('h2','Referencias');add('meta','Referencia didáctica: Manuel López Coello · IES Sancti Petri. Adaptación educativa: CC BY-NC-SA 4.0.');RESOURCES.forEach(([t,u])=>add('meta',t+': '+u));return blocks;
}

function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('show'),4500)}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageAvailable=true;$('#saveState').textContent='Guardado en este navegador · '+new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});}catch(e){storageAvailable=false;$('#saveState').textContent='No se pudo guardar aquí. Descarga una copia.';}}


document.addEventListener('input',e=>{const el=e.target;if(!el.dataset.field)return;state[el.dataset.field]=el.value;updateProgress();clearTimeout(saveTimer);$('#saveState').textContent='Guardando…';saveTimer=setTimeout(save,250)});
window.addEventListener('pagehide',save);
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),30000)}
function filename(ext){const n=(state.student||'sin_nombre').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').slice(0,70);return `S07_Fotoforensics_${n}.${ext}`}
$('#backup').addEventListener('click',()=>{save();download(new Blob([JSON.stringify({app:KEY,version:1,savedAt:new Date().toISOString(),responses:state},null,2)],{type:'application/json'}),filename('json'));toast('Copia descargada. Puedes cargarla en otro ordenador.')});
$('#loadBackup').addEventListener('click',()=>$('#restore').click());
$('#restore').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>1000000)throw Error('El archivo supera el tamaño esperado.');const data=JSON.parse(await file.text());if(data.app!==KEY||data.version!==1)throw Error('Elige una copia de esta actividad (.json).');const next=cleanState(data.responses);if(Object.values(state).some(Boolean)&&!confirm('Cargar la copia sustituirá las respuestas actuales de este navegador. ¿Continuar?'))return;state=next;render();save();toast('Copia cargada. Revisa el nombre y los apellidos antes de continuar.')}catch(err){toast('No se pudo cargar: '+err.message)}finally{e.target.value=''}});
$('#reset').addEventListener('click',()=>{if(!confirm('Se borrarán tus respuestas guardadas en este navegador. Descarga antes el PDF y una copia si la necesitas. ¿Borrar los datos?'))return;state={};try{localStorage.removeItem(KEY)}catch(e){}render();$('#saveState').textContent='Cuaderno vacío · listo para otra persona';toast('Datos borrados de este navegador.');window.scrollTo({top:0,behavior:'smooth'})});


function verifyIdentity(){if(!identityReady()){toast('Escribe tu nombre y apellidos, curso/grupo y fecha antes de generar la entrega.');(!has('student')?$('#student'):!has('classroom')?$('#classroom'):$('[data-field="sessiondate"]')).focus();return false}return true}
function cleanPDF(s){return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'').replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/[–—]/g,'-').replace(/…/g,'...').replace(/[^\u0009\u000a\u000d\u0020-\u007e\u00a0-\u00ff]/g,'?')}
function createPDF(){const {jsPDF}=window.jspdf;const doc=new jsPDF({unit:'mm',format:'a4',compress:true});doc.setProperties({title:'S07 FotoForensics - '+state.student,subject:'ELA, procedencia, contexto y ciberseguridad',author:state.student,creator:'Digitalización · IES Sancti Petri'});let y=22;const left=19,width=172,bottom=277;
 function newPage(){doc.addPage();y=23;}
 for(const b of report()){const h=b.kind;const size=h==='title'?21:h==='h2'?15:h==='h3'?11.5:h==='meta'?9:10.5;const bold=['title','h2','h3'].includes(h);const before=h==='h2'?9:h==='h3'?5:2;doc.setFont('helvetica',bold?'bold':'normal');doc.setFontSize(size);const lines=doc.splitTextToSize(cleanPDF(b.text),width);const lh=size*.45;const needed=before+lh*(bold?lines.length:1)+(h==='h2'?28:h==='h3'?16:0);if(y+needed>bottom)newPage();y+=before;doc.setTextColor(...(h==='meta'?[82,97,91]:[24,61,54]));for(const line of lines){if(y+lh>bottom)newPage();doc.text(line,left,y);y+=lh;}y+=h==='title'?3:1;}
 const total=doc.getNumberOfPages();for(let i=1;i<=total;i++){doc.setPage(i);doc.setDrawColor(205,215,205);doc.line(19,284,191,284);doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(90,105,97);doc.text('S07 · FotoForensics · '+cleanPDF(state.student).slice(0,55),19,290);doc.text(`${i} / ${total}`,191,290,{align:'right'});}return doc;
}
function renderPrint(){const blocks=report();$('#printReport').innerHTML=blocks.map(b=>{const tag=b.kind==='title'?'h1':b.kind==='h2'?'h2':b.kind==='h3'?'h3':'p';return `<${tag} class="${b.kind==='meta'?'muted':''}">${esc(b.text)}</${tag}>`}).join('')}
$('#pdf').addEventListener('click',()=>{if(!verifyIdentity())return;save();try{if(!window.jspdf)throw Error('PDF library unavailable');createPDF().save(filename('pdf'));$('#exportStatus').textContent='PDF generado. Ábrelo, comprueba sus páginas y súbelo a Classroom.';toast('PDF generado. Recuerda entregarlo en Classroom.')}catch(e){$('#exportStatus').textContent='No se ha podido descargar directamente. Usa «Imprimir / guardar como PDF» y elige Guardar como PDF.';toast('Usa la opción Imprimir / guardar como PDF.')}});
$('#print').addEventListener('click',()=>{if(!verifyIdentity())return;renderPrint();window.print()});window.addEventListener('beforeprint',renderPrint);
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting);if(!visible.length)return;const id=visible[0].target.id;document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})},{rootMargin:'-100px 0px -60% 0px'});
document.querySelectorAll('section.panel').forEach(s=>observer.observe(s));render();if(Object.keys(state).length&&storageAvailable)$('#saveState').textContent='Progreso recuperado de este navegador';
