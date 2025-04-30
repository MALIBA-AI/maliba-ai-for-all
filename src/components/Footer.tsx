import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

// Ajout d'une constante pour la couleur secondaire d'hover (ocre)
const HOVER_COLOR = '#FFD83A';

const Footer = () => {
  return (
    <footer className="border-t" style={{ backgroundColor: '#0E273B', color: '#fff' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo className="mb-2" showText={false} />
            <p className="text-sm" style={{ color: '#fff' }}>
              MALIBA-AI est une initiative communautaire d'intelligence artificielle au Mali, 
              visant à résoudre les problèmes locaux tout en assurant l'inclusion de tous.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/MALIBA-AI" className="footer-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/MalibaAi" className="footer-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/maliba-ai/" className="footer-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/MALIBA-AI" className="footer-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://huggingface.co/MALIBA-AI" className="footer-link" aria-label="Hugging Face">
                <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg" style={{ color: '#fff' }}>Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/about" className="footer-link">À propos</Link></li>
              <li><Link to="/projects" className="footer-link">Projets</Link></li>
              <li><Link to="/publications" className="footer-link">Publications</Link></li>
              <li><Link to="/join" className="footer-link">Rejoignez-nous</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg" style={{ color: '#fff' }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-maliba-ocre flex-shrink-0" />
                <a href="mailto:contact@maliba-ai.org" className="footer-link">
                  contact@maliba-ai.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-maliba-ocre flex-shrink-0" />
                <span style={{ color: '#fff' }}>Bamako, Mali</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
          <p> {new Date().getFullYear()} MALIBA-AI. Tous droits réservés..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
