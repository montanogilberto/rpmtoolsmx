import React from 'react';
import { Settings } from 'lucide-react';

const WhySection = () => {
  return (
    <section className="py-16 bg-technical-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="icon-metallic mr-6">
              <Settings size={48} />
            </div>
            <h2 className="section-title text-3xl lg:text-4xl font-bold text-white">
              ¿Por qué RPM Tools?
            </h2>
          </div>
          
          <p className="text-lg text-steel-gray-light leading-relaxed max-w-3xl">
            Creemos que toda empresa merece producir sin interrupciones y alcanzar su máximo potencial.
            Por eso trabajamos para simplificar y optimizar la forma en que adquieren sus herramientas, 
            construyendo relaciones de confianza que impulsen su rendimiento y su mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;