"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export default function Contact(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      // 1️⃣ Send to API (Email)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      // 2️⃣ WhatsApp open
      const phone = "8801330624539";

      const whatsappMessage = `Name: ${data.name}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0AMessage: ${data.message}`;

      const whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;

      window.open(whatsappURL, "_blank");

      // 3️⃣ UI update
      setSubmitted(true);
      reset();

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Message send failed!");
    }
  };

  const contactChannels: ContactChannel[] = [
    {
      icon: Mail,
      label: "Email",
      value: "support.samiul.islam@gmail.com",
      href: "mailto:support.samiul.islam@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "Facebook Messenger",
      value: "Message on Facebook",
      href: "https://www.facebook.com/md.samiul.islam.work",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/8801330624539",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Together
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to grow your brand? Get in touch and let's discuss your goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* FORM */}
          <div className="glass glass-hover rounded-2xl p-8 fade-up">
            <h3 className="text-2xl font-bold mb-6">Send me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                Message sent successfully! 🎉
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-input border rounded-lg"
              />

              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-input border rounded-lg"
              />

              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-input border rounded-lg"
              />

              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-input border rounded-lg"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <a
                  key={index}
                  href={channel.href}
                  target="_blank"
                  className="glass glass-hover rounded-2xl p-6 flex items-center gap-4"
                >
                  <Icon className="text-primary" size={24} />
                  <div>
                    <h4 className="font-bold">{channel.label}</h4>
                    <p className="text-sm text-foreground/70">
                      {channel.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
