
import React from 'react';

const Platform: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-vectra-blue text-white text-xs font-bold mb-6 rounded-sm uppercase tracking-widest">
              SaaS Solution
            </div>
            <h1 className="text-4xl font-bold text-vectra-blue mb-8 tracking-tight">Vectra Platform</h1>
            <p className="text-xl text-vectra-secondary mb-8 font-secondary leading-relaxed">
              La plataforma digital diseñada para soportar la comunicación ambiental mediante el registro sistemático de evidencias, gestión de indicadores y transparencia territorial.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-vectra-surface border border-vectra-border rounded-sm">
                <h3 className="font-bold text-vectra-blue mb-2">Registro de Acciones</h3>
                <p className="text-sm text-vectra-secondary">Documentación centralizada de cada acción ambiental y territorial, permitiendo un seguimiento histórico auditable.</p>
              </div>
              <div className="p-6 bg-vectra-surface border border-vectra-border rounded-sm">
                <h3 className="font-bold text-vectra-blue mb-2">Reportes Dinámicos</h3>
                <p className="text-sm text-vectra-secondary">Generación automatizada de reportes internos para gerencia y reportes externos para grupos de interés.</p>
              </div>
              <div className="p-6 bg-vectra-surface border border-vectra-border rounded-sm">
                <h3 className="font-bold text-vectra-blue mb-2">Páginas Públicas de Transparencia</h3>
                <p className="text-sm text-vectra-secondary">Publicación de micro-sitios con datos verificables para demostrar el compromiso real en el territorio.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-vectra-blue aspect-square rounded-sm shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
              <div className="w-24 h-24 mb-6 border-4 border-vectra-accent rounded-full flex items-center justify-center">
                 <svg className="w-12 h-12 text-vectra-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                 </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">Acceso Privado</h2>
              <p className="text-vectra-secondary text-sm leading-relaxed mb-8">
                Vectra Platform es un entorno seguro y exclusivo para clientes corporativos. No está disponible para registro público directo.
              </p>
              <div className="text-xs text-vectra-accent font-bold uppercase tracking-widest border border-vectra-accent/30 px-4 py-2">
                Sistema de gestión exclusiva
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-white p-8 border border-vectra-border shadow-xl rounded-sm hidden sm:block max-w-xs">
               <h4 className="font-bold text-vectra-blue text-sm mb-2">Independencia de Producto</h4>
               <p className="text-xs text-vectra-secondary">
                 Este sitio institucional solo informa sobre las capacidades de la plataforma. La operación y el acceso ocurren en una infraestructura separada.
               </p>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
           <h2 className="text-2xl font-bold text-vectra-blue mb-6">Integración con el enfoque ISO</h2>
           <p className="text-vectra-secondary mb-8">
             Vectra Platform es la herramienta que materializa los principios de las normas ISO 14063 y 14020, permitiendo que la "comunicación verificable" sea una realidad técnica cotidiana para su equipo.
           </p>
           <button className="text-vectra-accent font-bold border-b-2 border-vectra-accent pb-1 hover:text-vectra-blue hover:border-vectra-blue transition-colors">
             Solicitar un demo guiado para su empresa
           </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
