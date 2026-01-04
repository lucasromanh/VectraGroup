
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Qué hacemos', path: '/que-hacemos' },
    { name: 'Enfoque ISO', path: '/enfoque-iso' },
    { name: 'Platform', path: '/vectra-platform' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo placeholder - Reemplazar con logo.png real */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
                <path d="M10 30 L50 90 L90 30" fill="none" stroke="#0B1F33" strokeWidth="12" strokeLinejoin="round"/>
                <path d="M10 30 L50 90 L90 30" fill="none" stroke="#3FAE8C" strokeWidth="12" strokeLinejoin="round" className="opacity-50 translate-x-1 -translate-y-1"/>
              </svg>
            </div>
            <span className={`text-2xl font-bold tracking-[0.2em] transition-colors ${
              scrolled ? 'text-vectra-blue' : 'text-vectra-blue'
            }`}>{BRAND_NAME}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-vectra-accent relative py-1 ${
                  isActive(link.path) ? 'text-vectra-accent' : 'text-vectra-blue/70'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-vectra-accent rounded-full shadow-[0_0_10px_#3FAE8C]"></span>
                )}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-vectra-blue">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl absolute top-full left-0 w-full border-b border-vectra-border p-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xs font-bold uppercase tracking-widest ${
                isActive(link.path) ? 'text-vectra-accent' : 'text-vectra-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
