import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Check, ChevronRight, Code, FileText, Languages, Users, ExternalLink } from 'lucide-react';

const Join = () => {
  return (
    <Layout>
      <div className="relative bg-maliba-ocre text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Rejoignez MALIBA-AI
            </h1>
            <p className="text-xl mb-6">
              Devenez membre de notre communauté et contribuez au développement de l'intelligence artificielle 
              inclusive au Mali, quelle que soit votre expertise.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Comment contribuer ?"
                subtitle="Il existe de nombreuses façons de participer à notre initiative"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-maliba-ocre transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-maliba-blue/10 text-maliba-blue flex items-center justify-center mr-4 flex-shrink-0">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Développement</h3>
                    <p className="text-gray-600">
                      Contribuez au code de nos projets open-source, qu'il s'agisse de modèles d'IA, d'applications ou d'interfaces utilisateur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-maliba-ocre transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-maliba-green/10 text-maliba-green flex items-center justify-center mr-4 flex-shrink-0">
                    <Languages className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Traduction et linguistique</h3>
                    <p className="text-gray-600">
                      Aidez-nous à traduire et à adapter nos solutions dans les langues maliennes, ou contribuez à nos corpus linguistiques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-maliba-ocre transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-maliba-ocre/10 text-maliba-ocre flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Documentation et recherche</h3>
                    <p className="text-gray-600">
                      Participez à la rédaction de documentation technique, d'articles de blog ou de papiers de recherche.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-maliba-ocre transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-gray-500/10 text-gray-500 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sensibilisation communautaire</h3>
                    <p className="text-gray-600">
                      Participez à nos événements et aidez-nous à sensibiliser sur l'importance de l'IA inclusive au Mali.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Avantages de rejoindre MALIBA-AI</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-maliba-ocre mr-2 flex-shrink-0" />
                    <span>Participer à un projet d'impact social dans le domaine de l'IA</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-maliba-ocre mr-2 flex-shrink-0" />
                    <span>Développer vos compétences et votre expérience en IA</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-maliba-ocre mr-2 flex-shrink-0" />
                    <span>Collaborer avec une communauté diversifiée d'experts et de passionnés</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-maliba-ocre mr-2 flex-shrink-0" />
                    <span>Accéder à des ressources et formations dans le domaine de l'IA</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-maliba-ocre mr-2 flex-shrink-0" />
                    <span>Contribuer au développement technologique du Mali</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-maliba-blue/5 p-8 rounded-xl border border-maliba-blue/20">
              <h2 className="text-2xl font-bold mb-4 text-maliba-blue">Formulaire de candidature</h2>
              <p className="text-gray-600 mb-6">
                Nous sommes ravis de votre intérêt à rejoindre MALIBA-AI ! Pour soumettre votre candidature, 
                veuillez remplir notre formulaire détaillé en cliquant sur le lien ci-dessous.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3SqXhNQX7d17321F7JcS_VsQT7CNmJdCE6Q0Hex_UWfVcqQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-maliba-blue text-white px-6 py-3 rounded-lg hover:bg-maliba-blue/90 transition-colors"
              >
                <span>Remplir le formulaire</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Foire aux questions"
            subtitle="Réponses aux questions fréquentes sur notre communauté"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Faut-il être un expert en IA pour contribuer ?</h3>
              <p className="text-gray-600">
                Non, MALIBA-AI accueille des contributeurs de tous niveaux. Que vous soyez expert en IA, 
                linguiste, traducteur ou simplement passionné par notre mission, vous pouvez apporter votre contribution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Comment se déroule la collaboration ?</h3>
              <p className="text-gray-600">
                Nous collaborons principalement en ligne via des plateformes comme GitHub, des forums de discussion 
                et des réunions virtuelles. Des rencontres en présentiel sont également organisées régulièrement à Bamako.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Est-ce un travail rémunéré ?</h3>
              <p className="text-gray-600">
                MALIBA-AI est principalement une initiative bénévole. Cependant, certains projets financés peuvent 
                offrir des opportunités rémunérées pour des contributions spécifiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Quel est le niveau d'engagement requis ?</h3>
              <p className="text-gray-600">
                L'engagement est flexible et dépend de votre disponibilité. Vous pouvez contribuer occasionnellement 
                ou régulièrement, selon votre emploi du temps et vos centres d'intérêt.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-maliba-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Rejoignez notre communauté en ligne
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suivez-nous sur les réseaux sociaux et rejoignez nos forums de discussion 
            pour rester informé de nos activités et échanger avec notre communauté.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/MALIBA-AI" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <span>Forum de discussion</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://github.com/MALIBA-AI" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <span>GitHub</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/maliba-ai/" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <span>LinkedIn</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://x.com/MalibaAi" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-md flex items-center transition-colors"
            >
              <span>Twitter</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
