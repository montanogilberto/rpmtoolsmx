import React, { useState } from 'react';
import { Wrench, Cog, Zap } from 'lucide-react';
import ProductModal from './ProductModal';

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
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 'pct',
      name: "PCT - Precision Cutting Tools",
      description: "Herramientas de corte de precisión para aplicaciones industriales especializadas. Diseñadas para ofrecer el máximo rendimiento en materiales difíciles de mecanizar.",
      features: [
        "Herramientas de carburo sólido",
        "Revestimientos avanzados PVD",
        "Diseños optimizados para alta velocidad",
        "Tolerancias de fabricación estrictas"
      ],
      image: pctLogo,
      alt: "PCT Logo"
    },
    {
      id: 'morse',
      name: "Morse Cutting Tools",
      description: "Línea completa de herramientas de corte para la industria metalmecánica. Especialistas en brocas, machuelos y fresas de alta calidad.",
      features: [
        "Brocas HSS y carburo",
        "Machuelos para todo tipo de roscas",
        "Fresas para operaciones específicas",
        "Herramientas especiales a medida"
      ],
      image: morseLogo,
      alt: "Morse Cutting Tools"
    },
    {
      id: 'morse-catalog',
      name: "Catálogo Morse",
      description: "Catálogo completo de productos Morse con especificaciones técnicas detalladas y aplicaciones recomendadas para cada herramienta.",
      features: [
        "Especificaciones técnicas completas",
        "Guías de aplicación por material",
        "Tablas de velocidades y avances",
        "Información de compatibilidad"
      ],
      image: morseCatalog,
      alt: "Morse Catalog"
    },
    {
      id: 'toolflo',
      name: "ToolFlo Catalog",
      description: "Catálogo especializado en herramientas de corte para aplicaciones de alto rendimiento y materiales exóticos.",
      features: [
        "Herramientas para materiales difíciles",
        "Soluciones para mecanizado de precisión",
        "Productos para industria aeroespacial",
        "Herramientas de larga duración"
      ],
      image: toolfloCatalog,
      alt: "ToolFlo Catalog"
    },
    {
      id: 'mtthread',
      name: "MT Thread",
      description: "Especialistas en herramientas para roscado de precisión. Soluciones completas para todo tipo de aplicaciones de roscado.",
      features: [
        "Machuelos de alta precisión",
        "Terrajas y herramientas de roscado",
        "Sistemas de roscado sincronizado",
        "Soluciones para materiales especiales"
      ],
      image: mtthread,
      alt: "MT Thread"
    },
    {
      id: 'imco',
      name: "IMCO Carbide Tools",
      description: "Herramientas de carburo de alta calidad para aplicaciones de fresado de alto rendimiento y larga duración.",
      features: [
        "Fresas de carburo premium",
        "Revestimientos avanzados",
        "Diseños de geometría optimizada",
        "Herramientas para alta velocidad"
      ],
      image: imco,
      alt: "IMCO"
    },
    {
      id: 'tungaloy',
      name: "Tungaloy Corporation",
      description: "Líder mundial en herramientas de corte y materiales avanzados. Innovación constante en soluciones de mecanizado.",
      features: [
        "Insertos de corte cerámicos",
        "Herramientas para mecanizado difícil",
        "Soluciones para industria automotriz",
        "Tecnología de vanguardia"
      ],
      image: tungaloy,
      alt: "Tungaloy"
    },
    {
      id: 'ntk',
      name: "NTK Cutting Tools",
      description: "Herramientas de corte de cerámica técnica y materiales avanzados para aplicaciones de alta precisión y temperatura.",
      features: [
        "Herramientas cerámicas técnicas",
        "Soluciones para mecanizado en seco",
        "Alta resistencia al calor",
        "Máxima precisión dimensional"
      ],
      image: ntk,
      alt: "NTK Cutting Tools"
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedProduct(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
    <section id="servicios" className="py-20 bg-gradient-to-b from-technical-black to-metallic-gray-dark/20">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-steel-gray-light max-w-3xl mx-auto">
            Servicios especializados en herramientas de corte y soluciones industriales para maximizar su productividad
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

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="metallic-card p-4 hover-lift cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-40 object-contain mx-auto mb-3"
              />
              <h3 className="text-center text-steel-gray-light font-semibold text-sm">
                {service.name}
              </h3>
              <p className="text-center text-precision-red text-xs mt-1">Haz clic para más info</p>
            </div>
          ))}
        </div>

      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default WhatSection;
