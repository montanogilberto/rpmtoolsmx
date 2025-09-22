import React from 'react';
import { Linkedin, Github, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <MessageCircle size={20} />, href: '#', label: 'WhatsApp' }
  ];

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="small" width="auto" className="mb-4" />
            <p className="text-steel-gray-light leading-relaxed max-w-sm">
              RPM Tools MX - Soluciones avanzadas en herramientas de corte y maquinaria
              industrial para la industria moderna. Calidad, precisión y entrega rápida.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-steel-gray-light mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-steel-gray-light mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-steel-gray-light">
                <MapPin size={18} className="text-metallic-indigo flex-shrink-0" />
                <span className="text-sm">México, CDMX</span>
              </div>
              <div className="flex items-center space-x-3 text-steel-gray-light">
                <Phone size={18} className="text-metallic-indigo flex-shrink-0" />
                <span className="text-sm">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-steel-gray-light">
                <Mail size={18} className="text-metallic-indigo flex-shrink-0" />
                <span className="text-sm">info@rpmtools.mx</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-metallic-gray-dark/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-steel-gray-light text-sm">
              © {currentYear} RPM Tools MX. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="footer-link">
                Política de Privacidad
              </a>
              <a href="#" className="footer-link">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
