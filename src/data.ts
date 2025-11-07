import { WorkPiece, Material, Machinery, Strength } from './types';

export const workPieces: WorkPiece[] = [
  {
    id: '1',
    nome_pezzo: {
      en: 'Lids',
      it: 'Coperchi'
    },
    lista_materiale: {
      en: ['UNS32760'],
      it: ['UNS32760']
    },
    provenienza: {
      en: 'Valve',
      it: 'Valvole'
    },
    punti_di_forza: {
      en: [''],
      it: ['']
    },
    lotto: {
      en: 'Custom batches with various pieces available upon request',
      it: 'Lotti personalizzati con pezzi vari su richiesta del cliente'
    },
    immagine: 'img_01.png',
    descrizione_completa: {
      en: '',
      it: ''
    }
  },
  {
    id: '2',
    nome_pezzo: {
      en: 'Shutter',
      it: 'Otturatore'
    },
    lista_materiale: {
      en: ['INCONEL 718', 'Stellite'],
      it: ['INCONEL 718', 'Stellite']
    },
    provenienza: {
      en: 'Valve',
      it: 'Valvole'
    },
    punti_di_forza: {
      en: [''],
      it: ['']
    },
    lotto: {
      en: 'Custom batches with various pieces available upon request',
      it: 'Lotti personalizzati con pezzi vari su richiesta del cliente'
    },
    immagine: 'img_02.png',
    descrizione_completa: {
      en: '',
      it: ''
    }
  },
  {
    id: '3',
    nome_pezzo: {
      en: 'Blind Sealing Discs',
      it: 'Dischi Ciechi di Tenuta'
    },
    lista_materiale: {
      en: ['Stainless Steel'],
      it: ['Acciaio Inox']
    },
    provenienza: {
      en: 'Plant Engineering',
      it: 'Impiantistica'
    },
    punti_di_forza: {
      en: [''],
      it: ['']
    },
    lotto: {
      en: 'Custom batches with various pieces available upon request',
      it: 'Lotti personalizzati con pezzi vari su richiesta del cliente'
    },
    immagine: 'img_03.png',
    descrizione_completa: {
      en: '',
      it: ''
    }
  },
  {
    id: '4',
    nome_pezzo: {
      en: 'Triple Sealing Rings',
      it: 'Anelli Tripli Di tenuta'
    },
    lista_materiale: {
      en: ['AISI 420', 'PEEK', 'PTFE'],
      it: ['AISI 420', 'PEEK', 'PTFE']
    },
    provenienza: {
      en: 'Plant Engineering',
      it: 'Impiantistica'
    },
    punti_di_forza: {
      en: [''],
      it: ['']
    },
    lotto: {
      en: 'Custom batches with various pieces available upon request',
      it: 'Lotti personalizzati con pezzi vari su richiesta del cliente'
    },
    immagine: 'img_04.png',
    descrizione_completa: {
      en: '',
      it: ''
    }
  },
  {
    id: '5',
    nome_pezzo: {
      en: 'Ring with Tangent Cuts for Sealing',
      it: 'Anello Con Tagli Tangenti per Tenuta'
    },
    lista_materiale: {
      en: ['PEEK'],
      it: ['PEEK']
    },
    provenienza: {
      en: 'Plant Engineering',
      it: 'Impiantistica'
    },
    punti_di_forza: {
      en: ['Lightweight', 'Resistance to marine corrosion', 'Anodising available'],
      it: ['Leggerezza', 'Resistenza alla corrosione marina', 'Anodizzazione disponibile']
    },
    lotto: {
      en: 'Custom batches with various pieces available upon request',
      it: 'Lotti personalizzati con pezzi vari su richiesta del cliente'
    },
    immagine: 'img_05.png',
    descrizione_completa: {
      en: '',
      it: ''
    }
  }
];

// todo creare sezione dedicata materiali riporto
// todo controllare altezza costante degli elementi, 
// todo aggiungere foto dei materiali
// todo (secondo me) aggiungere la storia dell'origine dell'azienda
// todo attendere per eventuale foto di gruppo per inserimento elementi
export const materials: Material[] = [
  {
    id: '1',
    nome: {
      en: 'Stainless Steel',
      it: 'Acciaio Inossidabile'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '2',
    nome: {
      en: 'Carbon Steel',
      it: 'Acciaio al Carbonio'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '3',
    nome: {
      en: 'Aluminium',
      it: 'Alluminio'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '4',
    nome: {
      en: 'Bronze',
      it: 'Bronzo'
    },
    descrizione: {
      en: 'Aluminum Bronze',
      it: 'Bronzo Alluminio'
    }
  },
  {
    id: '5',
    nome: {
      en: 'Brass',
      it: 'Ottone'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '6',
    nome: {
      en: 'Titanium',
      it: 'Titanio'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '7',
    nome: {
      en: 'Engineering Plastics',
      it: 'Plastica Tecnica e derivati'
    },
    descrizione: {
      en: 'PEEK',
      it: 'PEEK'
    }
  },
  {
    id: '8',
    nome: {
      en: 'Alloy Steel',
      it: 'Acciaio Legato'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '9',
    nome: {
      en: 'Tungsten',
      it: 'Tungsteno'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '10',
    nome: {
      en: 'Copper',
      it: 'Rame'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '11',
    nome: {
      en: 'White Metal',
      it: 'Metallo Bianco'
    },
    descrizione: {
      en: '',
      it: ''
    }
  },
  {
    id: '12',
    nome: {
      en: 'Superalloys',
      it: 'Superleghe'
    },
    descrizione: {
      en: 'InconeL 718, InconeL API 718, UNS 31803, UNS 32750, UNS 32760, UNS S31254',
      it: 'InconeL 718, InconeL API 718, UNS 31803, UNS 32750, UNS 32760, UNS S31254'
    }
  }
];

// Materiali di Riporto
export const replacement_materials: Material[] = [
  {
    id: '13',
    nome: {
      en: 'Stellite',
      it: 'Stellite'
    },
    descrizione: {
      en: 'Cobalt-based alloy with exceptional wear and corrosion resistance',
      it: 'Lega a base di cobalto con eccezionale resistenza all\'usura e alla corrosione'
    }
  },
  {
    id: '14',
    nome: {
      en: 'INCONEL',
      it: 'INCONEL'
    },
    descrizione: {
      en: 'Nickel-based superalloy with excellent mechanical properties and corrosion resistance at high temperatures',
      it: 'Superlega a base di nichel con eccellenti proprietà meccaniche e resistenza alla corrosione ad alte temperature'
    }
  },
  // todo: gestione altezza fissa elementi nella pagina
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
      it: 'Seghetti Manuali'
    },
    descrizione: {
      en: 'Two manual cutters for various cutting operations',
      it: 'Due seghetti manuali per diverse operazioni di taglio'
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
      it: 'Pressa'
    },
    descrizione: {
      en: 'Press for various mechanical operations',
      it: 'Pressa per diverse operazioni meccaniche'
    }
  },
  {
    id: '10',
    nome: {
      en: 'Measuring Instruments',
      it: 'Strumenti di Misura'
    },
    descrizione: {
      en: 'Complete set of measuring tools including digital calipers (0-150 to 1500mm), internal micrometers, external micrometers (0-900mm), depth micrometers, altimeter and other necessary instruments',
      it: 'Set completo di strumenti di misurazione tra cui calibri digitali (0-150 a 1500mm), micrometri interni, micrometri esterni (0-900mm), micrometri di profondità, altimetro tesa e altri strumenti necessari'
    }
  },
  {
    id: '11',
    nome: {
      en: 'Manual Cutters and Lapidaries',
      it: 'Frese Manuali e Lapidelli'
    },
    descrizione: {
      en: '',
      it: ''
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
