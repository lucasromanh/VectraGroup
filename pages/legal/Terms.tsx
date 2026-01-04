
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-vectra-blue mb-10 tracking-tight">Términos de Uso</h1>
        <div className="prose prose-blue text-vectra-secondary leading-relaxed space-y-6 font-secondary">
          <p>
            Bienvenido al sitio web institucional de <strong>VECTRA Strategic Communication</strong>. Al acceder a este sitio, usted acepta cumplir con los siguientes términos y condiciones.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">1. Naturaleza del Sitio</h2>
          <p>
            Este sitio web tiene carácter estrictamente informativo. Describe los servicios de consultoría estratégica y las capacidades de la plataforma Vectra Platform.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">2. Propiedad Intelectual</h2>
          <p>
            Todos los contenidos, incluyendo textos, logotipos, gráficos y metodologías descritas, son propiedad exclusiva de VECTRA y están protegidos por las leyes de propiedad intelectual internacionales.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">3. Limitación de Responsabilidad</h2>
          <p>
            VECTRA no garantiza que la información contenida en este sitio sea aplicable a cada caso particular sin una consultoría previa. El uso de la información aquí expuesta es responsabilidad exclusiva del usuario.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">4. Enlaces a Terceros</h2>
          <p>
            Este sitio puede contener enlaces a sitios externos. VECTRA no se responsabiliza por el contenido o las políticas de privacidad de dichos sitios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
