'use client'
import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Check, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses for all your queries',
      action: 'Chat with us',
      href: 'https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans.',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+91 9000000000',
      action: 'Call us',
      href: 'tel:+919000000000',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'hello@example.com',
      action: 'Email us',
      href: 'mailto:hello@example.com',
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Kozhikode, Kerala, India',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  const whyChoose = [
    'Professional, vetted team members',
    'Photo reports after every visit',
    'Flexible plans with no long-term commitment',
    'Transparent pricing and communication',
    'Local expertise in Kozhikode',
  ];

  const heroParallax = scrollY * 0.5;

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .float { animation: float 6s ease-in-out infinite; }
        .float-delayed { animation: float 7s ease-in-out infinite; animation-delay: 1s; }

        .text-gradient {
          background: linear-gradient(135deg, #ffcc00 0%, #00bf63 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          border-color: #ffcc00;
          box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.1);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')`,
            transform: `translateY(${heroParallax}px) scale(1.1)`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-transparent to-green-600/10" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-3xl float-delayed" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl pt-32">
          <div className="reveal mb-12">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              Let's <span className="text-gradient">Talk</span>
            </h1>
          </div>

          <div className="reveal max-w-2xl space-y-6">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
              Making home care effortless, one conversation at a time.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Have questions? Need a quote? We're here to help. Reach out through your preferred channel and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-wrap gap-6 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-gray-400">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">No Obligation</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-12 float">
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-gray-400">
                Choose your preferred way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    className={`reveal stagger-${index + 1} card-hover block p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 text-center group`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <span className="text-yellow-400 font-semibold text-sm">{method.action} →</span>
                  </a>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officeInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className={`reveal stagger-${index + 4} flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">{info.title}</h3>
                      <p className="text-gray-400">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-green-600/5" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            
            {/* FORM CTA */}
            <div className="reveal space-y-8">
              <div>
                <h2 className="text-5xl sm:text-6xl font-black mb-6">
                  Send a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  For urgent matters, please use WhatsApp.
                </p>
              </div>

              <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 input-focus outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 input-focus outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 input-focus outline-none"
                    placeholder="+91 9000000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 input-focus outline-none resize-none"
                    placeholder="Tell us about your home care needs..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* SIDEBAR INFO */}
            <div className="reveal space-y-8 lg:sticky lg:top-24">
              
              {/* Why Choose Us */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-bold mb-6">Why Choose CareToHome?</h3>
                <ul className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-green-500/10 backdrop-blur-sm border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-3">Need Help Choosing?</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Not sure which plan is right for you? Our team can assess your property and recommend the perfect care plan.
                </p>
                <a
                  href="https://wa.me/919000000000?text=Hi%2C%20I%20need%20help%20choosing%20a%20plan."
                  className="block w-full py-3 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-center hover:scale-105 transition-all duration-300"
                >
                  Talk to Admin
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <p className="text-gray-400 font-semibold">Kozhikode, Kerala</p>
                  <p className="text-sm text-gray-500 mt-2">Serving homes across the city</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/30 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="reveal max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Your Home <span className="text-gradient">Deserves</span> the Best
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Let us take care of it while you focus on what matters
            </p>
            
            <div className="pt-8">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
              >
                View Our Plans
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;