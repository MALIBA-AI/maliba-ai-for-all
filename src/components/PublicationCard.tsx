
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface PublicationCardProps {
  id: string;
  title: string;
  description: string;
  type: "blog" | "whitepaper" | "research" | "documentation";
  date: string;
  author?: string;
  downloadUrl?: string;
}

const PublicationCard = ({ 
  id, 
  title, 
  description, 
  type, 
  date, 
  author,
  downloadUrl 
}: PublicationCardProps) => {
  
  const typeInfo = {
    blog: { label: 'Blog', color: 'bg-maliba-green hover:bg-maliba-green' },
    whitepaper: { label: 'Livre blanc', color: 'bg-maliba-blue hover:bg-maliba-blue' },
    research: { label: 'Recherche', color: 'bg-maliba-ocre hover:bg-maliba-ocre' },
    documentation: { label: 'Documentation', color: 'bg-gray-600 hover:bg-gray-600' },
  };
  
  return (
    <Card className="overflow-hidden card-hover">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge className={`mb-2 ${typeInfo[type].color}`}>
            {typeInfo[type].label}
          </Badge>
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
          {author && <span>• {author}</span>}
        </div>
        
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Link to={`/publications/${id}`}>
          <Button variant="ghost" className="text-maliba-ocre hover:text-maliba-ocre/90 p-0">
            Lire plus
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link> */}
        
        {downloadUrl && (
          <a 
            href={downloadUrl} 
            className="flex items-center gap-1 text-gray-500 hover:text-maliba-ocre"
            download
          >
            {/* <Download className="h-4 w-4" /> */}
            <Button variant="ghost" className="text-maliba-ocre hover:text-maliba-ocre/90 p-0">
            Lire plus
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default PublicationCard;
