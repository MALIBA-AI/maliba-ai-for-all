
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  image?: string;
  link?: string;
  commingSoon?: boolean;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  category, 
  tags = [],
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format",
  link,
  commingSoon = false
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge className="mb-2 bg-maliba-blue hover:bg-maliba-blue">{category}</Badge>
        </div>
        <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Link to={`/projects/${id}`}> */}
        {commingSoon && (
          <Button variant="ghost" className="text-maliba-ocre hover:text-maliba-ocre/90 p-0">
            A venir
            {/* <ArrowRight className="h-4 w-4 ml-1" /> */}
          </Button>
        )}
        {!commingSoon && (
          <a href={link}>
            <Button variant="ghost" className="text-maliba-ocre hover:text-maliba-ocre/90 p-0">
              Voir le projet
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </a>
        )}
        {/* </Link> */}
        
        {/* <a href="#" className="text-gray-500 hover:text-maliba-ocre">
          <LinkIcon className="h-4 w-4" />
        </a> */}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
