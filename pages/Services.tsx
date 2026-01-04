
import React, { useState } from 'react';
import { SERVICES, ServiceDetail } from '../constants';

const ServiceCard: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-white border rounded-lg transition-all duration-500 overflow-hidden shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)] ${
      isExpanded ? 'border-vectra-accent ring-1 ring-vectra-accent/20 scale-[1.02]' : 'border-vectra-border hover:border-vectra-accent/40'
    }`}>
      <div className="p-10">
        <div className="flex justify-between items-start mb-8">
          <div className={`w-14 h-14 rounded-lg flex items-center justify-center transition-colors duration-500 ${
            isExpanded ? 'bg-vectra-accent text-white' : 'bg-vectra-surface text-vectra-blue group-hover:bg-vectra-accent group-hover:text-white'
          }`}>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-vectra-accent opacity-0 group-hover:opacity-100 transition-opacity">Expertise</span>
        </div>
        
        <h2 className="text-2xl font-bold text-vectra-blue mb-4 tracking-tight">{service.title}</h2>
        <p className="text-vectra-secondary text-sm leading-relaxed mb-10 font-secondary h-12 overflow-hidden">
          {service.description}
        </p>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-vectra-blue hover:text-vectra-accent transition-colors"
        >
          {isExpanded ? 'Ocultar Detalles' : 'Ver Alcance Técnico'}
          <svg className={`w-4 h-4 ml-3 transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="mt-12 pt-10 border-t border-vectra-border animate-in fade-in slide-in-from-top-6 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-vectra-blue bg-vectra-surface px-3 py-1 inline-block rounded-sm">Alcance del Proyecto</h4>
                <ul className="space-y-4">
                  {service.scope.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-vectra-secondary leading-snug">
                      <span className="w-1.5 h-1.5 bg-vectra-accent rounded-full mt-2 mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-vectra-blue bg-vectra-surface px-3 py-1 inline-block rounded-sm">Entregables</h4>
                <ul className="space-y-4">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-vectra-secondary leading-snug">
                      <svg className="w-4 h-4 text-vectra-accent mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 p-6 bg-vectra-blue text-white rounded-lg">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-vectra-accent mb-2">Valor Estratégico</h5>
              <p className="text-sm font-secondary opacity-80 leading-relaxed">{service.longDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mb-24 relative">
          <div className="absolute -top-10 -left-10 text-[100px] font-black text-vectra-blue/5 pointer-events-none">EXPERT</div>
          <h1 className="text-5xl md:text-6xl font-bold text-vectra-blue mb-8 tracking-tight">Servicios de Consultoría Senior.</h1>
          <p className="text-xl text-vectra-secondary font-secondary leading-relaxed max-w-2xl">
            Sistematizamos la complejidad ambiental para convertirla en una narrativa segura, auditable y de alto valor institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-32">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Specialized Tourism Section */}
        <div className="bg-[#102A43] rounded-2xl p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-vectra-accent mb-6 block">Vertical Especializada</span>
              <h2 className="text-4xl font-bold text-white mb-8 tracking-tight leading-tight">Turismo de Naturaleza y <br/> Gestión Territorial.</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed font-secondary">
                Entendemos que en el turismo, el territorio es el activo. Ayudamos a destinos y proyectos boutique a documentar su compromiso ambiental como pilar de su comercialización internacional.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Auditoría Territorial', 'Licencia Social', 'Relación Comunidad'].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-96">
               <div className="absolute inset-0 bg-gradient-to-br from-vectra-accent/20 to-transparent rounded-lg border border-white/10 blur-xl"></div>
               <div className="absolute inset-4 border border-white/5 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
