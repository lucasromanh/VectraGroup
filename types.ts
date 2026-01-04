
export interface ISOStandard {
  name: string;
  focus: string;
  usedFor: string[];
}

export interface Service {
  title: string;
  description: string;
}

export enum NavigationSection {
  HOME = 'home',
  ABOUT = 'que-hacemos',
  ISO = 'enfoque-iso',
  PLATFORM = 'vectra-platform',
  SERVICES = 'servicios',
  CONTACT = 'contacto'
}
