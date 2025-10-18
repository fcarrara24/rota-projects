import { WorkPiece, Material, Machinery, Strength } from './types';

export const workPieces: WorkPiece[] = [
  {
    id: '1',
    nome_pezzo: {
      en: 'A2 Stainless Steel Flange',
      it: 'Flangia Inox A2'
    },
    lista_materiale: {
      en: ['AISI 304', 'Stainless steel'],
      it: ['AISI 304', 'Acciaio Inossidabile']
    },
    provenienza: {
      en: 'Automotive',
      it: 'Automotive'
    },
    punti_di_forza: {
      en: ['High corrosion resistance', 'Polished finish', 'Tight tolerances'],
      it: ['Alta resistenza alla corrosione', 'Finitura lucida', 'Tolleranze ristrette']
    },
    lotto: {
      en: 'Batch of 50 pieces',
      it: 'Serie 50 pezzi'
    },
    immagine: 'flangia_inox_a2.jpg',
    descrizione_completa: {
      en: 'Flange made of AISI 304 stainless steel with precision machining. Mainly used in the automotive industry for applications that require high corrosion resistance and premium surface finishing.',
      it: 'Flangia realizzata in acciaio inossidabile AISI 304 con lavorazioni di precisione. Utilizzata principalmente nel settore automotive per applicazioni che richiedono alta resistenza alla corrosione e finiture di qualità superiore.'
    }
  },
  {
    id: '2',
    nome_pezzo: {
      en: 'Engine Shaft Hub',
      it: 'Mozzo Albero Motore'
    },
    lista_materiale: {
      en: ['C45', 'Quenched and tempered steel'],
      it: ['C45', 'Acciaio bonificato']
    },
    provenienza: {
      en: 'Industrial',
      it: 'Industriale'
    },
    punti_di_forza: {
      en: ['High mechanical strength', 'CNC machining', 'ISO certification'],
      it: ['Resistenza meccanica elevata', 'Lavorazione CNC', 'Certificazione ISO']
    },
    lotto: {
      en: 'Mass production',
      it: 'Produzione in serie'
    },
    immagine: 'mozzo_albero_1.jpg',
    descrizione_completa: {
      en: 'Hub for engine shafts made from quenched and tempered C45 steel. Machined with CNC centers to guarantee the dimensional precision and concentricity required for high-load industrial applications.',
      it: 'Mozzo per albero motore realizzato in acciaio C45 bonificato. Lavorato con centri CNC per garantire la massima precisione dimensionale e concentricità necessarie per applicazioni industriali ad alte sollecitazioni.'
    }
  },
  {
    id: '3',
    nome_pezzo: {
      en: 'Bronze Bushing',
      it: 'Boccola Bronzo'
    },
    lista_materiale: {
      en: ['CuSn12 bronze', 'Tin bronze'],
      it: ['Bronzo CuSn12', 'Bronzo al stagno']
    },
    provenienza: {
      en: 'General mechanics',
      it: 'Meccanica generale'
    },
    punti_di_forza: {
      en: ['Low friction coefficient', 'Wear resistance', 'Dimensional accuracy'],
      it: ['Basso coefficiente di attrito', "Resistenza all'usura", 'Precisione dimensionale']
    },
    lotto: {
      en: 'Batch of 20 pieces',
      it: 'Lotto 20 pezzi'
    },
    immagine: 'boccola_bronzo.jpg',
    descrizione_completa: {
      en: 'Bushing in tin bronze (CuSn12) for sliding bearings. Machined on precision lathes to guarantee a perfect interface with the shaft and maximise service life.',
      it: 'Boccola in bronzo al stagno (CuSn12) per cuscinetti a strisciamento. Lavorata con torni di precisione per garantire la perfetta interfaccia con l\'albero e massimizzare la durata in esercizio.'
    }
  },
  {
    id: '4',
    nome_pezzo: {
      en: 'Titanium Threaded Pin',
      it: 'Perno Filettato Titanio'
    },
    lista_materiale: {
      en: ['Ti6Al4V', 'Grade 5 titanium'],
      it: ['Ti6Al4V', 'Titanio Grade 5']
    },
    provenienza: {
      en: 'Aerospace',
      it: 'Aerospaziale'
    },
    punti_di_forza: {
      en: ['Extreme lightness', 'Fatigue resistance', 'Biocompatibility'],
      it: ['Leggerezza estrema', 'Resistenza alla fatica', 'Biocompatibilità']
    },
    lotto: {
      en: 'Prototype',
      it: 'Prototipo'
    },
    immagine: 'perno_titanio.jpg',
    descrizione_completa: {
      en: 'Threaded pin in Ti6Al4V titanium alloy designed for the aerospace sector. Machining parameters are strictly controlled to avoid overheating and ensure the required mechanical properties.',
      it: 'Perno filettato in lega di titanio Ti6Al4V destinato al settore aerospaziale. Lavorazione critica con parametri controllati per evitare surriscaldamento del materiale e garantire le proprietà meccaniche richieste.'
    }
  },
  {
    id: '5',
    nome_pezzo: {
      en: 'Anticorodal Aluminum Ring',
      it: 'Ghiera Alluminio Anticorodal'
    },
    lista_materiale: {
      en: ['AA6082', 'Anticorodal aluminum'],
      it: ['AA6082', 'Alluminio anticorodal']
    },
    provenienza: {
      en: 'Marine industry',
      it: 'Nautica'
    },
    punti_di_forza: {
      en: ['Lightweight', 'Resistance to marine corrosion', 'Anodising available'],
      it: ['Leggerezza', 'Resistenza alla corrosione marina', 'Anodizzazione disponibile']
    },
    lotto: {
      en: 'Batch of 100 pieces',
      it: 'Serie 100 pezzi'
    },
    immagine: 'ghiera_alluminio.jpg',
    descrizione_completa: {
      en: 'Ring in AA6082 aluminium alloy with anticorodal treatment, ideal for marine applications. Optional anodising further increases resistance to salt corrosion.',
      it: 'Ghiera in lega di alluminio AA6082 con trattamento anticorodal, ideale per applicazioni nautiche. Possibilità di anodizzazione per incrementare ulteriormente la resistenza alla corrosione salina.'
    }
  }
];

export const materials: Material[] = [
  {
    id: '1',
    nome: {
      en: 'Stainless Steel',
      it: 'Acciaio Inossidabile'
    },
    descrizione: {
      en: 'AISI 304, AISI 316, AISI 430',
      it: 'AISI 304, AISI 316, AISI 430'
    }
  },
  {
    id: '2',
    nome: {
      en: 'Carbon Steel',
      it: 'Acciaio al Carbonio'
    },
    descrizione: {
      en: 'C40, C45, C50',
      it: 'C40, C45, C50'
    }
  },
  {
    id: '3',
    nome: {
      en: 'Aluminium',
      it: 'Alluminio'
    },
    descrizione: {
      en: 'AA6082, AA7075, Ergal',
      it: 'AA6082, AA7075, Ergal'
    }
  },
  {
    id: '4',
    nome: {
      en: 'Bronze',
      it: 'Bronzo'
    },
    descrizione: {
      en: 'CuSn12, CuAl10',
      it: 'CuSn12, CuAl10'
    }
  },
  {
    id: '5',
    nome: {
      en: 'Brass',
      it: 'Ottone'
    },
    descrizione: {
      en: 'CuZn39Pb3, OT58',
      it: 'CuZn39Pb3, OT58'
    }
  },
  {
    id: '6',
    nome: {
      en: 'Titanium',
      it: 'Titanio'
    },
    descrizione: {
      en: 'Ti6Al4V, Grade 2',
      it: 'Ti6Al4V, Grade 2'
    }
  },
  {
    id: '7',
    nome: {
      en: 'Engineering Plastics',
      it: 'Plastica Tecnica'
    },
    descrizione: {
      en: 'POM, PTFE, Nylon',
      it: 'POM, PTFE, Nylon'
    }
  },
  {
    id: '8',
    nome: {
      en: 'Alloy Steel',
      it: 'Acciaio Legato'
    },
    descrizione: {
      en: '39NiCrMo3, 42CrMo4',
      it: '39NiCrMo3, 42CrMo4'
    }
  }
];

export const machinery: Machinery[] = [
  {
    id: '1',
    nome: {
      en: 'NAKAMURA TMC 30',
      it: 'NAKAMURA TMC 30'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 12,000 RPM, 12kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 12.000 giri/min, 12kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '2',
    nome: {
      en: 'NAKAMURA AS200LM',
      it: 'NAKAMURA AS200LM'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 12,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 12.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '3',
    nome: {
      en: 'SMEC SL-25M',
      it: 'SMEC SL-25M'
    },
    descrizione: {
      en: 'Twin-spindle, single-turret turning center with Y-axis and live tooling, 65mm bar capacity, 5,000 RPM, 11kW, 12-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta singola, asse Y e utensili motorizzati, capacità barre 65mm, 5.000 giri/min, 11kW, magazzino utensili 12 posti'
    }
  },
  {
    id: '4',
    nome: {
      en: 'SMEC SL-20M',
      it: 'SMEC SL-20M'
    },
    descrizione: {
      en: 'Single-spindle, single-turret turning center with Y-axis and live tooling, 51mm bar capacity, 5,000 RPM, 11kW, 12-station tool magazine',
      it: 'Centro di tornitura mono-punta con torretta singola, asse Y e utensili motorizzati, capacità barre 51mm, 5.000 giri/min, 11kW, magazzino utensili 12 posti'
    }
  },
  {
    id: '5',
    nome: {
      en: 'NAKAMURA WT-150',
      it: 'NAKAMURA WT-150'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 5,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 5.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '6',
    nome: {
      en: 'NAKAMURA AS-200',
      it: 'NAKAMURA AS-200'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 6,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 6.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '7',
    nome: {
      en: 'NAKAMURA TMC-20',
      it: 'NAKAMURA TMC-20'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 6,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 6.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '8',
    nome: {
      en: 'NAKAMURA WT-100',
      it: 'NAKAMURA WT-100'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 5,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 5.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '9',
    nome: {
      en: 'NAKAMURA SC-200',
      it: 'NAKAMURA SC-200'
    },
    descrizione: {
      en: 'Twin-spindle, single-turret turning center with Y-axis and live tooling, 65mm bar capacity, 6,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta singola, asse Y e utensili motorizzati, capacità barre 65mm, 6.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '10',
    nome: {
      en: 'NAKAMURA TMC-15',
      it: 'NAKAMURA TMC-15'
    },
    descrizione: {
      en: 'Twin-spindle, twin-turret turning center with Y-axis and live tooling, 65mm bar capacity, 6,000 RPM, 15kW, 24-station tool magazine',
      it: 'Centro di tornitura bi-punta con torretta bipla, asse Y e utensili motorizzati, capacità barre 65mm, 6.000 giri/min, 15kW, magazzino utensili 24 posti'
    }
  },
  {
    id: '11',
    nome: {
      en: 'MAZAK VTC-200A',
      it: 'MAZAK VTC-200A'
    },
    descrizione: {
      en: 'Vertical machining center, 1,000 x 500 x 510mm travels, 8,000 RPM, 15kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.000 x 500 x 510mm, 8.000 giri/min, 15kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '12',
    nome: {
      en: 'MAZAK VTC-300C',
      it: 'MAZAK VTC-300C'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 12,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 12.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '13',
    nome: {
      en: 'MAZAK VTC-200B',
      it: 'MAZAK VTC-200B'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 8,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 8.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '14',
    nome: {
      en: 'MAZAK VTC-300B',
      it: 'MAZAK VTC-300B'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 8,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 8.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '15',
    nome: {
      en: 'MAZAK VTC-200',
      it: 'MAZAK VTC-200'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 8,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 8.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '16',
    nome: {
      en: 'MAZAK VTC-300',
      it: 'MAZAK VTC-300'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 8,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 8.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '17',
    nome: {
      en: 'MAZAK VTC-200C',
      it: 'MAZAK VTC-200C'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 12,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 12.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '18',
    nome: {
      en: 'MAZAK VTC-300A',
      it: 'MAZAK VTC-300A'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 8,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 8.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '19',
    nome: {
      en: 'MAZAK VTC-200/16SR',
      it: 'MAZAK VTC-200/16SR'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 16,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 16.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '20',
    nome: {
      en: 'MAZAK VTC-300/16SR',
      it: 'MAZAK VTC-300/16SR'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 16,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 16.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '21',
    nome: {
      en: 'MAZAK VTC-200/12',
      it: 'MAZAK VTC-200/12'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 12,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 12.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '22',
    nome: {
      en: 'MAZAK VTC-300/12',
      it: 'MAZAK VTC-300/12'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 12,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 12.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '23',
    nome: {
      en: 'MAZAK VTC-200/16',
      it: 'MAZAK VTC-200/16'
    },
    descrizione: {
      en: 'Vertical machining center, 1,020 x 510 x 510mm travels, 16,000 RPM, 15/11kW, 24-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.020 x 510 x 510mm, 16.000 giri/min, 15/11kW, cambio utensile 24 posizioni, predisposizione 4° asse'
    }
  },
  {
    id: '24',
    nome: {
      en: 'MAZAK VTC-300/16',
      it: 'MAZAK VTC-300/16'
    },
    descrizione: {
      en: 'Vertical machining center, 1,220 x 510 x 560mm travels, 16,000 RPM, 15/11kW, 30-station tool changer, 4th axis ready',
      it: 'Centro di lavoro verticale, corsa 1.220 x 510 x 560mm, 16.000 giri/min, 15/11kW, cambio utensile 30 posizioni, predisposizione 4° asse'
    }
  }
];

export const strengths: Strength[] = [
  {
    id: '1',
    titolo: {
      en: 'Fast turnaround times',
      it: 'Tempi di realizzazione rapidi'
    },
    descrizione: {
      en: 'With a modern machine park and optimised planning we deliver quickly without compromising quality.',
      it: 'Grazie al nostro parco macchine moderno e alla pianificazione ottimizzata, garantiamo consegne veloci senza compromettere la qualità'
    },
    icon: 'clock'
  },
  {
    id: '2',
    titolo: {
      en: 'Tailor-made production',
      it: 'Produzione su misura'
    },
    descrizione: {
      en: 'We manufacture every part according to customer specifications, from prototypes to small batches and high-volume production.',
      it: 'Realizziamo ogni pezzo secondo le specifiche del cliente, dal prototipo alla piccola serie fino alla produzione in grande scala'
    },
    icon: 'settings'
  },
  {
    id: '3',
    titolo: {
      en: 'Customer-oriented support',
      it: 'Disponibilità verso il cliente'
    },
    descrizione: {
      en: 'Continuous support from design to delivery, with technical advice to optimise manufacturing time and cost.',
      it: 'Assistenza continua dalla progettazione alla consegna, con consulenza tecnica per ottimizzare tempi e costi di produzione'
    },
    icon: 'user-check'
  }
];
