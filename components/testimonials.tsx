'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
}

interface Stat {
  label: string;
  value: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Manager',
      content: 'Amazing communication and excellent social media management skills. My engagement rates have tripled!',
      stars: 5,
    },
    {
      name: 'Ahmed Hassan',
      role: 'Startup Founder',
      content: 'Professional branding and high-quality content strategy. Md really understands the digital market.',
      stars: 5,
    },
    {
      name: 'Lisa Chen',
      role: 'Marketing Director',
      content: 'Helped improve our online engagement and reach significantly. Highly recommend his services!',
      stars: 5,
    },
  ];

  const stats: Stat[] = [
    { label: 'Happy Clients', value: '50+' },
    { label: 'Projects Done', value: '150+' },
    { label: 'Avg. Engagement Growth', value: '250%' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Say</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from businesses I've worked with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 text-center fade-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
