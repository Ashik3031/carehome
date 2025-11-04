'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Users, Clock, Award, CheckCircle, MapPin, ArrowRight, Sparkles, Home, TrendingUp, Heart, Star, Zap } from 'lucide-react';

const InteractiveAboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

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

  const values = [
    { icon: Shield, title: 'Reliability', description: 'Consistent, dependable service you can count on, month after month.', color: 'from-yellow-500 to-yellow-400' },
    { icon: Users, title: 'Vetted Professionals', description: 'Every team member is carefully verified and trained.', color: 'from-green-500 to-green-400' },
    { icon: Clock, title: 'Timely Service', description: 'Scheduled visits that happen exactly when promised.', color: 'from-yellow-500 to-green-400' },
    { icon: Award, title: 'Quality Assurance', description: 'Photo reports and documentation for complete transparency.', color: 'from-green-500 to-yellow-400' },
  ];

  const whyUs = [
    'Local expertise in Kozhikode property management',
    'Monthly photo reports after every visit',
    'Direct WhatsApp communication with admin',
    'Flexible plans with no long-term lock-in',
    'Secure key handling and property access',
    'Verified and trusted service professionals',
  ];

  const timeline = [
    { year: '2025', icon: Home, title: 'CareToHome Founded', description: 'Started serving homeowners in Kozhikode with professional home care services.' },
    { year: '2025', icon: TrendingUp, title: 'Growing Customer Base', description: 'Helping homeowners across India and abroad manage their Kozhikode properties.' },
    { year: 'Soon', icon: Sparkles, title: 'Rent Automation', description: 'Launching automated rent collection platform for landlords and tenants.' },
  ];

  const stats = [
    { icon: Home, number: '500+', label: 'Homes Managed' },
    { icon: Users, number: '98%', label: 'Client Satisfaction' },
    { icon: Star, number: '50+', label: 'Verified Professionals' },
    { icon: Heart, number: '24/7', label: 'Support Available' },
  ];

  const heroParallax = scrollY * 0.5;

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
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

        .glow-effect {
          box-shadow: 0 0 60px rgba(255, 204, 0, 0.3);
        }

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
          transform: translateY(-12px) scale(1.02);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .gradient-border {
          position: relative;
          background: linear-gradient(to right, #667eea, #764ba2);
          padding: 2px;
          border-radius: 1.5rem;
        }

        .gradient-border-inner {
          background: black;
          border-radius: 1.4rem;
          padding: 2rem;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
            transform: `translateY(${heroParallax}px) scale(1.1)`,
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-3xl float-delayed" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-4xl pt-32">
          <div className="reveal mb-16">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              Care<span className="text-gradient">To</span>Home
            </h1>
          </div>

          {/* Company Description */}
          <div className="reveal max-w-2xl space-y-8">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
              Your peace of mind, delivered monthly.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              We understand the anxiety of managing a home from hundreds or thousands of miles away. 
              CareToHome bridges that gap, offering comprehensive property care services in Kozhikode 
              that let you focus on your life abroad while we ensure your home stays secure, maintained, 
              and ready for your return.
            </p>

            <div className="flex flex-wrap gap-6 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Professional Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-gray-400">Complete Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Trusted Worldwide</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-12 float">
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`reveal stagger-${index + 1} text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300`}
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
                  <div className="text-4xl font-black mb-2 text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-green-600/5" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on trust, transparency, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`reveal stagger-${index + 1} card-hover group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 cursor-pointer overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="relative text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="relative text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div className="reveal relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
                  alt="Modern home"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg font-semibold">Kozhikode, Kerala</span>
                  </div>
                  <p className="text-gray-300">Professional home care services</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="reveal">
                <h2 className="text-5xl sm:text-6xl font-black mb-6">
                  Why Choose <span className="text-gradient">Us?</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  We're not just a service—we're your trusted partner in protecting what matters most.
                </p>
              </div>

              <ul className="space-y-4">
                {whyUs.map((item, index) => (
                  <li 
                    key={index} 
                    className={`reveal stagger-${index + 1} flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32 bg-gradient-to-b from-black via-green-950/10 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl float-delayed" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Building the future of home management, one home at a time</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`reveal flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center relative glow-effect">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 transition-all duration-500 group cursor-pointer card-hover">
                    <div className="text-yellow-400 font-bold mb-2 text-sm uppercase tracking-wider">{item.year}</div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-gradient transition-all">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/30 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="reveal max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Ready for <span className="text-gradient">Stress-Free</span> Home Care?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Join homeowners across India and abroad who trust CareToHome with their properties
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group px-12 py-5 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3">
                View Our Plans
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full font-bold text-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveAboutPage;