
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className, showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
            fill="#C8853E"
          />
          <path
            d="M14 10H10V30H14V10Z"
            fill="#3D7EA6"
          />
          <path
            d="M20 10H16V30H20V10Z"
            fill="#3D7EA6"
          />
          <path
            d="M32 10H26V14H29V30H32V10Z"
            fill="#3D7EA6"
          />
          <path
            d="M25 20C25 22.7614 22.7614 25 20 25C17.2386 25 15 22.7614 15 20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20Z"
            fill="#598C5A"
          />
        </svg>
      </div>
      {showText && (
        <div className="ml-2 font-heading font-bold text-xl">MALIBA-AI</div>
      )}
    </div>
  );
};

export default Logo;
