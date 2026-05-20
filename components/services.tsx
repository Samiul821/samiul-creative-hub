'use client';

import { LucideIcon, Share2, BarChart3, Palette, Sparkles } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export default function Services(): JSX.Element {
  const services: Service[] = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Daily content strategy, engagement growth, and page optimization',
      points: ['Daily content strategy', 'Engagement growth', 'Page optimization'],
    },
    {
      icon: BarChart3,
      title: 'Facebook Ads',
      description: 'Targeted campaigns, lead generation, and conversion optimization',
      points: ['Targeted campaigns', 'Lead generation', 'Conversion optimization'],
    },
    {
      icon: Palette,
      title: 'Content Creation',
      description: 'Reels strategy, creative post design, and brand storytelling',
      points: ['Reels strategy', 'Creative post design', 'Brand storytelling'],
    },
    {
      icon: Sparkles,
      title: 'Digital Branding',
      description: 'Brand identity, online presence improvement, and audience trust building',
      points: ['Brand identity', 'Online presence', 'Audience trust'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions to help your brand grow and succeed in the digital landscape
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass glass-hover p-8 rounded-2xl group fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:neon-pulse transition-all duration-300">
                  <Icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
