import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-spruce rounded-lg flex items-center justify-center text-white font-bold text-xl">
            CR
          </div>
          <span className={`text-xl font-bold tracking-wide ${isScrolled ? 'text-charcoal' : 'text-charcoal lg:text-white'}`}>
            Cahill Renewables
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-banana transition-colors ${isScrolled ? 'text-charcoal' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'secondary'}>
            Book A Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-charcoal' : 'text-charcoal lg:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-charcoal font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button fullWidth onClick={() => setMobileMenuOpen(false)}>
            Book A Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};