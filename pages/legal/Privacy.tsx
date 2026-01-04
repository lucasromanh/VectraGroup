
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-vectra-blue mb-10 tracking-tight">Política de Privacidad</h1>
        <div className="prose prose-blue text-vectra-secondary leading-relaxed space-y-6 font-secondary">
          <p>
            En <strong>VECTRA</strong>, la confidencialidad y la protección de datos son pilares de nuestro servicio corporativo.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">1. Recolección de Datos</h2>
          <p>
            Solo recolectamos datos personales (nombre, empresa, email) a través de nuestro formulario de contacto cuando usted decide enviarlos voluntariamente.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">2. Uso de la Información</h2>
          <p>
            Sus datos se utilizan exclusivamente para responder a su consulta y proporcionar la información de servicios solicitada. No vendemos ni compartimos sus datos con terceros.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">3. Derechos del Usuario</h2>
          <p>
            Usted puede solicitar el acceso, rectificación o eliminación de sus datos en cualquier momento enviando un correo electrónico a nuestro canal de contacto oficial.
          </p>
          <h2 className="text-xl font-bold text-vectra-blue mt-8">4. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra accesos no autorizados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
