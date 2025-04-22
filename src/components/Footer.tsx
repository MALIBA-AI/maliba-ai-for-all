import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo className="mb-2" showText={false} />
            <p className="text-sm text-gray-600">
              MALIBA-AI est une initiative communautaire d'intelligence artificielle au Mali, 
              visant à résoudre les problèmes locaux tout en assurant l'inclusion de tous.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/MALIBA-AI" className="text-gray-500 hover:text-maliba-ocre transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/MalibaAi" className="text-gray-500 hover:text-maliba-ocre transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/maliba-ai/" className="text-gray-500 hover:text-maliba-ocre transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/MALIBA-AI" className="text-gray-500 hover:text-maliba-ocre transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://huggingface.co/MALIBA-AI" className="text-gray-500 hover:text-maliba-ocre transition-colors" aria-label="Hugging Face">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-maliba-ocre transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-maliba-ocre transition-colors">À propos</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-maliba-ocre transition-colors">Projets</Link></li>
              <li><Link to="/publications" className="text-gray-600 hover:text-maliba-ocre transition-colors">Publications</Link></li>
              <li><Link to="/join" className="text-gray-600 hover:text-maliba-ocre transition-colors">Rejoignez-nous</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-maliba-ocre transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-maliba-ocre flex-shrink-0" />
                <a href="mailto:contact@maliba-ai.org" className="text-gray-600 hover:text-maliba-ocre transition-colors">
                  contact@maliba-ai.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-maliba-ocre flex-shrink-0" />
                <span className="text-gray-600">Bamako, Mali</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p> {new Date().getFullYear()} MALIBA-AI. Tous droits réservés..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
