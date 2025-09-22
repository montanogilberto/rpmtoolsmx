import React from 'react';
// @ts-ignore
import Logotipo from '../assets/Logotipo.jpeg';

interface LogoProps {
  size?: 'xs' | 'small' | 'medium' | 'large';
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showEffect?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  width = 'auto',
  className = '',
  showEffect = false
}) => {
  const sizeClass = `logo-${size}`;
  const widthClass = `logo-width-${width}`;
  const effectClass = showEffect ? 'metallic' : '';

  return (
    <div className="logo-container">
      <img
        src={Logotipo}
        alt="RPM Tools Logo"
        className={`logo-image ${effectClass} ${sizeClass} ${widthClass} object-contain ${className}`}
      />
    </div>
  );
};

export default Logo;
