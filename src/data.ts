import { WorkPiece, Material, Machinery, Strength } from './types';

export const workPieces: WorkPiece[] = [
  {
    id: '1',
    nome_pezzo: 'Flangia Inox A2',
    lista_materiale: ['AISI 304', 'Acciaio Inossidabile'],
    provenienza: 'Automotive',
    punti_di_forza: ['Alta resistenza alla corrosione', 'Finitura lucida', 'Tolleranze ristrette'],
    lotto: 'Serie 50 pezzi',
    immagine: 'flangia_inox_a2.jpg',
    descrizione_completa: 'Flangia realizzata in acciaio inossidabile AISI 304 con lavorazioni di precisione. Utilizzata principalmente nel settore automotive per applicazioni che richiedono alta resistenza alla corrosione e finiture di qualità superiore.'
  },
  {
    id: '2',
    nome_pezzo: 'Mozzo Albero Motore',
    lista_materiale: ['C45', 'Acciaio bonificato'],
    provenienza: 'Industriale',
    punti_di_forza: ['Resistenza meccanica elevata', 'Lavorazione CNC', 'Certificazione ISO'],
    lotto: 'Produzione in serie',
    immagine: 'mozzo_albero_1.jpg',
    descrizione_completa: 'Mozzo per albero motore realizzato in acciaio C45 bonificato. Lavorato con centri CNC per garantire la massima precisione dimensionale e concentricità necessarie per applicazioni industriali ad alte sollecitazioni.'
  },
  {
    id: '3',
    nome_pezzo: 'Boccola Bronzo',
    lista_materiale: ['Bronzo CuSn12', 'Bronzo al stagno'],
    provenienza: 'Meccanica generale',
    punti_di_forza: ['Basso coefficiente di attrito', 'Resistenza all\'usura', 'Precisione dimensionale'],
    lotto: 'Lotto 20 pezzi',
    immagine: 'boccola_bronzo.jpg',
    descrizione_completa: 'Boccola in bronzo al stagno (CuSn12) per cuscinetti a strisciamento. Lavorata con torni di precisione per garantire la perfetta interfaccia con l\'albero e massimizzare la durata in esercizio.'
  },
  {
    id: '4',
    nome_pezzo: 'Perno Filettato Titanio',
    lista_materiale: ['Ti6Al4V', 'Titanio Grade 5'],
    provenienza: 'Aerospaziale',
    punti_di_forza: ['Leggerezza estrema', 'Resistenza alla fatica', 'Biocompatibilità'],
    lotto: 'Prototipo',
    immagine: 'perno_titanio.jpg',
    descrizione_completa: 'Perno filettato in lega di titanio Ti6Al4V destinato al settore aerospaziale. Lavorazione critica con parametri controllati per evitare surriscaldamento del materiale e garantire le proprietà meccaniche richieste.'
  },
  {
    id: '5',
    nome_pezzo: 'Ghiera Alluminio Anticorodal',
    lista_materiale: ['AA6082', 'Alluminio anticorodal'],
    provenienza: 'Nautica',
    punti_di_forza: ['Leggerezza', 'Resistenza alla corrosione marina', 'Anodizzazione disponibile'],
    lotto: 'Serie 100 pezzi',
    immagine: 'ghiera_alluminio.jpg',
    descrizione_completa: 'Ghiera in lega di alluminio AA6082 con trattamento anticorodal, ideale per applicazioni nautiche. Possibilità di anodizzazione per incrementare ulteriormente la resistenza alla corrosione salina.'
  }
];

export const materials: Material[] = [
  { id: '1', nome: 'Acciaio Inossidabile', descrizione: 'AISI 304, AISI 316, AISI 430' },
  { id: '2', nome: 'Acciaio al Carbonio', descrizione: 'C40, C45, C50' },
  { id: '3', nome: 'Alluminio', descrizione: 'AA6082, AA7075, Ergal' },
  { id: '4', nome: 'Bronzo', descrizione: 'CuSn12, CuAl10' },
  { id: '5', nome: 'Ottone', descrizione: 'CuZn39Pb3, OT58' },
  { id: '6', nome: 'Titanio', descrizione: 'Ti6Al4V, Grade 2' },
  { id: '7', nome: 'Plastica Tecnica', descrizione: 'POM, PTFE, Nylon' },
  { id: '8', nome: 'Acciaio Legato', descrizione: '39NiCrMo3, 42CrMo4' }
];

export const machinery: Machinery[] = [
  {
    id: '1',
    nome: 'Tornio CNC Mazak QuickTurn 250',
    descrizione: 'Centro di tornitura CNC con mandrino principale e contromandrino per lavorazioni complete in singola presa'
  },
  {
    id: '2',
    nome: 'Centro di lavoro verticale Haas VF-4',
    descrizione: 'Fresatrice CNC a 3 assi con cambio utensile automatico da 24 posizioni e corsa di 1270x510x635mm'
  },
  {
    id: '3',
    nome: 'Tornio parallelo Graziano SAG 180',
    descrizione: 'Tornio parallelo tradizionale per lavorazioni di precisione su pezzi di medio-grande diametro'
  },
  {
    id: '4',
    nome: 'Fresatrice universale Maho MH600',
    descrizione: 'Fresatrice universale con testa orientabile per lavorazioni complesse e angolate'
  },
  {
    id: '5',
    nome: 'Rettificatrice cilindrica Studer S31',
    descrizione: 'Rettificatrice di precisione per finiture superficiali e tolleranze ristrette su pezzi cilindrici'
  }
];

export const strengths: Strength[] = [
  {
    id: '1',
    titolo: 'Tempi di realizzazione rapidi',
    descrizione: 'Grazie al nostro parco macchine moderno e alla pianificazione ottimizzata, garantiamo consegne veloci senza compromettere la qualità',
    icon: 'clock'
  },
  {
    id: '2',
    titolo: 'Produzione su misura',
    descrizione: 'Realizziamo ogni pezzo secondo le specifiche del cliente, dal prototipo alla piccola serie fino alla produzione in grande scala',
    icon: 'settings'
  },
  {
    id: '3',
    titolo: 'Disponibilità verso il cliente',
    descrizione: 'Assistenza continua dalla progettazione alla consegna, con consulenza tecnica per ottimizzare tempi e costi di produzione',
    icon: 'user-check'
  }
];
