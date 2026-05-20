'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, LucideIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactChannels: ContactChannel[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support.samiul.islam@gmail.com',
      href: 'mailto:support.samiul.islam@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'Facebook Messenger',
      value: 'Message on Facebook',
      href: 'https://www.facebook.com/md.samiul.islam.work',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/YOUR_WHATSAPP_NUMBER',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Together</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to grow your brand? Get in touch and let's discuss your goals
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass glass-hover rounded-2xl p-8 fade-up">
            <h3 className="text-2xl font-bold mb-6">Send me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Channels */}
          <div className="flex flex-col gap-6">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <a
                  key={index}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-2xl p-6 flex items-start gap-4 group fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:neon-pulse transition-all duration-300 flex-shrink-0">
                    <Icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-foreground mb-1">{channel.label}</h4>
                    <p className="text-foreground/70 text-sm">{channel.value}</p>
                  </div>
                  <ArrowRight className="text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-1" size={20} />
                </a>
              );
            })}

            {/* Quick Stats */}
            <div className="glass glass-hover rounded-2xl p-6 mt-6 fade-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-bold text-foreground mb-4">Why Work With Me?</h4>
              <ul className="space-y-3">
                {[
                  'Quick response time',
                  'Proven track record',
                  'Results-driven approach',
                  'Custom solutions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground/70">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
