import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-technical-black/95 via-technical-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="hero-title text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Soluciones para un 
            <br />un futuro sin límites
          </h1>
          
          <p className="text-xl lg:text-2xl text-steel-gray-light mb-8 font-light">
            Rapidez y precisión para maquinado
          </p>

          <button className="cta-button text-lg px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105">
            Ver catálogo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;