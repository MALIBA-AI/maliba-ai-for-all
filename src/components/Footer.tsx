
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Logo className="mb-4" />
            <p className="mb-4 text-sm text-gray-600">
              MALIBA-AI est une initiative communautaire d'intelligence artificielle au Mali, 
              visant à résoudre les problèmes locaux tout en assurant l'inclusion de tous.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="#" className="text-gray-500 hover:text-maliba-ocre" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-maliba-ocre" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-maliba-ocre" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/MALIBA-AI" className="text-gray-500 hover:text-maliba-ocre" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://huggingface.co/MALIBA-AI" className="text-gray-500 hover:text-maliba-ocre" aria-label="Hugging Face">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-maliba-ocre">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-maliba-ocre">À propos</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-maliba-ocre">Projets</Link></li>
              <li><Link to="/publications" className="text-gray-600 hover:text-maliba-ocre">Publications</Link></li>
              <li><Link to="/join" className="text-gray-600 hover:text-maliba-ocre">Rejoignez-nous</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-maliba-ocre">Contact</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-heading font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-maliba-ocre">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-maliba-ocre">Livres blancs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-maliba-ocre">Articles de recherche</a></li>
              <li><a href="#" className="text-gray-600 hover:text-maliba-ocre">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-maliba-ocre">Forum</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-maliba-ocre" />
                <a href="mailto:contact@maliba-ai.org" className="text-gray-600 hover:text-maliba-ocre">
                  contact@maliba-ai.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-maliba-ocre" />
                <span className="text-gray-600">Bamako, Mali</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MALIBA-AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
