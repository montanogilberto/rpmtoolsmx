import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, ChevronUp } from 'lucide-react';
import Logotipo from '../assets/Logotipo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll handler for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to section with header offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -128; // fixed header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-technical-black/95 backdrop-blur-sm border-b border-metallic-gray-dark/30">
        <div className="header-container">
          <div className="flex items-center justify-between h-32">
            {/* Logo */}
            <div className="flex items-center space-x-6">
              <div className="logo-container">
                <img
                  src={Logotipo}
                  alt="RPM Tools Logo"
                  className="logo-image metallic logo-large logo-width-lg object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {['inicio', 'servicios', 'nosotros', 'contacto'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section === 'inicio' ? 'Inicio' :
                   section === 'servicios' ? 'Servicios' :
                   section === 'nosotros' ? 'Quiénes Somos' :
                   'Contacto'}
                </a>
              ))}
            </nav>

            {/* User Actions */}
            <div className="hidden lg:flex items-center space-x-8">
              <button className="text-steel-gray-light hover:text-precision-red transition-colors">
                <User size={28} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-steel-gray-light hover:text-precision-red"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-technical-black border-t border-metallic-gray-dark/30">
              <nav className="flex flex-col space-y-4 p-4">
                {['inicio', 'servicios', 'nosotros', 'contacto'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToSection(section);
                    }}
                  >
                    {section === 'inicio' ? 'Inicio' :
                     section === 'servicios' ? 'Servicios' :
                     section === 'nosotros' ? 'Quiénes Somos' :
                     'Contacto'}
                  </a>
                ))}
                <div className="flex items-center space-x-8 pt-4 border-t border-metallic-gray-dark/30">
                  <button className="flex items-center space-x-2 text-steel-gray-light">
                    <User size={24} />
                    <span>Mi Cuenta</span>
                  </button>
                  <button className="relative p-2 text-precision-red">
                    <ShoppingCart size={28} />
                    <span className="absolute -top-1 -right-1 bg-precision-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-precision-red hover:bg-precision-red/80 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp size={32} />
        </button>
      )}
    </>
  );
};

export default Header;
