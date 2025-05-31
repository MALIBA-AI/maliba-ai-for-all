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
    title: "Maliba ASR",
    description: "Un modèle de reconnaissance vocale entraîné pour le bambara, capable de transcrire automatiquement la parole en texte, que le discours soit entièrement en bambara ou mêlé au français ou englais.",
    category: "Modèles de langage",
    tags: ["NLP", "Bambara", "ASR"],
    image: "https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-in-2021.png"
  },
  {
    id: "mali-voice",
    title: "Mali voice",
    description: "Une technologie de synthèse voice capable de generer de la voix synthetique en bambara, boomu, dogon, pular, songhoy et tamasheq",
    category: "Technologies vocales",
    tags: ["Speech-to-Text", "Accessibilité", "Dialectes"],
    image: "https://images.ctfassets.net/y769453lpkt4/47doSFP2bhd6oWYwffTpIr/58f5f8c551d26863be59723f2a34d569/62b264ced6e2c5184b2ce2d4_The_8_Best_TTS_Voice_Providers.jpg"
  },
  {
    id: "ai-for-agriculture",
    title: "Bambara Voice Assistant",
  description: "Un assistant vocal 100% en Bambara, capable de répondre à l’oral en Bambara et d’aider les utilisateurs à comprendre des documents administratifs, accéder à des informations utiles (santé, agriculture, éducation) ou encore apprendre des notions scientifiques comme les lois de la physique le tout sans avoir besoin de savoir lire ou écrire.",
  category: "Technologies vocales",
  tags: ["Bambara", "Assistant vocal", "Accessibilité", "Éducation", "Traduction", "Inclusion numérique"],
  image: "https://www.sprinterra.com/wp-content/uploads/2024/07/iStock-1367728606.jpg"
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
            // subtitle="MALIBA-AI est la pour créer des solutions technologiques adaptées aux défis locaux en utilisant AI (Intelligence Artificielle)"
            // centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard 
              title="Inclusion linguistique"
              description="Développer des modèles de langage pour les langues maliennes, telque le bambara, le fulfuldé et le songhaï..."
              icon={Globe}
              iconClassName="bg-[#FFD83A]/10 text-[#FFD83A]"
            />
            <FeatureCard 
              title="Technologies vocales"
              description="Créer des solutions de reconnaissance et de synthèse vocale adaptées aux dialectes maliens pour surmonter la barrière de l'alphabétisation."
              icon={Mic}
              iconClassName="bg-[#FFD83A]/10 text-[#FFD83A]"
            />
            <FeatureCard 
              title="Recherche communautaire"
              description="Unir chercheurs, développeurs, linguistes, étudiants et passionnés dans un écosystème collaboratif pour mener des recherches et développer des solutions d’IA axées sur nos langues et notre communauté"
              icon={Users}
              iconClassName="bg-[#FFD83A]/10 text-[#FFD83A]"
            />
            <FeatureCard 
              title="Solutions accessibles"
              description="Développer des solutions pratiques qui répondent aux besoins spécifiques des communautés maliennes dans divers secteurs telque l'agrioculture, l'éducation, la santé, le commerce ..."
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
      
      <section className="section text-black" style={{backgroundColor: '#OE273B'}}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{color: '#FFD83A'}}>
                Les défis de l'IA au Mali
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center font-bold" style={{color: '#FFD83A'}}>
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Barrière linguistique</h3>
                    <p>La majorité des modèles d'IA sont entraînés en langues occidentales, excluant les langues locales maliennes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center font-bold" style={{color: '#FFD83A'}}>
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Infrastructures limitées</h3>
                    <p>L'accès restreint à Internet et aux équipements informatiques freine l'adoption des technologies d'IA.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center font-bold" style={{color: '#FFD83A'}}>
                      3
                    </div>
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
                <h3 className="text-2xl font-bold mb-4 font-heading" style={{color: '#FFD83A'}}>
                  Notre approche
                </h3>
                <p className="text-gray-700 mb-6">
                  MALIBA-AI relève ces défis à travers une approche communautaire, inclusive et pratique :
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#FFD83A'}}></div>
                    <span>Développement de modèles multilingues pour les langues maliennes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#FFD83A'}}></div>
                    <span>Solutions vocales pour contourner les barrières de l'alphabétisation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#FFD83A'}}></div>
                    <span>Applications optimisées pour fonctionner avec des ressources limitées</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#FFD83A'}}></div>
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
              Que vous soyez chercheur, développeur, linguiste, étudiant ou simplement intéressé par l'IA et l'impact social, 
              votre contribution est précieuse pour faire avancer notre mission collective.
            </p>
          </div>
          
          <Link to="/join">
            <Button className="bg-maliba-blue hover:bg-maliba-blue/90 text-white px-8 py-6 rounded-md font-medium text-lg">
              Rejoindre la communauté
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
