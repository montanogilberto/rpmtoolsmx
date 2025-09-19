import React from 'react';
import { Wrench, Cog, Zap } from 'lucide-react';

const WhatSection = () => {
  const features = [
    {
      icon: <Wrench className="w-12 h-12 text-precision-red" />,
      title: "Herramientas de Precisión",
      description: "Fabricamos herramientas de corte con tolerancias micrométricas para máxima precisión en maquinado."
    },
    {
      icon: <Cog className="w-12 h-12 text-metallic-indigo" />,
      title: "Tecnología Avanzada",
      description: "Utilizamos maquinaria CNC de última generación y procesos automatizados para garantizar calidad consistente."
    },
    {
      icon: <Zap className="w-12 h-12 text-precision-red" />,
      title: "Entrega Rápida",
      description: "Sistema de producción optimizado para entregas en tiempo récord sin comprometer la calidad."
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-technical-black to-metallic-gray-dark/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
            ¿Qué Ofrecemos?
          </h2>
          <p className="text-xl text-steel-gray-light max-w-3xl mx-auto">
            Soluciones completas en herramientas de maquinado para la industria moderna
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="metallic-card p-8 text-center hover-lift">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-steel-gray-light">
                {feature.title}
              </h3>
              <p className="text-steel-gray-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
