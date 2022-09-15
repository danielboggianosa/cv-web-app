export interface Hability {
  name: string;
  icon: string;
}

export interface MultiLanguage {
  es: string;
  en?: string;
  fr?: string;
}

export interface TranslationValue {
  [key: string]: string;
}

export interface TranslationList {
  [key: string]: string[];
}

export interface Language {
  nombre: TranslationValue;
  nivel: number;
  color: string;
}

export interface LeveledHability {
  nombre: string;
  nivel: number;
  color: string;
}

export interface MonthYear {
  month: number;
  year: number;
}

export interface Job {
  cargo: TranslationValue;
  empresa: string;
  ciudad: string;
  inicio: MonthYear;
  fin: MonthYear;
  descripcion: TranslationList;
  link?: string;
}

export interface Education {
  titulo: string;
  institucion: string;
  ciudad: string;
  inicio: MonthYear;
  fin: MonthYear;
}

export interface Reference {
  nombre: string;
  empresa: string;
  email?: string;
  telefono?: string;
}

export interface Certificate {
  titulo: string;
  fecha: MonthYear;
  codigo: string;
  link: string;
}

export interface User {
  name: string;
  profession: TranslationValue;
  picture: string;
  habilities: Hability[];
  profile: TranslationValue;
  birthday: TranslationValue;
  birthYear: number;
  nationality: TranslationValue;
  location: string;
  phone: string;
  email: string;
  github?: string;
  linkedin?: string;
  humanLanguaguages: Language[];
  programmingLanguages: LeveledHability[];
  frameworks: LeveledHability[];
  databases: LeveledHability[];
  management: LeveledHability[];
  employment: Job[];
  education: Education[];
  references: Reference[];
  certifications: Certificate[];
}
