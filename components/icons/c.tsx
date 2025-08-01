import React, { forwardRef, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface CIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
  textColor?: string;
}

// Função para converter hex para HSL
const hexToHsl = (hex: string): [number, number, number] => {
  // Garantir que a cor hex seja válida
  const cleanHex = hex.startsWith('#') ? hex : `#${hex}`;
  const r = parseInt(cleanHex.slice(1, 3), 16) / 255;
  const g = parseInt(cleanHex.slice(3, 5), 16) / 255;
  const b = parseInt(cleanHex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

// Função para converter HSL para hex
const hslToHex = (h: number, s: number, l: number): string => {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  const toHex = (c: number): string => {
    const hex = Math.round(Math.max(0, Math.min(255, c * 255))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Função para validar e corrigir cores hex
const validateHexColor = (color: string): string => {
  // Se não for uma cor hex válida, usar cor padrão
  if (!color || !/^#[0-9A-Fa-f]{6}$/.test(color)) {
    return '#aaaa22';
  }
  return color;
};

// Função para gerar cores complementares
const generateComplementaryColors = (primaryColor: string) => {
  const validColor = validateHexColor(primaryColor);
  const [h, s, l] = hexToHsl(validColor);
  
  // Cor secundária: mesma matiz, saturação aumentada, luminosidade reduzida
  const secondaryH = h;
  const secondaryS = Math.min(s * 1.3, 100);
  const secondaryL = Math.max(l * 0.7, 25); // Mínimo de 25% para visibilidade
  
  // Cor de destaque: mesma matiz, saturação reduzida, luminosidade aumentada
  const accentH = h;
  const accentS = Math.max(s * 0.8, 40); // Mínimo de 40% para visibilidade
  const accentL = Math.min(l * 1.4, 75); // Máximo de 75% para contraste
  
  // Cor escura: mesma matiz, saturação aumentada, luminosidade muito baixa
  const darkH = h;
  const darkS = Math.min(s * 1.5, 100);
  const darkL = Math.max(l * 0.4, 20); // Mínimo de 20% para visibilidade
  
  return {
    primary: validColor,
    secondary: hslToHex(secondaryH, secondaryS, secondaryL),
    accent: hslToHex(accentH, accentS, accentL),
    dark: hslToHex(darkH, darkS, darkL),
  };
};

const CIcon = forwardRef<SVGSVGElement, CIconProps>(
  ({ 
    size = 24, 
    fill = '#00599C', 
    textColor = '#fff',
    className, 
    ...props 
  }, ref) => {
    
    // Gerar cores complementares baseadas na cor principal
    const colors = useMemo(() => generateComplementaryColors(fill), [fill]);

    return (
      <svg
        ref={ref}
        viewBox="0 0 306 345"
        width={size}
        height={size}
        fill="none"
        className={cn('inline-block', className)}
        role="img"
        aria-label="C++ Programming Language"
        {...props}
      >
        <g clipPath="url(#c__a)">
          <path 
            fill={colors.primary} 
            d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.139c0-4.207-1.49-8.892-3.892-13.051L153 172.175l149.107 86.087Z"
          />
          <path 
            fill={colors.secondary} 
            d="m166.25 341.193 126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.4 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0Z"
          />
          <path 
            fill={colors.accent} 
            d="M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088Z"
          />
          <path 
            fill={textColor} 
            d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.105-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543c-18.192 31.441-52.04 50.972-88.334 50.972Z"
          />
        </g>
        <defs>
          <clipPath id="c__a">
            <path fill="#fff" d="M0 0h306v344.35H0z"/>
          </clipPath>
        </defs>
      </svg>
    );
  }
);

CIcon.displayName = 'CIcon';

export default CIcon;