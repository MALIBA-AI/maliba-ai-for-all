import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle2, Clock, Heart, Target } from 'lucide-react';
const malibaAiImage = '/images/malibaai.jpeg';

const About = () => {
  return (
    <Layout>
      <div className="relative bg-maliba-blue/95 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 font-heading">
              À propos de MALIBA-AI
            </h1>
            <p className="text-xl text-white/70 mb-4">
              MALIBA-AI est une initiative communautaire née d’une vision simple mais puissante : rendre l’intelligence artificielle accessible, compréhensible et bénéfique pour tous les Maliens, quelle que soit leur langue ou leur niveau d’éducation. 
            </p>
            
            <p className="text-xl text-white/70 mb-4">
              Le nom MALIBA-AI combine « Mali Ba » (Grand Mali) et « IA » (Intelligence Artificielle), reflétant notre engagement à développer des technologies ancrées dans les réalités locales, respectueuses des cultures, et conçues pour répondre aux besoins spécifiques de notre société.
            </p>

            <p className="text-lg text-white/70">
              Notre objectif : faire de l’IA une force de développement équitable, en créant des outils en langues maliennes, adaptés aux secteurs clés comme l’éducation, la santé, l’agriculture et l’inclusion numérique.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Notre philosophie"
            subtitle="MALIBA-AI s'appuie sur des valeurs fortes pour guider ses actions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center text-[#FFD83A] mb-4" style={{backgroundColor: 'rgba(255,216,58,0.1)'}}>
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Source</h3>
              <p className="text-gray-600">
                Nous croyons que le partage de la connaissance et des ressources est essentiel pour le développement de l'IA inclusive. 
                Tous nos projets sont open source, permettant à chacun de contribuer et d'améliorer nos solutions.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-maliba-blue/10 flex items-center justify-center text-maliba-blue mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Communauté</h3>
              <p className="text-gray-600">
                MALIBA-AI est avant tout une initiative communautaire. Nous valorisons la diversité des compétences 
                et encourageons chacun à apporter sa pierre à l'édifice, quelle que soit son expertise.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-maliba-green/10 flex items-center justify-center text-maliba-green mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Social</h3>
              <p className="text-gray-600">
                Notre priorité est de développer des solutions qui répondent aux défis spécifiques du Mali et qui 
                apportent une valeur ajoutée concrète à la vie quotidienne des Maliens.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Nos objectifs"
                subtitle="MALIBA-AI vise à transformer le paysage technologique du Mali"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full text-white flex items-center justify-center font-bold mr-4" style={{backgroundColor: '#FFD83A'}}>
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Démocratiser l'accès à l'IA</h3>
                    <p className="text-gray-600">
                      Rendre les technologies d'IA accessibles à tous les Maliens, indépendamment de leur niveau d'éducation ou de leur langue maternelle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full text-white flex items-center justify-center font-bold mr-4" style={{backgroundColor: '#FFD83A'}}>
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Préserver et valoriser les langues maliennes</h3>
                    <p className="text-gray-600">
                      Développer des modèles linguistiques pour les langues locales, contribuant ainsi à leur préservation et à leur promotion à l'ère numérique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full text-white flex items-center justify-center font-bold mr-4" style={{backgroundColor: '#FFD83A'}}>
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Créer un écosystème d'innovation</h3>
                    <p className="text-gray-600">
                      Établir une communauté dynamique de chercheurs, développeurs et utilisateurs travaillant ensemble à résoudre les défis locaux grâce à l'IA.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full text-white flex items-center justify-center font-bold mr-4" style={{backgroundColor: '#FFD83A'}}>
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Former la prochaine génération</h3>
                    <p className="text-gray-600">
                      Éduquer et former les jeunes Maliens aux technologies d'IA, favorisant ainsi l'émergence d'une expertise locale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={malibaAiImage} 
                alt="Maliba AI" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-bold">
                  Construire ensemble l'avenir technologique du Mali
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-maliba-blue/95 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Notre vision pour l'avenir
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">
              MALIBA-AI aspire à faire du Mali un leader régional dans le développement de solutions d'IA adaptées au contexte africain, 
              contribuant ainsi au développement socio-économique du pays.
            </p>
            
            <div className="flex items-center justify-center">
              <Clock className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">Horizon 2030</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
