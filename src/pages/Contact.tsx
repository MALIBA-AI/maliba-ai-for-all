import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="relative bg-maliba-blue/95 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/70">
              Une question, une suggestion ou une proposition de partenariat ? 
              N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Nos coordonnées"
            subtitle="Plusieurs façons de nous joindre"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            
            {/* Email */}
            <div className="flex items-start p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="h-12 w-12 rounded-lg bg-maliba-blue/10 text-maliba-blue flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-1">Pour les questions générales/partenariats:</p>
                <a href="mailto:contact@maliba-ai.org" className="text-maliba-blue hover:underline">
                contact@maliba-ai.org
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="h-12 w-12 rounded-lg bg-maliba-green/10 text-maliba-green flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                <p className="text-gray-600 mb-1">Bureau MALIBA-AI :</p>
                <a href="tel:+22363387220" className="text-maliba-blue hover:underline">
                  +223 63 38 72 20
                </a>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex items-start p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="h-12 w-12 rounded-lg bg-maliba-ocre/10 text-maliba-ocre flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="text-gray-600">
                  MALIBA-AI<br />
                  {/* Hamdallaye ACI 2000<br /> */}
                  Bamako, Mali
                </p>
              </div>
            </div>

            {/* Forum */}
            <div className="flex items-start p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="h-12 w-12 rounded-lg bg-gray-500/10 text-gray-500 flex items-center justify-center mr-4 flex-shrink-0">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Forum communautaire</h3>
                <p className="text-gray-600 mb-2">
                  Rejoignez notre forum communautaire pour discuter directement avec notre équipe et les autres membres :
                </p>
                <a href="#" className="text-maliba-blue hover:underline">forum.maliba-ai.org</a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
            <p className="text-gray-600">
              Notre bureau est ouvert du lundi au vendredi, de 9h à 17h.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Questions fréquemment posées"
            subtitle="Réponses aux questions les plus courantes"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Comment puis-je devenir membre de MALIBA-AI ?</h3>
              <p className="text-gray-600">
                Vous pouvez vous inscrire via notre formulaire d'adhésion sur la page "Rejoignez-nous", 
                ou nous contacter directement par email.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Travaillez-vous uniquement sur les langues maliennes ? </h3>
              <p className="text-gray-600">
                Notre priorité est de développer des technologies pour les langues maliennes, mais nous sommes également ouverts à des collaborations avec d'autres communautés africaines partageant les mêmes enjeux linguistiques et culturels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Comment proposer un partenariat ?</h3>
              <p className="text-gray-600">
                Pour proposer un partenariat, envoyez-nous un email détaillant votre proposition à 
                partenariat@maliba-ai.org ou utilisez notre formulaire de contact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Les solutions MALIBA-AI sont-elles payantes ?</h3>
              <p className="text-gray-600">
                Nos solutions sont open source et gratuites. Pour les services spécifiques 
                ou personnalisés, veuillez nous contacter pour en discuter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
