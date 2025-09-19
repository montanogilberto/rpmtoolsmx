import React from 'react';
import { Settings, Eye, Zap } from 'lucide-react';

const HowSection = () => {
  const features = [
    {
      icon: Settings,
      title: 'Soluciones claras y personalizadas',
      description: 'Analizamos sus necesidades específicas y diseñamos soluciones a medida para optimizar su producción.'
    },
    {
      icon: Eye,
      title: 'Información transparente y visual inmediata',
      description: 'Acceso completo a catálogos digitales, especificaciones técnicas y seguimiento en tiempo real de sus pedidos.'
    },
    {
      icon: Zap,
      title: 'Entregas ágiles con pruebas de rendimiento',
      description: 'Sistema de entrega rápida con verificación de calidad y pruebas de funcionamiento antes del envío.'
    }
  ];

  return (
    <section className="py-16 bg-technical-black">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="icon-metallic mx-auto mb-4">
                <feature.icon size={64} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;