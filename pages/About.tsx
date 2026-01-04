
import React from 'react';

const About: React.FC = () => {
  const pilares = [
    {
      title: "Estrategia de Alineación",
      desc: "Nivelamos las expectativas de comunicación con la realidad operativa de la empresa.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Sistematización de Evidencia",
      desc: "Creamos la infraestructura de datos que permite probar cada afirmación ambiental.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Verificabilidad ISO",
      desc: "Auditamos bajo estándares internacionales para garantizar blindaje ante terceros.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="py-24 md:py-32 bg-vectra-surface border-b border-vectra-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-vectra-blue mb-8 tracking-tight">El puente entre la gestión técnica y la reputación.</h1>
            <p className="text-xl text-vectra-secondary leading-relaxed font-secondary">
              Vectra nace para resolver una brecha crítica en el mercado corporativo: la desconexión entre las acciones ambientales y la forma en que se comunican. Ayudamos a transformar el "hacer" en un activo de confianza.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-vectra-accent mb-4">Nuestra Metodología</h2>
            <p className="text-3xl font-bold text-vectra-blue">Cómo operamos en la intersección de la sustentabilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pilares.map((p, i) => (
              <div key={i} className="group p-10 bg-white border border-vectra-border rounded-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vectra-accent/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-14 h-14 bg-vectra-blue rounded-sm flex items-center justify-center mb-8 shadow-lg group-hover:bg-vectra-accent transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-vectra-blue mb-4">{p.title}</h3>
                <p className="text-vectra-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Mission & Specialization Section */}
      <section className="py-24 md:py-32 bg-vectra-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Misión y Precisión Operativa</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-vectra-accent pl-8">
                <h4 className="text-lg font-bold mb-2 text-white">Profesionalización del Mensaje</h4>
                <p className="text-white/60 font-secondary leading-relaxed">
                  Eliminamos la ambigüedad en la comunicación de sustentabilidad, asegurando que cada declaración sea técnicamente defendible y éticamente responsable.
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-8">
                <h4 className="text-lg font-bold mb-2 text-white">Transparencia Radical</h4>
                <p className="text-white/60 font-secondary leading-relaxed">
                  Creemos que la transparencia es el único camino hacia la longevidad empresarial en un mundo que exige rendición de cuentas.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#102A43] border border-white/10 p-12 rounded-sm shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-vectra-accent uppercase tracking-wider">Especialización de Enfoque</h3>
              <p className="text-sm text-white/70 mb-8 font-secondary leading-relaxed">
                Para garantizar la máxima calidad en nuestros entregables, hemos definido un alcance de especialización técnica que nos diferencia:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-vectra-accent/20 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-3 h-3 text-vectra-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/90"><strong>Rigor sobre Estética:</strong> Nuestro enfoque es estratégico y metodológico, no somos una agencia de publicidad de consumo masivo.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-vectra-accent/20 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-3 h-3 text-vectra-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/90"><strong>Gestión de Información:</strong> Optimizamos la comunicación de los datos generados por sus especialistas técnicos o consultores ambientales de campo.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-vectra-accent/20 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                    <svg className="w-3 h-3 text-vectra-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/90"><strong>Preparación Normativa:</strong> Actuamos como el soporte previo y continuo que asegura el éxito de sus procesos de certificación externos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Add Section - Added for spacing and extra content */}
      <section className="py-32 md:py-48 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-vectra-accent mb-8">Compromiso de Valor</h2>
          <p className="text-4xl font-bold text-vectra-blue mb-10 tracking-tight leading-tight">
            No solo informamos, <br/> creamos activos de reputación.
          </p>
          <p className="text-lg text-vectra-secondary font-secondary leading-relaxed mb-16">
            En Vectra, entendemos que la sustentabilidad es una ventaja competitiva solo cuando es creíble. Nuestra misión es dotar a su organización de la robustez necesaria para liderar la conversación ambiental en su sector con total seguridad.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <span className="block text-4xl font-bold text-vectra-blue mb-2">0%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-vectra-accent">Riesgo de Greenwashing</span>
            </div>
            <div className="w-[1px] h-12 bg-vectra-border hidden md:block"></div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-vectra-blue mb-2">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-vectra-accent">Alineación Metodológica</span>
            </div>
            <div className="w-[1px] h-12 bg-vectra-border hidden md:block"></div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-vectra-blue mb-2">∞</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-vectra-accent">Trazabilidad de Evidencia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
