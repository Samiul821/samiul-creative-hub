"use client";

import { useState, useEffect } from "react";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

import type { IconType } from "react-icons";
import Image from "next/image";

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export default function Hero(): JSX.Element {
  const roles: string[] = [
    "Social Media Manager",
    "Digital Marketer",
    "Content Creator",
    "Ads Specialist",
  ];
  const [currentRole, setCurrentRole] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      href: "mailto:support.samiul.islam@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Helping Brands Grow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Through Creative Strategy
            </span>
          </h1>

          <div className="h-12 mb-8 flex items-center">
            <p className="text-xl text-secondary font-semibold">
              {roles[currentRole]}
            </p>
          </div>

          <p className="text-lg text-foreground/80 mb-8 max-w-xl leading-relaxed">
            I'm a passionate Social Media Manager and Digital Marketer helping
            businesses build strong online presence through creative branding,
            engaging content, and performance-driven advertising strategies.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="glass glass-hover px-8 py-4 rounded-xl font-semibold text-white text-lg flex items-center justify-center gap-2 group">
              Hire Me
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-xl font-semibold text-primary border-2 border-primary hover:bg-primary/10 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>

          {/* Social */}
               <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover p-3 rounded-lg text-primary hover:text-secondary transition-colors float"
                  title={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
          <div className="flex-1 slide-in-right">
          <div className="relative w-full max-w-md mx-auto">
            <div className="glass glass-hover rounded-3xl overflow-hidden neon-pulse">
              <Image
                src="/portfolio.jpeg"
                alt="Md Samiul Islam"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl transform translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
