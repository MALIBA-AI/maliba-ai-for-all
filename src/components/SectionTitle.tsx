
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = false, className }: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12", 
      centered ? "text-center mx-auto" : "", 
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-maliba-ocre mt-4 mb-2 rounded-full">
        <div className="h-1 w-10 bg-maliba-blue rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
