import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, ChevronUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-technical-black/95 backdrop-blur-sm border-b border-metallic-gray-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="logo-3d">
                <span className="text-3xl font-bold text-metallic-indigo">RPM</span>
                <br />
                <span className="text-2xl font-bold text-precision-red">TOOLS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="nav-link">Inicio</a>
              <a href="#productos" className="nav-link">Productos</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#nosotros" className="nav-link">Quiénes Somos</a>
              <a href="#contacto" className="nav-link">Contacto</a>
            </nav>

            {/* User Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-steel-gray-light hover:text-precision-red transition-colors">
                <User size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-steel-gray-light hover:text-precision-red"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-technical-black border-t border-metallic-gray-dark/30">
              <nav className="flex flex-col space-y-4 p-4">
                <a href="#inicio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                <a href="#productos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Productos</a>
                <a href="#servicios" className="nav-link" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                <a href="#nosotros" className="nav-link" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a>
                <a href="#contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                <div className="flex items-center space-x-4 pt-4 border-t border-metallic-gray-dark/30">
                  <button className="flex items-center space-x-2 text-steel-gray-light">
                    <User size={20} />
                    <span>Mi Cuenta</span>
                  </button>
                  <button className="relative p-2 text-precision-red">
                    <ShoppingCart size={24} />
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
          className="fixed bottom-6 right-6 z-50 bg-precision-red hover:bg-precision-red/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Header;