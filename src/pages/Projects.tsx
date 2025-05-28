
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const projectsData: ProjectCardProps[] = [
  {
    id: "bambara-llm",
    title: "Modèle linguistique Bambara",
    description: "Un modèle de langage pré-entraîné pour le bambara, permettant de générer et comprendre des textes en langue bambara.",
    category: "Modèles de langage",
    tags: ["NLP", "Bambara", "LLM"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format"
  },
  {
    id: "mali-voice",
    title: "Mali Voice",
    description: "Technologie de reconnaissance vocale adaptée aux dialectes maliens pour faciliter l'accès à l'information pour tous.",
    category: "Technologies vocales",
    tags: ["Speech-to-Text", "Accessibilité", "Dialectes"],
    image: "https://images.unsplash.com/photo-1601933513737-fd5d8913cbf9?w=500&auto=format"
  },
  {
    id: "ai-for-agriculture",
    title: "IA pour l'agriculture",
    description: "Solutions d'IA pour aider les agriculteurs maliens à optimiser leurs cultures et à faire face aux défis climatiques.",
    category: "Applications",
    tags: ["Agriculture", "Développement durable", "Prédiction"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&auto=format"
  },
  {
    id: "fulfude-translation",
    title: "Traducteur Français-Fulfuldé",
    description: "Système de traduction automatique entre le français et le fulfuldé pour faciliter la communication et l'accès à l'information.",
    category: "Modèles de langage",
    tags: ["Translation", "Fulfuldé", "NLP"],
    image: "https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=500&auto=format"
  },
  {
    id: "health-assistant",
    title: "Assistant santé vocal",
    description: "Application d'assistance médicale accessible par commande vocale en langues locales pour les zones rurales.",
    category: "Applications",
    tags: ["Santé", "Voice AI", "Accessibilité"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format"
  },
  {
    id: "education-platform",
    title: "Plateforme éducative multilingue",
    description: "Ressources éducatives accessibles en plusieurs langues maliennes avec assistance IA pour l'apprentissage personnalisé.",
    category: "Applications",
    tags: ["Éducation", "Multilingue", "E-learning"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format"
  },
  {
    id: "songhay-corpus",
    title: "Corpus Songhay",
    description: "Collecte et annotation de textes et enregistrements audio en langue songhay pour l'entraînement de modèles d'IA.",
    category: "Collecte de données",
    tags: ["Songhay", "Dataset", "Linguistique"],
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=500&auto=format"
  },
  {
    id: "mali-nlp-toolkit",
    title: "Boîte à outils NLP malienne",
    description: "Ensemble d'outils de traitement du langage naturel spécialement conçus pour les langues maliennes.",
    category: "Modèles de langage",
    tags: ["NLP", "Open Source", "Développement"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format"
  },
  {
    id: "ai-market-insights",
    title: "IA pour l'analyse des marchés",
    description: "Système de prédiction des prix et tendances des marchés agricoles pour aider les producteurs maliens.",
    category: "Applications",
    tags: ["Économie", "Prédiction", "Marchés"],
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=500&auto=format"
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'Modèles de langage', name: 'Modèles de langage' },
    { id: 'Technologies vocales', name: 'Technologies vocales' },
    { id: 'Applications', name: 'Applications' },
    { id: 'Collecte de données', name: 'Collecte de données' },
  ];
  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                          
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="relative text-white bg-maliba-blue/95 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Nos projets
            </h1>
            <p className="text-xl text-white/70">
              Découvrez les initiatives de MALIBA-AI pour rendre l'intelligence artificielle 
              accessible et utile à tous les Maliens.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Rechercher un projet..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs 
              defaultValue="all" 
              className="w-full md:w-auto"
              value={activeCategory}
              onValueChange={setActiveCategory}
            >
              <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex md:space-x-1">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Aucun projet ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Vous avez une idée de projet ?"
            subtitle="Proposez-nous vos idées et rejoignez notre équipe pour les concrétiser"
            centered
          />
          
          <div className="mt-10 text-center">
            <p className="mb-6 text-lg max-w-2xl mx-auto">
              MALIBA-AI est une initiative communautaire et nous sommes toujours ouverts à de nouvelles propositions de projets 
              qui répondent aux besoins spécifiques des communautés maliennes.
            </p>
            <a href="/contact" className="inline-block bg-maliba-blue hover:bg-maliba-blue/90 text-white font-medium py-2 px-6 rounded-md">
              Soumettre une idée
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
