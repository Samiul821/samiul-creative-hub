"use client";

import { IconType } from "react-icons";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
} from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

interface QuickLink {
  label: string;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ✅ Smart email handler
  const handleEmailClick = () => {
    const email = "support.samiul.islam@gmail.com";

    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `mailto:${email}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    window.open(url, "_blank");
  };

  const socialLinks: SocialLink[] = [
    {
      icon: CiFacebook,
      href: "https://www.facebook.com/md.samiul.islam.work",
      label: "Facebook",
    },
    {
      icon: CiInstagram,
      href: "https://www.instagram.com/md.samiul.islam.official/",
      label: "Instagram",
    },
    {
      icon: CiLinkedin,
      href: "https://www.linkedin.com/in/md-samiul-islam890",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "#",
      label: "Email",
    },
  ];

  const quickLinks: QuickLink[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background/80 border-t border-border backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary neon-glow px-4 py-2 rounded-lg w-fit mb-4">
              MSI
            </div>
            <p className="text-foreground/70 mb-6">
              Social Media Manager & Digital Marketer helping brands grow
              through creative strategy.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                // ✅ Email special click
                if (social.label === "Email") {
                  return (
                    <button
                      key={social.label}
                      onClick={handleEmailClick}
                      className="p-2 glass glass-hover rounded-lg text-primary hover:text-secondary transition-colors"
                      title={social.label}
                    >
                      <Icon size={20} />
                    </button>
                  );
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass glass-hover rounded-lg text-primary hover:text-secondary transition-colors"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get In Touch</h4>

            <p className="text-foreground/70 mb-3">
              <span className="font-semibold text-foreground">Email:</span>
              <br />
              <button
                onClick={handleEmailClick}
                className="hover:text-primary transition-colors text-left"
              >
                support.samiul.islam@gmail.com
              </button>
            </p>

            <p className="text-foreground/70">
              <span className="font-semibold text-foreground">Based in:</span>
              <br />
              Bangladesh
            </p>
          </div>
        </div>

        <div className="border-t border-border mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            Made with ❤️ by Md Samiul Islam
          </p>
          <p className="text-foreground/60 text-sm">
            © {currentYear} Md Samiul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}