
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = "En savoir plus",
  ctaLink = "/about",
  imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format",
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-maliba-dark/80 to-maliba-dark/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center py-20 md:py-32 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl font-heading">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90 max-w-2xl">
            {subtitle}
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-prose text-white/80">
            {description}
          </p>
          <Link to={ctaLink}>
            <Button
              className="bg-maliba-blue hover:bg-maliba-blue/90 text-white px-8 py-6 rounded-md font-medium text-lg"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
