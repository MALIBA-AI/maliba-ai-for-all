import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { PublicationCardProps } from '@/components/PublicationCard';
import PublicationCard from '@/components/PublicationCard';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const publicationsData: PublicationCardProps[] = [
  {
    id: "bambara-llm-whitepaper",
    title: "Développement d'un modèle de langage pour le bambara",
    description: "Ce livre blanc présente l'approche et les techniques utilisées pour développer un modèle de langage pré-entraîné pour le bambara.",
    type: "whitepaper",
    date: "Avril 2025",
    author: "Dr. Fatoumata Traoré",
    downloadUrl: "https://google.com"
  },
  {
    id: "voice-tech-mali",
    title: "Technologies vocales pour l'inclusion numérique au Mali",
    description: "Article de recherche explorant comment les technologies vocales peuvent surmonter les barrières de l'alphabétisation au Mali.",
    type: "research",
    date: "Mars 2025",
    author: "Ibrahim Diallo, Amadou Konaté",
    downloadUrl: "#"
  },
  {
    id: "nlp-african-languages",
    title: "Défis du NLP pour les langues africaines à faibles ressources",
    description: "Étude des défis spécifiques et des solutions potentielles pour le traitement automatique des langues africaines peu documentées.",
    type: "research",
    date: "Février 2025",
    author: "Dr. Aïssata Coulibaly",
    downloadUrl: "#"
  },
  {
    id: "mali-voice-doc",
    title: "Documentation technique : Mali Voice API",
    description: "Documentation technique complète de l'API Mali Voice pour la reconnaissance vocale des dialectes maliens.",
    type: "documentation",
    date: "Février 2025",
    author: "Équipe technique MALIBA-AI",
    downloadUrl: "#"
  },
  {
    id: "ai-access-blog",
    title: "Rendre l'IA accessible à tous : notre mission chez MALIBA-AI",
    description: "Exploration de notre vision et de nos initiatives pour démocratiser l'accès à l'IA au Mali.",
    type: "blog",
    date: "Janvier 2025",
    author: "Amadou Konaté",
    downloadUrl: "#"
  },
  {
    id: "multilingual-chatbot",
    title: "Conception d'un chatbot multilingue pour les services publics",
    description: "Présentation d'une architecture de chatbot capable de fonctionner en français et dans plusieurs langues maliennes.",
    type: "whitepaper",
    date: "Décembre 2024",
    author: "Mariam Sanogo, Oumar Touré",
    downloadUrl: "#"
  },
  {
    id: "songhay-corpus-paper",
    title: "Construction et annotation d'un corpus songhay pour l'IA",
    description: "Méthodologie et résultats de la collecte d'un corpus linguistique en langue songhay pour l'entraînement de modèles d'IA.",
    type: "research",
    date: "Novembre 2024",
    author: "Dr. Aïssata Coulibaly",
    downloadUrl: "#"
  },
  {
    id: "bambara-translation-blog",
    title: "Les coulisses de notre système de traduction automatique bambara",
    description: "Un aperçu des défis et des réussites dans le développement de notre système de traduction français-bambara.",
    type: "blog",
    date: "Octobre 2024",
    author: "Ibrahim Diallo",
    downloadUrl: "#"
  }
];

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('all');
  
  const publicationTypes = [
    { id: 'all', name: 'Toutes les publications' },
    { id: 'blog', name: 'Blog' },
    { id: 'whitepaper', name: 'Livres blancs' },
    { id: 'research', name: 'Recherche' },
    { id: 'documentation', name: 'Documentation' },
  ];
  
  const filteredPublications = publicationsData.filter(publication => {
    const matchesSearch = publication.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          publication.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          publication.author?.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesType = activeType === 'all' || publication.type === activeType;
    
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <div className="relative text-white bg-maliba-blue/95 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Nos publications
            </h1>
            <p className="text-xl text-white/70">
              Découvrez nos recherches, livres blancs, documentations techniques et articles de blog 
              sur l'intelligence artificielle au Mali.
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
                placeholder="Rechercher une publication..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs 
              defaultValue="all" 
              className="w-full md:w-auto"
              value={activeType}
              onValueChange={setActiveType}
            >
              <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex md:space-x-1">
                {publicationTypes.map((type) => (
                  <TabsTrigger key={type.id} value={type.id} className="text-sm">
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPublications.map((publication) => (
                <PublicationCard key={publication.id} {...publication} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Aucune publication ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Partagez votre expertise"
                subtitle="Contribuez à nos publications pour enrichir la connaissance sur l'IA en Afrique"
              />
              
              <p className="mt-6 text-gray-600">
                Vous êtes chercheur, expert en IA ou passionné par les technologies linguistiques ? 
                Nous vous invitons à contribuer à nos publications pour partager vos connaissances 
                et enrichir la réflexion sur le développement de l'IA au Mali et en Afrique.
              </p>
              
              <div className="mt-8">
                <a href="/contact" className="inline-block text-white font-medium py-2 px-6 rounded-md" style={{backgroundColor: '#FFD83A'}}>
                  Proposer une contribution
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Nos principes de publication</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5" style={{backgroundColor: 'rgba(255,216,58,0.1)', color: '#FFD83A'}}>
                    1
                  </div>
                  <div>
                    <strong>Rigueur scientifique</strong>
                    <p className="text-gray-600 mt-1">Nous veillons à la qualité et à la précision scientifique de toutes nos publications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5" style={{backgroundColor: 'rgba(255,216,58,0.1)', color: '#FFD83A'}}>
                    2
                  </div>
                  <div>
                    <strong>Accessibilité</strong>
                    <p className="text-gray-600 mt-1">Nos publications sont rédigées pour être compréhensibles par un large public, pas uniquement des experts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5" style={{backgroundColor: 'rgba(255,216,58,0.1)', color: '#FFD83A'}}>
                    3
                  </div>
                  <div>
                    <strong>Multilinguisme</strong>
                    <p className="text-gray-600 mt-1">Nous encourageons les publications en français et dans les langues maliennes pour maximiser leur impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5" style={{backgroundColor: 'rgba(255,216,58,0.1)', color: '#FFD83A'}}>
                    4
                  </div>
                  <div>
                    <strong>Open Access</strong>
                    <p className="text-gray-600 mt-1">Toutes nos publications sont librement accessibles pour favoriser le partage des connaissances.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;
