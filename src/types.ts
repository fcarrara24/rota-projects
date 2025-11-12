export type Language = 'en' | 'it';

export interface TranslatedText {
  en: string;
  it: string;
}

export interface TranslatedList {
  en: string[];
  it: string[];
}

export interface WorkPiece {
  id: string;
  nome_pezzo: TranslatedText;
  lista_materiale: TranslatedList;
  provenienza: TranslatedText;
  punti_di_forza: TranslatedList;
  lotto: TranslatedText;
  immagine: string;
  descrizione_completa: TranslatedText;
}

export interface Material {
  id: string;
  nome: TranslatedText;
  descrizione: TranslatedText;
}

export interface Machinery {
  id: string;
  nome: TranslatedText;
  descrizione: TranslatedText;
}

export interface Strength {
  id: string;
  titolo: TranslatedText;
  descrizione: TranslatedText;
  icon: string;
}

export interface GalleryItem {
  id: string;
  titolo: TranslatedText;
  descrizione: TranslatedText;
  immagine: string;
}
