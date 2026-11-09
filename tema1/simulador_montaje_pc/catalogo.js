/* MontaLab: catálogo didáctico. Precios ficticios, no cotizaciones. */
const CATALOG = {
  "cpu": [
    {
      "id": "C1",
      "name": "AMD Ryzen 5 5600",
      "price": 110,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM4",
      "cores": 6,
      "threads": 12,
      "igpu": false,
      "stock": true,
      "tier": 1,
      "series": 5000,
      "tdp": 65,
      "ddr": 4,
      "pcie": 4
    },
    {
      "id": "C2",
      "name": "AMD Ryzen 5 5600G",
      "price": 125,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM4",
      "cores": 6,
      "threads": 12,
      "igpu": true,
      "stock": true,
      "tier": 1,
      "series": 5000,
      "tdp": 65,
      "ddr": 4,
      "pcie": 3
    },
    {
      "id": "C3",
      "name": "AMD Ryzen 7 5700G",
      "price": 165,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM4",
      "cores": 8,
      "threads": 16,
      "igpu": true,
      "stock": true,
      "tier": 2,
      "series": 5000,
      "tdp": 65,
      "ddr": 4,
      "pcie": 3
    },
    {
      "id": "C4",
      "name": "AMD Ryzen 7 5700X",
      "price": 155,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM4",
      "cores": 8,
      "threads": 16,
      "igpu": false,
      "stock": false,
      "tier": 2,
      "series": 5000,
      "tdp": 65,
      "ddr": 4,
      "pcie": 4
    },
    {
      "id": "C5",
      "name": "AMD Ryzen 5 7600",
      "price": 190,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM5",
      "cores": 6,
      "threads": 12,
      "igpu": true,
      "stock": true,
      "tier": 2,
      "series": 7000,
      "tdp": 65,
      "ddr": 5,
      "pcie": 5
    },
    {
      "id": "C6",
      "name": "AMD Ryzen 7 7700",
      "price": 270,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM5",
      "cores": 8,
      "threads": 16,
      "igpu": true,
      "stock": true,
      "tier": 3,
      "series": 7000,
      "tdp": 65,
      "ddr": 5,
      "pcie": 5
    },
    {
      "id": "C7",
      "name": "AMD Ryzen 5 8600G",
      "price": 185,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM5",
      "cores": 6,
      "threads": 12,
      "igpu": true,
      "stock": true,
      "tier": 2,
      "series": 8000,
      "tdp": 65,
      "ddr": 5,
      "pcie": 4
    },
    {
      "id": "C8",
      "name": "AMD Ryzen 7 9700X",
      "price": 315,
      "use": "Valora núcleos para tareas simultáneas; los modelos G refuerzan la gráfica integrada. Una CPU sin gráficos necesita una GPU dedicada.",
      "source": "https://www.amd.com/en/products/specifications/processors.html",
      "socket": "AM5",
      "cores": 8,
      "threads": 16,
      "igpu": true,
      "stock": false,
      "tier": 3,
      "series": 9000,
      "tdp": 65,
      "ddr": 5,
      "pcie": 5
    }
  ],
  "board": [
    {
      "id": "M1",
      "name": "MSI A520M-A PRO",
      "price": 65,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/A520M-A-PRO/Specification",
      "socket": "AM4",
      "ddr": 4,
      "form": "mATX",
      "slots": 2,
      "maxram": 64,
      "wifi": false,
      "bt": false,
      "m2": 1,
      "gen": 3,
      "eps": 4,
      "sata": 4,
      "ports": [
        "HDMI"
      ],
      "support": [
        5000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    },
    {
      "id": "M2",
      "name": "MSI B550M PRO-VDH WIFI",
      "price": 110,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/B550M-PRO-VDH-WIFI/Specification",
      "socket": "AM4",
      "ddr": 4,
      "form": "mATX",
      "slots": 4,
      "maxram": 128,
      "wifi": true,
      "bt": true,
      "m2": 2,
      "gen": 4,
      "eps": 8,
      "sata": 4,
      "ports": [
        "HDMI",
        "DP"
      ],
      "support": [
        5000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    },
    {
      "id": "M3",
      "name": "MSI B550-A PRO",
      "price": 120,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/B550-A-PRO/Specification",
      "socket": "AM4",
      "ddr": 4,
      "form": "ATX",
      "slots": 4,
      "maxram": 128,
      "wifi": false,
      "bt": false,
      "m2": 2,
      "gen": 4,
      "eps": 8,
      "sata": 6,
      "ports": [
        "HDMI",
        "DP"
      ],
      "support": [
        5000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    },
    {
      "id": "M4",
      "name": "MSI PRO B650M-A WIFI",
      "price": 165,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/PRO-B650M-A-WIFI/Specification",
      "socket": "AM5",
      "ddr": 5,
      "form": "mATX",
      "slots": 4,
      "maxram": 128,
      "wifi": true,
      "bt": true,
      "m2": 2,
      "gen": 4,
      "eps": 8,
      "sata": 4,
      "ports": [
        "HDMI",
        "DP"
      ],
      "support": [
        7000,
        8000,
        9000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    },
    {
      "id": "M5",
      "name": "MSI B650 GAMING PLUS WIFI",
      "price": 180,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/B650-GAMING-PLUS-WIFI/Specification",
      "socket": "AM5",
      "ddr": 5,
      "form": "ATX",
      "slots": 4,
      "maxram": 128,
      "wifi": true,
      "bt": true,
      "m2": 2,
      "gen": 4,
      "eps": 8,
      "sata": 4,
      "ports": [
        "HDMI",
        "DP"
      ],
      "support": [
        7000,
        8000,
        9000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    },
    {
      "id": "M6",
      "name": "MSI MPG B650I EDGE WIFI",
      "price": 245,
      "use": "La placa fija la plataforma, las conexiones y las posibilidades de ampliación. Wi-Fi y Bluetooth integrados evitan comprar adaptadores.",
      "source": "https://www.msi.com/Motherboard/MPG-B650I-EDGE-WIFI/Specification",
      "socket": "AM5",
      "ddr": 5,
      "form": "Mini-ITX",
      "slots": 2,
      "maxram": 64,
      "wifi": true,
      "bt": true,
      "m2": 2,
      "gen": 4,
      "eps": 8,
      "sata": 4,
      "ports": [
        "HDMI",
        "DP"
      ],
      "support": [
        7000,
        8000,
        9000
      ],
      "note": "Firmware compatible con las CPU de la misma plataforma del catálogo. Capacidad de RAM limitada al valor conservador indicado para esta práctica; una BIOS posterior puede ampliar el máximo."
    }
  ],
  "ram": [
    {
      "id": "R1",
      "name": "Kingston FURY Beast 8 GB · KF432C16BB/8",
      "price": 24,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF432C16BB_8.pdf",
      "cap": 8,
      "ddr": 4,
      "modules": 1,
      "speed": 3200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R2",
      "name": "Kingston FURY Beast 16 GB · KF432C16BBK2/16",
      "price": 42,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF432C16BBK2_16.pdf",
      "cap": 16,
      "ddr": 4,
      "modules": 2,
      "speed": 3200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R3",
      "name": "Kingston FURY Beast 32 GB · KF432C16BBK2/32",
      "price": 72,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF432C16BBK2_32.pdf",
      "cap": 32,
      "ddr": 4,
      "modules": 2,
      "speed": 3200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R4",
      "name": "Kingston FURY Beast 64 GB · KF432C16BBK2/64",
      "price": 130,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF432C16BBK2_64.pdf",
      "cap": 64,
      "ddr": 4,
      "modules": 2,
      "speed": 3200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R5",
      "name": "Kingston FURY Beast 16 GB · KF552C40BBK2-16",
      "price": 65,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF552C40BBK2-16.pdf",
      "cap": 16,
      "ddr": 5,
      "modules": 2,
      "speed": 5200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R6",
      "name": "Kingston FURY Beast 32 GB · KF560C36BBEK2-32",
      "price": 100,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF560C36BBEK2-32.pdf",
      "cap": 32,
      "ddr": 5,
      "modules": 2,
      "speed": 6000,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R7",
      "name": "Kingston FURY Beast 64 GB · KF560C36BBEK2-64",
      "price": 185,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF560C36BBEK2-64.pdf",
      "cap": 64,
      "ddr": 5,
      "modules": 2,
      "speed": 6000,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    },
    {
      "id": "R8",
      "name": "Kingston FURY Beast 16 GB · KF552C40BB-16",
      "price": 48,
      "use": "16 GB cubren uso cotidiano; 32 GB ofrecen margen en máquinas virtuales y creación. Dos módulos pueden aprovechar dos canales.",
      "source": "https://www.kingston.com/datasheets/KF552C40BB-16.pdf",
      "cap": 16,
      "ddr": 5,
      "modules": 1,
      "speed": 5200,
      "note": "Velocidad de perfil XMP/EXPO, no garantizada al arrancar. Depende de CPU, placa, firmware y ajustes; aquí se arranca con valores automáticos seguros."
    }
  ],
  "disk": [
    {
      "id": "S1",
      "name": "Kingston NV3 500 GB · SNV3S/500G",
      "price": 40,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.kingston.com/en/ssd/nv3-nvme-pcie-ssd",
      "cap": 500,
      "interface": "NVMe",
      "gen": 4,
      "kind": "SSD",
      "form": "M.2 2280"
    },
    {
      "id": "S2",
      "name": "Kingston NV3 1 TB · SNV3S/1000G",
      "price": 60,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.kingston.com/en/ssd/nv3-nvme-pcie-ssd",
      "cap": 1000,
      "interface": "NVMe",
      "gen": 4,
      "kind": "SSD",
      "form": "M.2 2280"
    },
    {
      "id": "S3",
      "name": "Kingston NV3 2 TB · SNV3S/2000G",
      "price": 110,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.kingston.com/en/ssd/nv3-nvme-pcie-ssd",
      "cap": 2000,
      "interface": "NVMe",
      "gen": 4,
      "kind": "SSD",
      "form": "M.2 2280"
    },
    {
      "id": "S4",
      "name": "Crucial BX500 500 GB · CT500BX500SSD1",
      "price": 42,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.crucial.com/ssd/bx500/ct500bx500ssd1",
      "cap": 500,
      "interface": "SATA",
      "gen": 0,
      "kind": "SSD",
      "form": "2,5 pulgadas"
    },
    {
      "id": "S5",
      "name": "Crucial BX500 1 TB · CT1000BX500SSD1",
      "price": 65,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.crucial.com/ssd/bx500/ct1000bx500ssd1",
      "cap": 1000,
      "interface": "SATA",
      "gen": 0,
      "kind": "SSD",
      "form": "2,5 pulgadas"
    },
    {
      "id": "S6",
      "name": "Samsung 870 EVO 1 TB · MZ-77E1T0B",
      "price": 90,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://semiconductor.samsung.com/consumer-storage/internal-ssd/870evo/",
      "cap": 1000,
      "interface": "SATA",
      "gen": 0,
      "kind": "SSD",
      "form": "2,5 pulgadas"
    },
    {
      "id": "S7",
      "name": "Samsung 990 PRO 1 TB · MZ-V9P1T0BW",
      "price": 105,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://semiconductor.samsung.com/consumer-storage/internal-ssd/990-pro/",
      "cap": 1000,
      "interface": "NVMe",
      "gen": 4,
      "kind": "SSD",
      "form": "M.2 2280"
    },
    {
      "id": "S8",
      "name": "Seagate BarraCuda 2 TB · ST2000DM008",
      "price": 58,
      "use": "Un SSD favorece la respuesta cotidiana. La capacidad y la velocidad son cualidades diferentes; un HDD ofrece capacidad, pero no sustituye la rapidez de un SSD.",
      "source": "https://www.seagate.com/products/hard-drives/barracuda-hard-drive/",
      "cap": 2000,
      "interface": "SATA",
      "gen": 0,
      "kind": "HDD",
      "form": "3,5 pulgadas"
    }
  ],
  "gpu": [
    {
      "id": "G1",
      "name": "ASRock Radeon RX 6600 Challenger D 8GB",
      "price": 205,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%206600%20Challenger%20D%208GB/",
      "vram": 8,
      "length": 269,
      "thick": 41,
      "recommend": 500,
      "pins": 1,
      "tier": 1,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    },
    {
      "id": "G2",
      "name": "ASRock Radeon RX 7600 Challenger 8GB OC",
      "price": 260,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%207600%20Challenger%208GB%20OC/",
      "vram": 8,
      "length": 269.2,
      "thick": 40.3,
      "recommend": 550,
      "pins": 1,
      "tier": 2,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    },
    {
      "id": "G3",
      "name": "ASRock Radeon RX 7600 XT Challenger 16GB OC",
      "price": 325,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%207600%20XT%20Challenger%2016GB%20OC/",
      "vram": 16,
      "length": 267,
      "thick": 41,
      "recommend": 650,
      "pins": 2,
      "tier": 2,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    },
    {
      "id": "G4",
      "name": "ASRock Radeon RX 7700 XT Challenger 12GB OC",
      "price": 390,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%207700%20XT%20Challenger%2012GB%20OC/",
      "vram": 12,
      "length": 267,
      "thick": 51,
      "recommend": 750,
      "pins": 2,
      "tier": 3,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    },
    {
      "id": "G5",
      "name": "ASRock Radeon RX 7800 XT Challenger 16GB OC",
      "price": 475,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%207800%20XT%20Challenger%2016GB%20OC/",
      "vram": 16,
      "length": 267,
      "thick": 51,
      "recommend": 750,
      "pins": 2,
      "tier": 4,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    },
    {
      "id": "G6",
      "name": "ASRock Radeon RX 7900 GRE Challenger 16GB OC",
      "price": 565,
      "use": "RX 6600/7600: familias orientadas a 1080p. RX 7700 XT y superiores ofrecen más margen en 1440p. La VRAM por sí sola no determina el rendimiento. No se garantizan FPS.",
      "source": "https://www.asrock.com/Graphics-Card/AMD/Radeon%20RX%207900%20GRE%20Challenger%2016GB%20OC/",
      "vram": 16,
      "length": 269,
      "thick": 51,
      "recommend": 750,
      "pins": 2,
      "tier": 5,
      "ports": [
        "HDMI",
        "DP"
      ],
      "note": "La potencia es la recomendación del fabricante para el equipo completo, no el consumo de la GPU. No es un umbral físico de encendido."
    }
  ],
  "psu": [
    {
      "id": "P1",
      "name": "MSI MAG A550BN",
      "price": 55,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.msi.com/Power-Supply/MAG-A550BN/Specification",
      "power": 550,
      "form": "ATX",
      "length": 140,
      "pins": 2,
      "eff": "80 PLUS Bronze",
      "mod": false,
      "eps": 1,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    },
    {
      "id": "P2",
      "name": "MSI MAG A650BN",
      "price": 65,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.msi.com/Power-Supply/MAG-A650BN/Specification",
      "power": 650,
      "form": "ATX",
      "length": 140,
      "pins": 2,
      "eff": "80 PLUS Bronze",
      "mod": false,
      "eps": 1,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    },
    {
      "id": "P3",
      "name": "MSI MAG A750GL PCIE5",
      "price": 95,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.msi.com/Power-Supply/MAG-A750GL-PCIE5/Specification",
      "power": 750,
      "form": "ATX",
      "length": 140,
      "pins": 3,
      "eff": "80 PLUS Gold",
      "mod": true,
      "eps": 2,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    },
    {
      "id": "P4",
      "name": "MSI MAG A850GL PCIE5",
      "price": 115,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.msi.com/Power-Supply/MAG-A850GL-PCIE5/Specification",
      "power": 850,
      "form": "ATX",
      "length": 140,
      "pins": 4,
      "eff": "80 PLUS Gold",
      "mod": true,
      "eps": 2,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    },
    {
      "id": "P5",
      "name": "Corsair RM650e (2025)",
      "price": 100,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.corsair.com/us/en/p/psu/cp-9020302-na/rme-series-rm650e-fully-modular-low-noise-atx-power-supply-cp-9020302-na",
      "power": 650,
      "form": "ATX",
      "length": 140,
      "pins": 3,
      "eff": "Cybenetics Gold",
      "mod": true,
      "eps": 2,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    },
    {
      "id": "P6",
      "name": "Corsair SF750 (2024)",
      "price": 180,
      "use": "Prioriza potencia suficiente, conectores, formato y calidad. Más vatios no hacen que el ordenador consuma necesariamente más. La certificación describe eficiencia, no toda la calidad.",
      "source": "https://www.corsair.com/eu/hu/explorer/diy-builder/power-supply-units/sf750sf850sf1000-platinum-atx-31-everything-you-need-to-know/",
      "power": 750,
      "form": "SFX",
      "length": 100,
      "pins": 2,
      "eff": "80 PLUS Platinum",
      "mod": true,
      "eps": 2,
      "note": "Conectores PCIe de 6+2 pines. No intercambiar cables modulares entre fuentes; se usan exclusivamente los incluidos. El montaje SFX en cajas ATX utiliza el adaptador incluido con SF750."
    }
  ],
  "case": [
    {
      "id": "T1",
      "name": "Cooler Master MasterBox Q300L",
      "price": 55,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.coolermaster.com/en-global/products/masterbox-q300l/",
      "forms": [
        "mATX",
        "Mini-ITX"
      ],
      "psu": "ATX",
      "gpu": 360,
      "cool": 159,
      "psulen": 160,
      "fans": 1,
      "compact": true,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    },
    {
      "id": "T2",
      "name": "Cooler Master MasterBox Q500L",
      "price": 65,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.coolermaster.com/en-global/products/masterbox-q500l/",
      "forms": [
        "ATX",
        "mATX",
        "Mini-ITX"
      ],
      "psu": "ATX",
      "gpu": 360,
      "cool": 160,
      "psulen": 180,
      "fans": 1,
      "compact": false,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    },
    {
      "id": "T3",
      "name": "Cooler Master MasterBox NR200P",
      "price": 100,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.coolermaster.com/en-global/products/masterbox-nr200p/",
      "forms": [
        "Mini-ITX"
      ],
      "psu": "SFX",
      "gpu": 330,
      "cool": 153,
      "psulen": 130,
      "fans": 2,
      "compact": true,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    },
    {
      "id": "T4",
      "name": "Corsair 3000D AIRFLOW",
      "price": 80,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.corsair.com/us/en/p/pc-cases/cc-9011251-ww/3000d-tempered-glass-mid-tower-black-cc-9011251-ww",
      "forms": [
        "ATX",
        "mATX",
        "Mini-ITX"
      ],
      "psu": "ATX",
      "gpu": 360,
      "cool": 170,
      "psulen": 180,
      "fans": 2,
      "compact": false,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    },
    {
      "id": "T5",
      "name": "Corsair 4000D AIRFLOW",
      "price": 105,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.corsair.com/us/en/p/pc-cases/cc-9011200-ww/4000d-airflow-tempered-glass-mid-tower-atx-case-black-cc-9011200-ww",
      "forms": [
        "ATX",
        "mATX",
        "Mini-ITX"
      ],
      "psu": "ATX",
      "gpu": 360,
      "cool": 170,
      "psulen": 220,
      "fans": 2,
      "compact": false,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    },
    {
      "id": "T6",
      "name": "Corsair 5000D AIRFLOW",
      "price": 155,
      "use": "Compara formatos, espacio y ventilación. Una caja grande facilita ampliaciones; una pequeña exige revisar especialmente placa, fuente y disipador.",
      "source": "https://www.corsair.com/us/en/p/pc-cases/cc-9011210-ww/5000d-airflow-tempered-glass-mid-tower-atx-pc-case-black-cc-9011210-ww",
      "forms": [
        "ATX",
        "mATX",
        "Mini-ITX"
      ],
      "psu": "ATX",
      "gpu": 420,
      "cool": 170,
      "psulen": 225,
      "fans": 2,
      "compact": false,
      "thick": 60,
      "note": "Vista esquemática, sin radiador frontal, GPU horizontal y almacenamiento único. NR200P usa panel de cristal (153 mm). Límite didáctico conservador de grosor GPU: 60 mm; las GPU del catálogo no lo superan."
    }
  ],
  "cooler": [
    {
      "id": "H1",
      "name": "ARCTIC Freezer 36",
      "price": 30,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.arctic.de/us/Freezer-36",
      "sockets": [
        "AM4",
        "AM5"
      ],
      "height": 159,
      "quiet": true,
      "low": false,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    },
    {
      "id": "H2",
      "name": "Noctua NH-U12S redux",
      "price": 55,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.noctua.at/en/products/nh-u12s-redux/specifications",
      "sockets": [
        "AM4",
        "AM5"
      ],
      "height": 158,
      "quiet": true,
      "low": false,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    },
    {
      "id": "H3",
      "name": "Noctua NH-L9a-AM4",
      "price": 48,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.noctua.at/en/products/nh-l9a-am4/specifications",
      "sockets": [
        "AM4"
      ],
      "height": 37,
      "quiet": true,
      "low": true,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    },
    {
      "id": "H4",
      "name": "Noctua NH-L9a-AM5",
      "price": 50,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.noctua.at/en/products/nh-l9a-am5/specifications",
      "sockets": [
        "AM5"
      ],
      "height": 37,
      "quiet": true,
      "low": true,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    },
    {
      "id": "H5",
      "name": "Noctua NH-D15",
      "price": 105,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.noctua.at/en/products/nh-d15/specifications",
      "sockets": [
        "AM4",
        "AM5"
      ],
      "height": 165,
      "quiet": true,
      "low": false,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    },
    {
      "id": "H6",
      "name": "be quiet! Pure Rock 2",
      "price": 40,
      "use": "Las torres ofrecen más margen térmico; los modelos de perfil bajo permiten cajas compactas. El ruido depende también de la carga y de las curvas de ventilación.",
      "source": "https://www.bequiet.com/en/cpucooler/1720",
      "sockets": [
        "AM4",
        "AM5"
      ],
      "height": 155,
      "quiet": true,
      "low": false,
      "note": "Se supone kit de montaje para los sockets indicados. CPU a valores de fábrica, sin overclock. Los disipadores bajos tienen menos margen en cargas sostenidas; la práctica no calcula temperaturas reales."
    }
  ],
  "monitor": [
    {
      "id": "D1",
      "name": "ASUS VA24EHE",
      "price": 100,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/displays-desktops/monitors/eye-care/va24ehe/techspec/",
      "size": 23.8,
      "res": "1920 × 1080",
      "hz": 75,
      "color": false,
      "ports": [
        "HDMI"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    },
    {
      "id": "D2",
      "name": "ASUS VA27EHE",
      "price": 130,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/displays-desktops/monitors/eye-care/va27ehe/techspec/",
      "size": 27,
      "res": "1920 × 1080",
      "hz": 75,
      "color": false,
      "ports": [
        "HDMI"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    },
    {
      "id": "D3",
      "name": "ASUS ProArt PA248QV",
      "price": 200,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa248qv/techspec/",
      "size": 24.1,
      "res": "1920 × 1200",
      "hz": 75,
      "color": true,
      "ports": [
        "HDMI",
        "DP"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    },
    {
      "id": "D4",
      "name": "ASUS ProArt PA278QV",
      "price": 265,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa278qv/techspec/",
      "size": 27,
      "res": "2560 × 1440",
      "hz": 75,
      "color": true,
      "ports": [
        "HDMI",
        "DP"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    },
    {
      "id": "D5",
      "name": "ASUS ProArt PA278CV",
      "price": 315,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/es/displays-desktops/monitors/proart/proart-display-pa278cv/",
      "size": 27,
      "res": "2560 × 1440",
      "hz": 75,
      "color": true,
      "ports": [
        "HDMI",
        "DP"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    },
    {
      "id": "D6",
      "name": "ASUS TUF Gaming VG27AQ",
      "price": 290,
      "use": "En fotografía importan resolución y fidelidad del color; en juego, también refresco. Una pantalla grande no tiene necesariamente más resolución.",
      "source": "https://www.asus.com/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg27aq/techspec/",
      "size": 27,
      "res": "2560 × 1440",
      "hz": 165,
      "color": false,
      "ports": [
        "HDMI",
        "DP"
      ],
      "panel": "IPS",
      "note": "ProArt: 100 % sRGB y calibración de fábrica ΔE < 2. VG27AQ: hasta 165 Hz con overclock; no se exige ese refresco en la simulación. Se usan HDMI o DisplayPort."
    }
  ]
};
const PROFILES = [
  {
    "id": 0,
    "name": "Estudio y ofimática",
    "person": "Ana",
    "budget": 800,
    "screen": true,
    "ram": 16,
    "disk": 500,
    "cpu": 1,
    "gpu": 0,
    "wifi": true,
    "compact": false,
    "text": "Trabajas para Ana, administrativa que estudia cursos online. Usa muchas pestañas, LibreOffice, correo, videollamadas y vídeo. No juega ni edita vídeo exigente.",
    "needs": [
      "16 GB de RAM como mínimo",
      "SSD de al menos 500 GB",
      "Wi-Fi y Bluetooth",
      "Pantalla de 23–24,5 pulgadas, al menos Full HD"
    ],
    "priority": "Respuesta cotidiana, bajo consumo y precio."
  },
  {
    "id": 1,
    "name": "Programación y máquinas virtuales",
    "person": "Marcos",
    "budget": 850,
    "screen": false,
    "ram": 32,
    "disk": 1000,
    "cpu": 2,
    "gpu": 0,
    "wifi": false,
    "compact": false,
    "text": "Marcos desarrolla programas y experimenta con Linux. Mantendrá un IDE, navegador, servidores locales y una máquina virtual abiertos.",
    "needs": [
      "32 GB de RAM como mínimo",
      "SSD de 1 TB o más",
      "CPU adecuada para multitarea",
      "Posibilidades de ampliación"
    ],
    "priority": "CPU, RAM, SSD y ampliación."
  },
  {
    "id": 2,
    "name": "Fotografía y creación",
    "person": "Lucía",
    "budget": 1750,
    "screen": true,
    "ram": 32,
    "disk": 1000,
    "cpu": 2,
    "gpu": 2,
    "wifi": false,
    "compact": false,
    "text": "Lucía trabaja con fotografías de alta resolución, diseño y vídeo ocasional en 1080p/4K. Quiere una pantalla que permita valorar el color.",
    "needs": [
      "32 GB de RAM",
      "SSD de al menos 1 TB",
      "GPU dedicada de gama media",
      "Pantalla de 27 pulgadas QHD, con buena fidelidad del color"
    ],
    "priority": "Pantalla, RAM, SSD y rendimiento multimedia."
  },
  {
    "id": 3,
    "name": "Gaming 1080p equilibrado",
    "person": "Javier",
    "budget": 1150,
    "screen": false,
    "ram": 16,
    "disk": 1000,
    "cpu": 2,
    "gpu": 2,
    "wifi": false,
    "compact": false,
    "text": "Javier juega en 1080p y utiliza también el ordenador para estudiar. Ya tiene una pantalla Full HD. Busca equilibrio dentro de su presupuesto.",
    "needs": [
      "GPU dedicada adecuada para 1080p",
      "16 GB de RAM o más",
      "SSD de al menos 1 TB",
      "Fuente y ventilación adecuadas"
    ],
    "priority": "Gráfica, equilibrio y coste."
  },
  {
    "id": 4,
    "name": "Gaming 1440p y creación",
    "person": "Sergio",
    "budget": 2050,
    "screen": false,
    "ram": 32,
    "disk": 1000,
    "cpu": 2,
    "gpu": 3,
    "wifi": false,
    "compact": false,
    "text": "Sergio tiene una pantalla QHD. Quiere jugar a 1440p, grabar partidas y editar vídeos ocasionalmente.",
    "needs": [
      "GPU con margen para 1440p",
      "32 GB de RAM",
      "SSD NVMe de al menos 1 TB",
      "Fuente adecuada y caja ventilada"
    ],
    "priority": "GPU, CPU y capacidad de ampliación."
  },
  {
    "id": 5,
    "name": "Oficina compacta y silenciosa",
    "person": "Carmen",
    "budget": 800,
    "screen": true,
    "ram": 16,
    "disk": 500,
    "cpu": 1,
    "gpu": 0,
    "wifi": true,
    "compact": true,
    "text": "Carmen dirige una asesoría con poco espacio. Trabaja muchas horas con documentos, hojas de cálculo y videollamadas.",
    "needs": [
      "16 GB de RAM y SSD de 500 GB o más",
      "Caja compacta",
      "Wi-Fi y Bluetooth",
      "Pantalla de 23–24,5 pulgadas, al menos Full HD"
    ],
    "priority": "Tamaño, silencio, consumo y fiabilidad."
  }
];
