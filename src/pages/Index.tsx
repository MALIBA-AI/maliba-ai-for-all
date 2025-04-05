
import React from 'react';
import { Globe, Lightbulb, Mic, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects = [
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
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero 
        title="MALIBA-AI : L'IA au service du Mali, pour tous les Maliens"
        subtitle="Une initiative communautaire pour démocratiser l'intelligence artificielle au Mali"
        description="Nous développons des solutions d'IA adaptées aux besoins locaux et accessibles à tous les Maliens, quelle que soit leur langue maternelle ou leur niveau d'éducation"
        ctaText="Rejoignez-nous"
        ctaLink="/join"
      />
      
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Notre mission"
            subtitle="MALIBA-AI combine 'Mali Ba' (Grand Mali) et IA (Intelligence Artificielle) pour créer des solutions technologiques adaptées aux défis locaux"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard 
              title="Inclusion linguistique"
              description="Développer des modèles de langage pour les langues maliennes, en commençant par le bambara, le fulfuldé et le songhaï."
              icon={Globe}
              iconClassName="bg-maliba-blue/10 text-maliba-blue"
            />
            <FeatureCard 
              title="Technologies vocales"
              description="Créer des solutions de reconnaissance et de synthèse vocale adaptées aux dialectes maliens pour surmonter la barrière de l'alphabétisation."
              icon={Mic}
              iconClassName="bg-maliba-green/10 text-maliba-green"
            />
            <FeatureCard 
              title="Recherche communautaire"
              description="Promouvoir une recherche collective sur l'IA, impliquant chercheurs, développeurs et utilisateurs dans un écosystème collaboratif."
              icon={Users}
              iconClassName="bg-maliba-ocre/10 text-maliba-ocre"
            />
            <FeatureCard 
              title="Solutions accessibles"
              description="Développer des applications pratiques qui répondent aux besoins spécifiques des communautés maliennes dans divers secteurs."
              icon={Lightbulb}
              iconClassName="bg-gray-500/10 text-gray-500"
            />
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <SectionTitle 
              title="Nos projets"
              subtitle="Découvrez nos initiatives pour rendre l'IA accessible à tous les Maliens"
              className="md:mb-0"
            />
            <Link to="/projects">
              <Button variant="outline" className="mt-4 md:mt-0">
                Voir tous les projets
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-maliba-ocre text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Les défis de l'IA au Mali
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white text-maliba-ocre flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Barrière linguistique</h3>
                    <p>La majorité des modèles d'IA sont entraînés en langues occidentales, excluant les langues locales maliennes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white text-maliba-ocre flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Infrastructures limitées</h3>
                    <p>L'accès restreint à Internet et aux équipements informatiques freine l'adoption des technologies d'IA.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white text-maliba-ocre flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Alphabétisation numérique</h3>
                    <p>Le taux limité d'alphabétisation et de compétences numériques nécessite des solutions adaptées.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-maliba-ocre text-2xl font-bold mb-4 font-heading">Notre approche</h3>
                <p className="text-gray-700 mb-6">
                  MALIBA-AI relève ces défis à travers une approche communautaire, inclusive et pratique :
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-maliba-ocre rounded-full mr-2"></div>
                    <span>Développement de modèles multilingues pour les langues maliennes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-maliba-ocre rounded-full mr-2"></div>
                    <span>Solutions vocales pour contourner les barrières de l'alphabétisation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-maliba-ocre rounded-full mr-2"></div>
                    <span>Applications optimisées pour fonctionner avec des ressources limitées</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-maliba-ocre rounded-full mr-2"></div>
                    <span>Formation et sensibilisation aux technologies d'IA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container text-center">
          <SectionTitle 
            title="Rejoignez MALIBA-AI"
            subtitle="Participez à notre initiative communautaire pour développer l'IA au service du Mali"
            centered
          />
          
          <div className="max-w-2xl mx-auto mt-8 mb-10 text-lg">
            <p>
              Que vous soyez développeur, linguiste, chercheur, traducteur ou simplement intéressé par l'IA, 
              votre contribution est précieuse pour faire avancer notre mission collective.
            </p>
          </div>
          
          <Link to="/join">
            <Button className="bg-maliba-ocre hover:bg-maliba-ocre/90 text-white px-8 py-6 rounded-md font-medium text-lg">
              Rejoindre la communauté
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
