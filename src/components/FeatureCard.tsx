
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  iconClassName
}: FeatureCardProps) => {
  return (
    <Card className={cn("card-hover border border-gray-200", className)}>
      <CardHeader>
        {Icon && (
          <div className={cn("w-12 h-12 flex items-center justify-center rounded-md mb-4 bg-maliba-ocre/10 text-maliba-ocre", iconClassName)}>
            <Icon className="h-6 w-6" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
