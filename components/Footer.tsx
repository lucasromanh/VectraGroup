
import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, DISCLAIMER, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F33] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-vectra-accent" strokeWidth="12">
                  <path d="M10 30 L50 90 L90 30" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-3xl font-bold tracking-[0.3em]">{BRAND_NAME}</span>
            </div>
            <p className="text-vectra-secondary text-base max-w-md leading-relaxed mb-10 font-secondary opacity-80">
              Expertos en transformar la gestión ambiental en reputación corporativa estratégica a través del orden, la documentación y el rigor metodológico.
            </p>
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-vectra-accent">Ubicación Central</span>
              <span className="text-sm text-white/90">{CONTACT_INFO.location}</span>
              <span className="text-sm text-white/90">{CONTACT_INFO.phone}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-vectra-accent mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/que-hacemos" className="text-white/60 hover:text-vectra-accent transition-colors">Propuesta de Valor</Link></li>
              <li><Link to="/enfoque-iso" className="text-white/60 hover:text-vectra-accent transition-colors">Marco Normativo</Link></li>
              <li><Link to="/servicios" className="text-white/60 hover:text-vectra-accent transition-colors">Servicios</Link></li>
              <li><Link to="/contacto" className="text-white/60 hover:text-vectra-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-vectra-accent mb-8">Información Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/legal/terminos" className="text-white/60 hover:text-white transition-colors">Términos de Uso</Link></li>
              <li><Link to="/legal/privacidad" className="text-white/60 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/legal/cookies" className="text-white/60 hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12">
          <div className="bg-[#102A43] border border-white/5 rounded-lg p-8 max-w-4xl mx-auto shadow-2xl">
            <p className="text-xs md:text-sm text-center text-white/70 leading-relaxed font-secondary">
              <span className="font-bold text-vectra-accent block mb-2 uppercase tracking-[0.2em] text-[11px]">Compromiso de Transparencia</span>
              {DISCLAIMER}
            </p>
          </div>
          <div className="text-center mt-12 text-[10px] uppercase tracking-[0.5em] text-white/20">
            &copy; {new Date().getFullYear()} {BRAND_NAME} STRATEGIC COMMUNICATION
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
