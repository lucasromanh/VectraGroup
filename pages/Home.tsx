
import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, TAGLINE, ISO_STANDARDS, DEFINITIONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Refined */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0B1F33] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-vectra-accent/10 border border-vectra-accent/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-vectra-accent rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vectra-accent">Partner Estratégico ISO-Aligned</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Comunicación ambiental <br/> 
              <span className="text-vectra-accent">basada en evidencia.</span>
            </h1>
            <p className="text-xl md:text-2xl text-vectra-secondary font-secondary max-w-2xl mb-12 leading-relaxed">
              {TAGLINE}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/servicios"
                className="group inline-flex items-center justify-center px-8 py-4 bg-vectra-accent text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-opacity-90 shadow-lg shadow-vectra-accent/20"
              >
                Explorar Servicios
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/que-hacemos"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all"
              >
                Nuestro Enfoque
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vectra-accent/5 rounded-full blur-[100px]"></div>
           <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M100 0 L100 100 L0 100 Z" fill="currentColor" />
           </svg>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white border-b border-vectra-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-vectra-accent mb-12">Filosofía Vectra</h2>
           <p className="text-3xl md:text-4xl font-medium text-vectra-blue leading-tight mb-8">
             "La transparencia ambiental no es un acto de buena fe, es el resultado de un sistema de gestión ordenado y auditable."
           </p>
        </div>
      </section>

      {/* Greenwashing Section - Critical Add */}
      <section className="py-24 md:py-32 bg-vectra-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[120px] font-black text-vectra-blue/5 pointer-events-none select-none">RISK</div>
            <h2 className="text-4xl font-bold text-vectra-blue mb-8 tracking-tight">{DEFINITIONS.greenwashing.title}</h2>
            <p className="text-lg text-vectra-secondary mb-6 leading-relaxed">
              {DEFINITIONS.greenwashing.description}
            </p>
            <p className="text-lg font-bold text-vectra-blue mb-8">
              {DEFINITIONS.greenwashing.risk}
            </p>
            <div className="p-6 bg-white border-l-4 border-red-500 shadow-sm">
               <p className="text-sm text-vectra-secondary italic">
                 En Vectra, nuestro principal objetivo es blindar a su organización contra estos riesgos mediante la alineación a la norma ISO 14020.
               </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-vectra-border rounded-sm shadow-sm hover:shadow-md transition-shadow">
               <span className="text-red-500 font-bold block mb-2">× Vagueza</span>
               <p className="text-xs text-vectra-secondary">Uso de términos sin definición técnica clara.</p>
            </div>
            <div className="p-8 bg-white border border-vectra-border rounded-sm shadow-sm hover:shadow-md transition-shadow mt-8">
               <span className="text-red-500 font-bold block mb-2">× Omisión</span>
               <p className="text-xs text-vectra-secondary">Resaltar un atributo 'eco' ocultando impactos negativos.</p>
            </div>
            <div className="p-8 bg-white border border-vectra-border rounded-sm shadow-sm hover:shadow-md transition-shadow">
               <span className="text-red-500 font-bold block mb-2">× Irrelevancia</span>
               <p className="text-xs text-vectra-secondary">Informar sobre algo obligatorio por ley como un mérito.</p>
            </div>
            <div className="p-8 bg-white border border-vectra-border rounded-sm shadow-sm hover:shadow-md transition-shadow mt-8">
               <span className="text-red-500 font-bold block mb-2">× Mentira</span>
               <p className="text-xs text-vectra-secondary">Uso de etiquetas o certificaciones inexistentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Framework - High End Grid */}
      <section className="py-24 md:py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-vectra-blue mb-6 tracking-tight">Estructura Metodológica</h2>
              <p className="text-lg text-vectra-secondary font-secondary leading-relaxed">
                Nuestra alineación con normas ISO garantiza que su comunicación ambiental sea técnica, transparente y, sobre todo, defendible.
              </p>
            </div>
            <Link to="/enfoque-iso" className="group text-sm font-bold uppercase tracking-widest text-vectra-accent flex items-center">
              Ver Marco Completo
              <span className="ml-2 block w-6 h-[1px] bg-vectra-accent transition-all group-hover:w-12"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ISO_STANDARDS.map((iso) => (
              <div key={iso.name} className="p-10 bg-white border border-vectra-border hover:border-vectra-accent/30 hover:shadow-2xl transition-all duration-300 rounded-sm">
                <span className="text-[10px] font-bold text-vectra-accent tracking-widest uppercase mb-6 block">{iso.name}</span>
                <h3 className="text-xl font-bold text-vectra-blue mb-6 leading-tight">{iso.focus}</h3>
                <ul className="space-y-4">
                  {iso.usedFor.map((item, idx) => (
                    <li key={idx} className="text-xs text-vectra-secondary flex items-start">
                      <span className="w-1 h-1 bg-vectra-accent rounded-full mt-1.5 mr-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-vectra-blue py-32 px-4 relative">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">¿Está su comunicación lista para ser auditada?</h2>
            <p className="text-xl text-vectra-secondary mb-12 max-w-2xl mx-auto font-secondary">
              Transforme el riesgo reputacional en una ventaja competitiva. Hablemos sobre cómo profesionalizar su estrategia.
            </p>
            <Link to="/contacto" className="inline-block px-10 py-5 bg-white text-vectra-blue text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-vectra-surface transition-colors">
              Solicitar Auditoría de Claims
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;
