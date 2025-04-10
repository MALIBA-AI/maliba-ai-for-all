
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Publications', path: '/publications' },
  { name: 'Rejoignez-nous', path: '/join' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Language switcher div */}
        <div className="flex items-center gap-2">
          {/* <LanguageSwitcher /> */}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4 animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`nav-link p-2 ${location.pathname === item.path ? 'nav-link-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
