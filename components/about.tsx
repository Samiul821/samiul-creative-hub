'use client';

import { LucideIcon, Lightbulb, Target, Zap } from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function About() {
  const skills: Skill[] = [
    {
      icon: Lightbulb,
      title: 'Creative Strategy',
      description: 'Content planning and audience growth strategies that engage and convert',
    },
    {
      icon: Target,
      title: 'Performance Marketing',
      description: 'Facebook Ads campaigns and conversion optimization for maximum ROI',
    },
    {
      icon: Zap,
      title: 'Digital Branding',
      description: 'Building modern online presence and audience trust through authentic storytelling',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass glass-hover p-8 rounded-2xl fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg neon-glow">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="glass p-8 sm:p-12 rounded-2xl fade-up">
          <h3 className="text-2xl font-bold mb-6">Full Service Digital Solutions</h3>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I'm Md Samiul Islam, a passionate Social Media Manager and Digital Marketer helping businesses build strong online presence through creative branding, engaging content, and performance-driven advertising strategies.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I specialize in content planning, audience growth, Facebook Ads campaigns, and modern digital branding. With a data-driven approach and creative mindset, I help brands connect with their target audience and achieve measurable results in the digital space.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
