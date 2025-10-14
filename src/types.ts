export interface WorkPiece {
  id: string;
  nome_pezzo: string;
  lista_materiale: string[];
  provenienza: string;
  punti_di_forza: string[];
  lotto: string;
  immagine: string;
  descrizione_completa: string;
}

export interface Material {
  id: string;
  nome: string;
  descrizione: string;
}

export interface Machinery {
  id: string;
  nome: string;
  descrizione: string;
}

export interface Strength {
  id: string;
  titolo: string;
  descrizione: string;
  icon: string;
}
