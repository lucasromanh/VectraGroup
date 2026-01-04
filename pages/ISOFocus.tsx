
import React from 'react';
import { ISO_STANDARDS, DISCLAIMER } from '../constants';

const ISOFocus: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-vectra-blue mb-6 tracking-tight">Marco Normativo (ISO-aligned)</h1>
          <p className="text-xl text-vectra-secondary leading-relaxed font-secondary">
            En Vectra, la coherencia no es una opinión: es una metodología. Utilizamos la estructura de las normas ISO para construir puentes de confianza entre su organización y sus grupos de interés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ISO_STANDARDS.map((iso) => (
            <div key={iso.name} className="p-10 bg-vectra-surface border border-vectra-border rounded-sm">
              <div className="inline-block px-3 py-1 bg-vectra-accent/10 text-vectra-accent text-xs font-bold rounded-full mb-6">
                ESTÁNDAR DE REFERENCIA
              </div>
              <h2 className="text-2xl font-bold text-vectra-blue mb-2">{iso.name}</h2>
              <p className="text-lg font-medium text-vectra-accent mb-6">{iso.focus}</p>
              
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-vectra-blue">Aplicación en Vectra:</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {iso.usedFor.map((item, idx) => (
                    <li key={idx} className="flex items-center text-vectra-secondary text-sm">
                      <svg className="w-4 h-4 text-vectra-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-vectra-blue text-white p-12 rounded-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 italic">"La comunicación ambiental ya no es opcional, pero la comunicación ambiental sin fundamento es un riesgo legal."</h2>
            <p className="text-vectra-secondary leading-relaxed mb-8">
              La alineación a estas normas permite que las áreas legales y de gerencia general de nuestros clientes tengan la tranquilidad de que lo que se publica es defendible ante una auditoría o un reclamo de greenwashing.
            </p>
            <div className="p-4 bg-white/5 border border-white/10 text-sm">
              <strong>Nota importante:</strong> {DISCLAIMER}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 200 200">
               <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" fill="none" />
               <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISOFocus;
