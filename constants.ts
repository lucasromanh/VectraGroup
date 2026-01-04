
import { ISOStandard, Service } from './types';

export const BRAND_NAME = "VECTRA";
export const TAGLINE = "La sustentabilidad no se grita: se ordena, se documenta y se comunica con criterio.";
export const DISCLAIMER = "Vectra no certifica normas ISO. Su trabajo se basa en la alineación conceptual y metodológica a estándares internacionales.";

export const CONTACT_INFO = {
  location: "Salta, Argentina",
  phone: "+54 9 387 440-4472",
  phoneRaw: "3874404472",
  email: "contacto@vectra.com.ar",
  officeHours: "Lunes a Viernes, 09:00 - 18:00 (ART)"
};

// Added DEFINITIONS export to resolve import error in Home.tsx
export const DEFINITIONS = {
  greenwashing: {
    title: "¿Qué es el Greenwashing?",
    description: "Es la práctica de realizar afirmaciones engañosas o infundadas sobre los beneficios ambientales de un producto, servicio o política corporativa. En un entorno de mayor escrutinio, la falta de evidencia técnica puede derivar en graves crisis de reputación y sanciones legales.",
    risk: "La comunicación sin sustento no es solo un error ético: es una vulnerabilidad estratégica que puede comprometer la licencia social para operar."
  }
};

export const ISO_STANDARDS: ISOStandard[] = [
  {
    name: "ISO 14001",
    focus: "Sistemas de Gestión Ambiental",
    usedFor: ["Estructura de acciones", "Documentación de procesos", "Ciclo de mejora"]
  },
  {
    name: "ISO 14063",
    focus: "Comunicación Ambiental",
    usedFor: ["Transparencia", "Verificabilidad de datos", "Gestión de stakeholders"]
  },
  {
    name: "ISO 14020",
    focus: "Etiquetas y Declaraciones",
    usedFor: ["Prevención de Greenwashing", "Criterios científicos", "Claims honestos"]
  },
  {
    name: "ISO 26000",
    focus: "Responsabilidad Social",
    usedFor: ["Impacto en territorio", "Ética en la cadena de valor", "Gobernanza"]
  }
];

export interface ServiceDetail extends Service {
  id: string;
  longDescription: string;
  scope: string[];
  deliverables: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "estrategia",
    title: "Estrategia de Comunicación Ambiental",
    description: "Planificación maestra para alinear la narrativa corporativa con la gestión técnica real.",
    longDescription: "Diseñamos la hoja de ruta comunicacional que asegura que cada mensaje emitido por la empresa sea coherente con su madurez ambiental y sus objetivos de negocio.",
    scope: ["Auditoría de percepción actual", "Definición de pilares narrativos", "Protocolos de crisis ambiental"],
    deliverables: ["Plan Estratégico Anual", "Manual de Vocería Ambiental", "Matriz de Materialidad Comunicacional"]
  },
  {
    id: "ordenamiento",
    title: "Ordenamiento y Documentación",
    description: "Sistematización de evidencias para respaldar declaraciones y evitar inconsistencias.",
    longDescription: "La comunicación sin pruebas es un riesgo. Creamos el repositorio de evidencias que permite a las áreas legales y de comunicación defender cada afirmación pública.",
    scope: ["Sistematización de fuentes de datos", "Estandarización de reportes", "Gestión de evidencia documental"],
    deliverables: ["Dossier de Evidencia Ambiental", "Protocolo de Trazabilidad de Información", "Tablero de Control de Claims"]
  },
  {
    id: "prevencion",
    title: "Prevención de Greenwashing",
    description: "Blindaje legal y reputacional mediante auditorías de claims basadas en ISO 14020.",
    longDescription: "Analizamos cada palabra, símbolo y promesa de sus campañas para asegurar que cumplen con los estándares de honestidad y verificabilidad técnica.",
    scope: ["Análisis de campañas publicitarias", "Validación técnica de claims", "Alineación con normativa vigente"],
    deliverables: ["Reporte de Diagnóstico de Riesgos", "Certificación Interna de Coherencia", "Guía de Declaraciones Seguras"]
  },
  {
    id: "reportes",
    title: "Reportes de Sustentabilidad",
    description: "Estructuración de informes de alto nivel con rigor técnico y claridad ejecutiva.",
    longDescription: "Transformamos los datos complejos en documentos de comunicación potentes que satisfacen tanto a expertos técnicos como a inversores y clientes.",
    scope: ["Redacción técnica de impacto", "Curaduría de indicadores (KPIs)", "Diseño de estructura narrativa"],
    deliverables: ["Reporte de Sustentabilidad / ESG", "Resumen Ejecutivo de Impacto", "Páginas de Transparencia Digital"]
  }
];
