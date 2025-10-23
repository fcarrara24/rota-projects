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
    immagine: 'img_01.png',
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
    immagine: 'img_02.png',
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
    immagine: 'img_03.png',
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
    immagine: 'img_04.png',
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
    immagine: 'img_05.png',
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
      en: 'Parallel Lathes',
      it: 'Torni Paralleli'
    },
    descrizione: {
      en: 'Machines that allow us to work with diameters up to 700 mm in turning operations',
      it: 'Macchine che ci permettono di lavorare diametri fino a 700 mm nelle operazioni di tornitura'
    }
  },
  {
    id: '2',
    nome: {
      en: 'Manual Cutters',
      it: 'Tagliatrici Manuali'
    },
    descrizione: {
      en: 'Two manual cutters for various cutting operations',
      it: 'Due tagliatrici manuali per diverse operazioni di taglio'
    }
  },
  {
    id: '3',
    nome: {
      en: 'NAKAMURA CNC Lathe',
      it: 'Tornio CNC NAKAMURA'
    },
    descrizione: {
      en: 'High-precision CNC lathe for complex turning operations',
      it: 'Tornio CNC di precisione per lavorazioni complesse'
    }
  },
  {
    id: '4',
    nome: {
      en: 'SMEC CNC Lathe',
      it: 'Tornio CNC SMEC'
    },
    descrizione: {
      en: 'New generation CNC lathe with three radial and three frontal motorized tools',
      it: 'Tornio CNC di nuova generazione con tre utensili radiali e tre frontali motorizzati'
    }
  },
  {
    id: '5',
    nome: {
      en: '3-Axis Machining Center',
      it: 'Centro di Lavoro a 3 Assi'
    },
    descrizione: {
      en: 'Versatile machining center for complex three-dimensional operations',
      it: 'Centro di lavoro versatile per operazioni tridimensionali complesse'
    }
  },
  {
    id: '6',
    nome: {
      en: '4-Axis Machining Center',
      it: 'Centro di Lavoro a 4 Assi'
    },
    descrizione: {
      en: 'Advanced machining center with fourth axis for complex operations',
      it: 'Centro di lavoro avanzato con quarto asse per lavorazioni complesse'
    }
  },
  {
    id: '7',
    nome: {
      en: 'Radial and Pillar Drills',
      it: 'Trapani a Colonna e Radiali'
    },
    descrizione: {
      en: 'One radial drill and various pillar drills for precision drilling operations',
      it: 'Un trapano radiale e vari trapani a colonna per operazioni di foratura di precisione'
    }
  },
  {
    id: '8',
    nome: {
      en: 'Welding Machines with Positioner',
      it: 'Macchine per Saldatura con Posizionatore'
    },
    descrizione: {
      en: 'Welding equipment for small carpentry works with positioner for optimal workpiece orientation',
      it: 'Attrezzature per saldatura per piccole lavorazioni di carpenteria con posizionatore per l\'orientamento ottimale dei pezzi'
    }
  },
  {
    id: '9',
    nome: {
      en: 'Press',
      it: 'Presa'
    },
    descrizione: {
      en: 'Press for various mechanical operations',
      it: 'Presa per diverse operazioni meccaniche'
    }
  },
  {
    id: '10',
    nome: {
      en: 'Measuring Instruments',
      it: 'Strumenti di Misura'
    },
    descrizione: {
      en: 'Complete set of measuring tools including digital calipers (0-150 to 1500mm), internal micrometers, external micrometers (0-900mm), depth micrometers and other necessary instruments',
      it: 'Set completo di strumenti di misurazione tra cui calibri digitali (0-150 a 1500mm), micrometri interni, micrometri esterni (0-900mm), micrometri di profondità e altri strumenti necessari'
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
