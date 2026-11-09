# Revisión de navegación y tareas

Manual de Ubuntu plegado al abrir; el encabezado alterna mostrar/ocultar todos los comandos. Contraste corregido con colores explícitos, también en botones desactivados. Rufus inicia tras una única confirmación combinada de ISOHybrid y borrado.

Panel de tareas: 17 tareas (6 de instalación/actualización y 11 de configuración); las 3 reflexiones se registran aparte. Las pendientes aparecen antes que las completadas. Al instalar el sistema aparecen también los objetivos posteriores, con la siguiente tarea destacada arriba. Se mantienen el PDF y los datos guardados.

Aplicaciones renombradas InstalaLab Windows e InstalaLab Ubuntu. Sin duración orientativa en la interfaz. Las esperas simuladas se mantienen.

---

# Revisión: configuración, idiomas y PDF (9 de octubre de 2026)

- Windows Update se abre desde Configuración; ya no figura como acceso directo en Inicio.
- Colores, modo oscuro, escala y resolución cambian la representación visual del escritorio simulado. No cambian la pantalla física. La resolución afecta a la densidad/tamaño visual; no genera un framebuffer de un sistema operativo real.
- Idiomas disponibles: español e inglés. La interfaz del sistema usa un catálogo local; el panel docente y los comandos se conservan en español/sintaxis original. Sin traducción externa ni conexión.
- Rufus muestra su cabecera propia.
- Ubuntu obliga a instalación interactiva, conserva la opción automatizada visible desactivada y exige crear/confirmar una contraseña antes de instalar. No asigna Practica123! por defecto. Las sesiones antiguas mantienen sus credenciales: reiniciar práctica para probar el nuevo recorrido desde cero.
- Manual de Ubuntu situado a la izquierda, con desplazamiento independiente y posición fija al bajar. En pantallas estrechas se coloca arriba con altura limitada.
- Configuración Ubuntu usa una presentación GNOME distinta y muestra un aviso de trabajo por Terminal al seleccionar cada apartado. La excepción intencional es el panel Pantallas abierto explícitamente con gnome-control-center display, que permite conservar/revertir resolución.
- Terminal oculta el formulario mientras hay un comando en proceso.
- Descargar informe PDF funciona sin Internet ni diálogo de impresión. Incluye checklist cumplido/pendiente, reflexiones, estado final e historial de acciones/incidencias disponible. También permite obtener un informe incompleto para revisar pendientes. El historial ampliado comienza en esta versión; no puede recuperar eventos antiguos que nunca se registraron.
- Las contraseñas/PIN no se incluyen en el informe. El archivo de sesión JSON sí conserva las credenciales ficticias.
- Nuevos módulos: lib/sim/i18n.ts, audit.ts y report.ts; Localization.tsx. El PDF usa texto WinAnsi con paginación automática, sin dependencias externas.

Validación adicional: bloqueo de autoinstall, cuenta obligatoria, acceso con contraseña propia y rechazo de contraseña fija; auditoría sin secretos; PDF multipágina generado, extraído y revisado visualmente. Se mantienen pruebas de motor, siete recorridos, comandos, tipos y 99 renders. No se ha realizado inspección interactiva de navegador en este entorno.

---

# InstalaLab — dos prácticas locales de la práctica

Versión de trabajo: 9 de octubre de 2026. Digitalización, 4.º ESO.

## Ejecución del alumnado
Descomprimir el ZIP de Windows o el de Ubuntu y abrir index.html con doble clic. Cada HTML es autónomo, contiene JavaScript y CSS y no requiere Internet, servidor ni terminal real. Son dos aplicaciones independientes con guardado separado. Los enlaces de documentación sí requieren conexión. Usar cuentas y contraseñas ficticias.

Si se cambia de navegador/carpeta/equipo, guardar la sesión JSON desde el panel y cargarla en la misma práctica. El JSON incluye credenciales ficticias. El informe PDF no contiene contraseñas. Las sesiones de la versión anterior no se importan automáticamente.

## USB intuitivo
Tres zonas: equipo auxiliar, mesa (retirado), PC de destino. Se mueve pulsando un puerto o arrastrando el dispositivo. Solo hay un USB y su ubicación siempre es visible. Desconectarlo durante escritura pide confirmación y produce una interrupción real en el estado. Moverlo no equivale a encender el PC. Los controles F2/F12 de la web evitan teclas capturadas por el navegador.

## Windows
Mantiene preparación con Media Creation Tool, arranque UEFI, instalación limpia, disco GPT con EFI/MSR/Windows/recuperación, OOBE y escritorio propio. Inicio → Configuración permite Windows Update (buscar, instalar, reiniciar), versión instalada y última actualización de práctica, pantalla y escala con confirmación/reversión a 15 segundos, luz nocturna, salida/entrada de sonido y volumen, No molestar, energía y tiempos de suspensión, red/IP, idioma/teclado, hora, almacenamiento, hardware y apariencia.

Objetivos: volumen 40 % y Altavoces, No molestar, energía equilibrada, apariencia oscura, Madrid con hora automática, teclado español, confirmar pantalla, consultar almacenamiento/hardware/red y reiniciar sin USB. Si el valor ya está seleccionado, los botones Aplicar/Confirmar/Sincronizar permiten verificarlo. Windows Update solo completa la tarea tras reiniciar.

Se representa Windows 11 26H2 (compilación base 26300). El catálogo de calidad es fijo y se identifica como simulado; no se inventa una KB ni se afirma consultar la última actualización real. Windows 11 cambia pantallas según edición, región, hardware y conexión.

## Ubuntu
Mantiene ISO/Rufus, GRUB, sesión Live, instalación interactiva, particionado, cuenta, cifrado opcional, retirada del USB, desbloqueo/login y escritorio GNOME diferenciado. Abrir Terminal desde el dock o Ctrl+Alt+T. El manual está en el panel de tareas.

Comandos implementados: cat /etc/os-release, lsb_release -a, uname -a, hostnamectl, lscpu, free -h, lsblk, lsblk -f, df -h, ip addr/ip a, nmcli device status, nmcli device wifi list/connect/disconnect, ping -c 4 ubuntu.com, sudo apt update, apt list --upgradable, sudo apt upgrade, timedatectl y sus ajustes de zona/NTP, gsettings para teclado/notificaciones/apariencia, wpctl para dispositivos/salida/volumen, powerprofilesctl, gnome-control-center display, whoami, pwd, clear, help y sudo reboot.

No se ejecutan procesos reales. La terminal valida las órdenes admitidas y sus argumentos; no implementa una shell completa, tuberías, redirecciones, todos los parámetros ni todos los comandos Linux. sudo conserva autenticación durante esa ventana. La contraseña es la creada en el instalador. ↑/↓ recuperan órdenes anteriores; el historial de esa terminal dura mientras está abierta. No se registra la contraseña de sudo.

apt update renueva índices; apt upgrade confirma, procesa y modifica el estado. Red desconectada impide estas operaciones, pero no consultas locales como lscpu. Los ajustes de terminal aparecen en Configuración. Las tareas de comandos no se cumplen utilizando los controles gráficos equivalentes. Para pantalla, gnome-control-center display abre GNOME: se evita presentar xrandr como solución general en Wayland. La red ficticia es «Aula Digitalizacion» y su clave «Aula2026!»; el nombre de interfaz y los identificadores de sonido pertenecen al hardware virtual.

## Checklist e informe
Seis tareas de instalación + once de configuración (17 tareas). Las tres reflexiones se registran aparte. Las acciones se marcan automáticamente. La longitud mínima solo registra que existe respuesta: no evalúa su corrección; el docente debe leerla. No hay puntuaciones/ranking. El informe PDF incluye nombre, checklist, reflexiones e historial básico del motor. El guardado de sesión JSON permite trasladar progreso.

## Arquitectura y modificación
- `lib/sim/config.ts`: hardware constante, tiempos, nombres, tareas iniciales y fuentes.
- `lib/sim/machine.ts`: estado, trabajos temporizados, arranque, instalación y actualizaciones.
- `lib/sim/disk.ts`: tamaños en MiB, particiones y validaciones.
- `lib/sim/flows.ts`: reglas de transición de los instaladores y autenticación.
- `lib/sim/practice.ts`: versión de Windows del escenario, checklist posterior, preguntas y manual de comandos.
- `lib/sim/terminal.ts`: intérprete educativo y efectos de las órdenes sobre el mismo estado.
- `lib/sim/hints.ts`: pistas progresivas por pantalla.
- `components/simulator/{Windows,Ubuntu,Hardware,Media,Partitions,Desktop,Practice,Simulator}.tsx`: vistas y controles.
- `app/globals.css` y `app/os-interfaces.css`: apariencia común y diseños propios.
- `offline/main.tsx` + `scripts/build-practices.mjs`: generan dos HTML autónomos con SO fijo y claves de almacenamiento independientes.

Para editar: modificar fuentes, usar dependencias del proyecto, ejecutar `node scripts/build-practices.mjs`. El resultado está en `outputs/practices/windows/index.html` y `outputs/practices/ubuntu/index.html`. Estos comandos son para desarrollo, no para alumnado. El ZIP de fuentes contiene package.json y pnpm-lock.yaml; necesita Node compatible y dependencias al recompilar. El HTML ya compilado funciona sin ello.

## Validación realizada
- TypeScript sin errores.
- Pruebas de motor: tamaños y suma de disco, límites, medio no arrancable, instalación de ambos SO, interrupción y cifrado.
- Siete escenarios de flujo: Windows con OOBE/actualizaciones, Ubuntu Live/cifrado/login, manual, BitLocker/RST, fallos de red/TPM/espacio, borrado y persistencia, TPM/LVM/ZFS.
- Prueba nueva de todos los comandos del manual, cambios persistentes, checklist/reflexiones, red caída, contraseña de Wi-Fi incorrecta, reinicio con login, reinstalación y estado de actualización Windows.
- Renderizado de 99 vistas/componentes sin excepciones, incluidos apartados de configuración, Terminal, USB y checklist.
- Dos compilaciones IIFE y análisis de HTML autónomo: JS/CSS incrustados, sin módulos dinámicos ni recursos CSS externos.

No se ha podido recorrer visualmente la aplicación en un navegador con las herramientas autorizadas disponibles en este entorno. Estas pruebas no sustituyen la comprobación de clics, arrastre, adaptación visual ni almacenamiento bajo file:// en cada navegador del aula.

## Límites explícitos
Recreación educativa, no virtualización completa ni copia visual exacta. LVM/ZFS/TPM/autoinstall siguen simplificados. Cifrado simulado, sin cifrar realmente el almacenamiento del navegador. Prueba de sonido mediante indicador visual, sin audio real. Resolución, escala, energía y suspensión se guardan como configuración del equipo virtual: no cambian la pantalla ni el consumo reales, ni se espera una suspensión de 15 minutos. Sin Microsoft/Canonical reales, repositorios ni cuentas externas. Los escenarios avanzados de coexistencia no forman parte de la ruta básica de la práctica.

## Referencias oficiales
- Microsoft: https://support.microsoft.com/es-es/windows/deployment/install-upgrade/reinstall-windows-with-the-installation-media
- Microsoft GPT/UEFI: https://learn.microsoft.com/es-es/windows-hardware/manufacture/desktop/configure-uefigpt-based-hard-drive-partitions?view=windows-11
- Microsoft versiones: https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information
- Windows 26H2: https://learn.microsoft.com/en-us/windows/release-health/status-windows-11-26h2
- Ubuntu instalación: https://ubuntu.com/desktop/docs/en/latest/tutorial/install-ubuntu-desktop/
- NetworkManager: https://networkmanager.dev/docs/api/latest/nmcli.html
- WirePlumber: https://pipewire.pages.freedesktop.org/wireplumber/man/wpctl.html
- GNOME teclado: https://discourse.gnome.org/t/how-to-set-keyboard-layout-in-the-terminal/9286
- systemd: https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html
