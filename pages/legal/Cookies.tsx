
import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-vectra-blue mb-10 tracking-tight">Política de Cookies</h1>
        <div className="prose prose-blue text-vectra-secondary leading-relaxed space-y-6 font-secondary">
          <p>
            Este sitio web utiliza cookies técnicas mínimas necesarias para asegurar una navegación fluida y profesional.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">1. ¿Qué son las cookies?</h2>
          <p>
            Son pequeños archivos de texto que se guardan en su navegador para recordar preferencias de navegación y mejorar la experiencia de usuario.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">2. Cookies que utilizamos</h2>
          <p>
            Utilizamos principalmente cookies de sesión y analíticas anónimas para entender cómo interactúan los usuarios con nuestra información institucional.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">3. Control de Cookies</h2>
          <p>
            Usted puede configurar su navegador para bloquear o eliminar las cookies. Sin embargo, esto podría afectar la visualización correcta de algunos elementos del sitio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
