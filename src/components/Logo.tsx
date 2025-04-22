import React from 'react';
import { cn } from '@/lib/utils';
import logoImg from '../assets/images/Logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className, showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center justify-center">
        <img
          src={logoImg}
          alt="Logo MALIBA-AI"
          className="w-36 h-36 object-contain"
        />
      </div>
      {showText && (
        <div className="ml-2 font-heading font-bold text-xl">MALIBA-AI</div>
      )}
    </div>
  );
};

export default Logo;
