'use client';

import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  color: string;
}

export default function Portfolio(): JSX.Element {
  const projects: Project[] = [
    {
      title: 'Instagram Growth Campaign',
      description: 'Achieved high engagement growth using strategic content planning and consistent posting strategy.',
      tags: ['Instagram', 'Content Strategy', 'Growth'],
      category: 'Social Media',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Facebook Ads Campaign',
      description: 'Optimized ad performance for better reach and conversions through A/B testing and audience targeting.',
      tags: ['Facebook Ads', 'Performance', 'ROI'],
      category: 'Advertising',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Personal Brand Strategy',
      description: 'Built a modern online presence for creators and businesses with authentic storytelling and visual identity.',
      tags: ['Branding', 'Strategy', 'Identity'],
      category: 'Branding',
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Content Creation Showcase',
      description: 'Creative social media designs and marketing visuals that capture brand essence and engage audiences.',
      tags: ['Design', 'Content', 'Visual'],
      category: 'Design',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing successful campaigns and strategies that delivered real results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} mb-4`}>
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 ml-4" size={24} />
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <button className="flex items-center gap-2 text-primary font-semibold group/btn hover:gap-3 transition-all">
                  View Project
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
