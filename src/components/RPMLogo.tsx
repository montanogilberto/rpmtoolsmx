import React from 'react';

interface RPMLogoProps {
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xl';
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showEffect?: boolean;
}

const RPMLogo: React.FC<RPMLogoProps> = ({
  size = 'medium',
  width = 'auto',
  className = '',
  showEffect = true
}) => {
  const sizeMap = {
    xs: { height: 40 },
    small: { height: 48 },
    medium: { height: 60 },
    large: { height: 80 },
    xl: { height: 100 }
  };

  const widthMap = {
    auto: 'auto',
    sm: 120,
    md: 180,
    lg: 240,
    xl: 300
  };

  const currentSize = sizeMap[size];
  const currentWidth = widthMap[width];

  const LogoSVG = () => (
    <svg
      width={currentWidth}
      height={currentSize.height}
      viewBox="0 0 700 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RPM Tools Logo"
    >
      <defs>
        {/* Blue metallic gradient */}
        <linearGradient id="blueMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1c3d7a" />
          <stop offset="50%" stopColor="#3a7bdb" />
          <stop offset="100%" stopColor="#0a1e3d" />
        </linearGradient>

        {/* Red metallic gradient */}
        <linearGradient id="redMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8a1c1c" />
          <stop offset="50%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#5a0f0f" />
        </linearGradient>

        {/* Gray metallic subtitle */}
        <linearGradient id="grayMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="50%" stopColor="#ddd" />
          <stop offset="100%" stopColor="#999" />
        </linearGradient>

        {/* Shine overlay gradient */}
        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="40%" stopColor="rgba(255,255,255,1)" />
          <stop offset="60%" stopColor="rgba(255,255,255,1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Animated mask for shine */}
        <mask id="shineMask">
          <rect width="200%" height="200%" fill="url(#shineGradient)">
            {showEffect && (
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-700 0"
                to="700 0"
                dur="6s"
                repeatCount="indefinite"
              />
            )}
          </rect>
        </mask>
      </defs>

      {/* RPM */}
      <text
        x="40"
        y="160"
        fontFamily="Rajdhani, sans-serif"
        fontSize="140"
        fontWeight="700"
        fill="url(#blueMetallic)"
        mask={showEffect ? 'url(#shineMask)' : undefined}
      >
        RPM
      </text>

      {/* TOOLS */}
      <text
        x="40"
        y="270"
        fontFamily="Rajdhani, sans-serif"
        fontSize="140"
        fontWeight="700"
        fill="url(#redMetallic)"
        mask={showEffect ? 'url(#shineMask)' : undefined}
      >
        TOOLS
      </text>

      {/* Subtitle */}
      <text
        x="40"
        y="320"
        fontFamily="Inter, sans-serif"
        fontSize="32"
        fontWeight="500"
        fill="url(#grayMetallic)"
      >
        RAPIDEZ Y PRECISIÓN PARA MAQUINADO
      </text>

      {/* Tachometer Outer Arc with shine */}
      <path
        d="M480 60 A140 140 0 0 1 660 200"
        fill="none"
        stroke="url(#blueMetallic)"
        strokeWidth="14"
        mask={showEffect ? 'url(#shineMask)' : undefined}
      />

      {/* Tachometer Inner Arc (dark background) */}
      <path
        d="M485 70 A130 130 0 0 1 650 195"
        fill="none"
        stroke="#111"
        strokeWidth="20"
      />

      {/* Ticks */}
      <line x1="500" y1="85" x2="495" y2="65" stroke="#ccc" strokeWidth="4" />
      <line x1="530" y1="70" x2="525" y2="50" stroke="#ccc" strokeWidth="4" />
      <line x1="565" y1="60" x2="562" y2="40" stroke="#ccc" strokeWidth="4" />
      <line x1="600" y1="65" x2="600" y2="45" stroke="#ccc" strokeWidth="4" />
      <line x1="630" y1="85" x2="640" y2="65" stroke="#ccc" strokeWidth="4" />
      <line x1="655" y1="115" x2="670" y2="100" stroke="#ccc" strokeWidth="4" />

      {/* Needle */}
      <line
        x1="560"
        y1="180"
        x2="630"
        y2="90"
        stroke="red"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="560" cy="180" r="12" fill="black" stroke="red" strokeWidth="3" />
    </svg>
  );

  return (
    <div className={`rpm-logo-container ${className}`}>
      <LogoSVG />
    </div>
  );
};

export default RPMLogo;
