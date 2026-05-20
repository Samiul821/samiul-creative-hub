"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

interface NavLink {
  label: string;
  id: string;
}

export default function Navbar({ isScrolled }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ✅ Default Home active
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navLinks: NavLink[] = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  // ✅ Smooth scroll function
  const scrollToSection = (id: string): void => {
    setIsOpen(false);

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Scroll spy (active section detect)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ✅ Ensure Home active by default
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      setActiveSection("hero");
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass neon-glow"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-primary neon-glow px-4 py-2 rounded-lg">
          Samiul&apos;s Creative Hub
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative group"
            >
              {/* Label */}
              <span
                className={`transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/80 group-hover:text-primary"
                }`}
              >
                {link.label}
              </span>

              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
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
                className={`text-left transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 bg-primary text-white rounded-lg text-center hover:bg-secondary transition-colors duration-300 neon-glow font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}