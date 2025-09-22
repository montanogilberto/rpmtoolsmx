import React from 'react';
import Logo from './Logo';

const LogoExamples = () => {
  return (
    <div className="p-8 bg-technical-black">
      <h2 className="text-2xl font-bold text-steel-gray-light mb-6">
        Logo Responsive Examples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Desktop Header Size */}
        <div className="metallic-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-4 text-precision-red">
            Header Desktop
          </h3>
          <Logo size="large" width="lg" showEffect={true} />
          <p className="text-sm text-steel-gray-light mt-2">
            80px × 240px
          </p>
        </div>

        {/* Tablet Size */}
        <div className="metallic-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-4 text-precision-red">
            Tablet
          </h3>
          <Logo size="medium" width="md" />
          <p className="text-sm text-steel-gray-light mt-2">
            60px × 180px
          </p>
        </div>

        {/* Mobile Size */}
        <div className="metallic-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-4 text-precision-red">
            Mobile
          </h3>
          <Logo size="small" width="sm" />
          <p className="text-sm text-steel-gray-light mt-2">
            48px × 120px
          </p>
        </div>

        {/* Footer Size */}
        <div className="metallic-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-4 text-precision-red">
            Footer
          </h3>
          <Logo size="xs" width="auto" />
          <p className="text-sm text-steel-gray-light mt-2">
            40px × auto
          </p>
        </div>

      </div>

      {/* Usage Examples */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-steel-gray-light">
          Usage Examples:
        </h3>
        <div className="bg-metallic-gray-dark/20 p-4 rounded">
          <pre className="text-steel-gray-light text-sm">
{`// Header (ya implementado)
<Logo size="large" width="lg" showEffect={true} />

// Footer
<Logo size="xs" width="auto" />

// Mobile menu
<Logo size="small" width="sm" />

// Responsive con CSS
<img className="logo-image logo-medium logo-width-md" src={logo} alt="Logo" />`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LogoExamples;
