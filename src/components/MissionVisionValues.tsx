import React from 'react';

const MissionVisionValues = () => {
  return (
    <section id="nosotros" className="py-20 bg-technical-black text-steel-gray-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6 text-white">Nosotros</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">POR QUÉ (Propósito)</h3>
          <p className="mb-4">
            Creemos que toda empresa merece producir sin interrupciones y alcanzar su máximo potencial.
            Por eso trabajamos para simplificar y optimizar la forma en que adquieren sus herramientas, construyendo relaciones de confianza que impulsen su rendimiento y su mejora continua.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">CÓMO (Forma de actuar)</h3>
          <p className="mb-2">
            Acompañamos a nuestros clientes con soluciones claras y personalizadas que optimizan su productividad.
          </p>
          <p className="mb-2">
            Brindamos información transparente y mostramos las herramientas de forma inmediata para que puedan decidir con certeza.
          </p>
          <p className="mb-4">
            Gestionamos entregas de forma ágil y eficiente, adaptándonos a las necesidades de cada proyecto, y realizamos pruebas de rendimiento que garantizan confianza y resultados sostenibles.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">QUÉ (Oferta concreta)</h3>
          <p className="mb-4">
            Proveemos herramientas de corte, aceites de corte y abrasivos Autromex de calidad japonesa para industrias de alta exigencia como la automotriz, aeroespacial y metalmecánica.
            Acompañamos cada entrega con pruebas de rendimiento y capacitación en servicio, asegurando continuidad y eficiencia en la producción.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">Misión</h3>
          <p className="mb-4">
            Conectar a la industria con soluciones técnicas en herramientas de corte que eleven la productividad y la precisión, aportando experiencia y atención personalizada, adaptándonos a las necesidades cambiantes de cada cliente.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">Visión</h3>
          <p className="mb-4">
            Consolidarnos como un referente nacional en soluciones industriales que combinan tecnología, conocimiento y atención personalizada, impulsando a nuestros clientes hacia una producción más competitiva.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-precision-red">Valores</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Precisión – Ponemos cuidado en cada acción para lograr resultados exactos.</li>
            <li>Confianza – Construimos relaciones duraderas y honestas.</li>
            <li>Proactividad – Anticipamos necesidades y oportunidades de mejora.</li>
            <li>Innovación – Incorporamos ideas y tecnologías que aporten valor.</li>
            <li>Responsabilidad – Actuamos con compromiso hacia nuestros clientes y la industria.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
