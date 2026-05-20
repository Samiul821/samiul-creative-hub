'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

interface NavLink {
  label: string;
  id: string;
}

export default function Navbar({ isScrolled }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (id: string): void => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavLink[] = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass neon-glow'
          : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary neon-glow px-4 py-2 rounded-lg">
          Samiul&apos;s Creative Hub
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 neon-glow font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 neon-glow font-semibold text-center w-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
