import React from 'react';
import { Wrench, Cog, Zap } from 'lucide-react';

// Local image imports
import pctLogo from '../assets/pct.jpeg';

import morseLogo from '../assets/morse.jpeg';
import morseCatalog from '../assets/morse_catalog.jpeg';
import toolfloCatalog from '../assets/toolflo_catalog.jpeg';
import mtthread from '../assets/mtthread.jpeg';
import imco from '../assets/imco.jpeg';
import tungaloy from '../assets/tungaloy.jpeg';
import ntk from '../assets/ntk.jpeg';

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

  const brandImages = [
    { src: pctLogo, alt: "PCT Logo" },
    { src: morseLogo, alt: "Morse Cutting Tools" },
    { src: morseCatalog, alt: "Morse Catalog" },
    { src: toolfloCatalog, alt: "ToolFlo Catalog" },
    { src: mtthread, alt: "MT Thread" },
    { src: imco, alt: "IMCO" },
    { src: tungaloy, alt: "Tungaloy" },
    { src: ntk, alt: "NTK Cutting Tools" }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-technical-black to-metallic-gray-dark/20">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
            ¿Qué Ofrecemos?
          </h2>
          <p className="text-xl text-steel-gray-light max-w-3xl mx-auto">
            Soluciones completas en herramientas de maquinado para la industria moderna
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* BRAND IMAGES */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brandImages.map((img, index) => (
            <div key={index} className="metallic-card p-4 hover-lift">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-contain mx-auto"
              />
        </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhatSection;
