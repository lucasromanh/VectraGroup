
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <h1 className="text-6xl font-bold text-vectra-blue mb-10 tracking-tight">Hablemos de <br/> <span className="text-vectra-accent">Estrategia.</span></h1>
            <p className="text-xl text-vectra-secondary mb-16 leading-relaxed font-secondary max-w-md">
              Estamos en Salta, listos para asesorar a su organización en el proceso de profesionalización de su comunicación ambiental.
            </p>
            
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vectra-accent mb-4">Ubicación</h3>
                <p className="text-vectra-blue font-bold text-2xl group-hover:text-vectra-accent transition-colors">{CONTACT_INFO.location}</p>
                <p className="text-sm text-vectra-secondary mt-2">Argentina</p>
              </div>
              
              <div className="group">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vectra-accent mb-4">Teléfono Corporativo</h3>
                <p className="text-vectra-blue font-bold text-2xl group-hover:text-vectra-accent transition-colors">{CONTACT_INFO.phone}</p>
                <p className="text-sm text-vectra-secondary mt-2">{CONTACT_INFO.officeHours}</p>
              </div>

              <div className="group">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vectra-accent mb-4">Canal Oficial</h3>
                <p className="text-vectra-blue font-bold text-2xl group-hover:text-vectra-accent transition-colors">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FB] p-10 md:p-16 rounded-2xl border border-vectra-border shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vectra-accent/10 -mr-10 -mt-10 blur-3xl rounded-full"></div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-vectra-accent/10 rounded-full flex items-center justify-center mb-10">
                   <svg className="w-12 h-12 text-vectra-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h2 className="text-3xl font-bold text-vectra-blue mb-4">Mensaje Enviado</h2>
                <p className="text-vectra-secondary font-secondary leading-relaxed">Nuestro equipo técnico revisará su consulta y se contactará en un plazo de 24 horas hábiles.</p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-xs font-bold uppercase tracking-widest text-vectra-accent border-b-2 border-vectra-accent pb-1 hover:text-vectra-blue hover:border-vectra-blue transition-all">
                  Enviar Nueva Consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-vectra-blue/50">Datos Personales</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" required className="w-full bg-white border-b border-vectra-border p-4 focus:border-vectra-accent focus:outline-none transition-all placeholder:text-gray-300" placeholder="Nombre Completo" />
                    <input type="text" required className="w-full bg-white border-b border-vectra-border p-4 focus:border-vectra-accent focus:outline-none transition-all placeholder:text-gray-300" placeholder="Empresa" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-vectra-blue/50">Contacto</label>
                  <input type="email" required className="w-full bg-white border-b border-vectra-border p-4 focus:border-vectra-accent focus:outline-none transition-all placeholder:text-gray-300" placeholder="Email Corporativo" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-vectra-blue/50">Consulta Técnica</label>
                  <textarea required rows={6} className="w-full bg-white border-b border-vectra-border p-4 focus:border-vectra-accent focus:outline-none transition-all placeholder:text-gray-300" placeholder="¿Cómo podemos potenciar su estrategia ambiental?"></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-vectra-blue text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-vectra-accent transition-all shadow-2xl shadow-vectra-blue/20 rounded-sm">
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
