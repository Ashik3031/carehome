'use client'
import React, { useEffect, useState } from 'react';
import { FileText, Users, CreditCard, Bell, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const RentAutomationPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    phone: '',
    userType: 'homeowner'
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

  const features = [
    {
      icon: FileText,
      title: 'Upload Signed Agreement',
      description: 'Digitize your rental agreement and store it securely in one place.',
    },
    {
      icon: Users,
      title: 'Invite Your Tenant',
      description: 'Send a simple invitation link to your tenant to join the platform.',
    },
    {
      icon: CreditCard,
      title: 'Autopay Monthly Rent',
      description: 'Set up automatic monthly rent collection with multiple payment options.',
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Automatic reminders for both landlords and tenants before due dates.',
    },
  ];

  const benefits = {
    homeowners: [
      'Receive rent automatically every month',
      'Track payment history and receipts',
      'Digital agreement management',
      'Automatic late payment reminders',
      'Multiple payment method support',
      'Transparent transaction records',
    ],
    tenants: [
      'Never miss a rent payment',
      'Set up one-time autopay',
      'Instant payment confirmations',
      'Digital rent receipts',
      'Payment reminders before due date',
      'Secure and hassle-free',
    ],
  };

  const heroParallax = scrollY * 0.5;

  const handleSubmit = () => {
    console.log('Early access form submitted:', formData);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
          transform: translateY(-12px);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          border-color: #ffcc00;
          box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.1);
        }

        .pulse-badge {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')`,
            transform: `translateY(${heroParallax}px) scale(1.1)`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-transparent to-green-600/10" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-green-500/20 rounded-full blur-3xl float-delayed" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl pt-32">
          <div className="reveal mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-8 pulse-badge">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-400">Coming Soon</span>
            </div>
          </div>

          <div className="reveal mb-12">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              Rent <span className="text-gradient">Automation</span>
            </h1>
          </div>

          <div className="reveal max-w-2xl space-y-6">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
              Stress-free rent collection on autopilot.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              The easiest way for homeowners and tenants to manage monthly rent payments. Set it up once, and let automation handle the rest.
            </p>

            <div className="flex flex-wrap gap-6 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Automatic Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-gray-400">Zero Hassle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Always On Time</span>
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

      {/* HOW IT WORKS */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-xl text-gray-400">
                Four simple steps to automated rent collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`reveal stagger-${index + 1} card-hover p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 text-center relative overflow-hidden group`}
                  >
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center text-black font-black text-lg">
                      {index + 1}
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-green-600/5" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                Built for <span className="text-gradient">Everyone</span>
              </h2>
              <p className="text-xl text-gray-400">
                Whether you're a homeowner or tenant, rent automation makes life easier
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Homeowners */}
              <div className="reveal stagger-1 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-black">For Homeowners</h3>
                </div>

                <ul className="space-y-4">
                  {benefits.homeowners.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tenants */}
              <div className="reveal stagger-2 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-black">For Tenants</h3>
                </div>

                <ul className="space-y-4">
                  {benefits.tenants.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl float-delayed" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-8">
                <Bell className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-bold">Be the First to Know</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                Get <span className="text-gradient">Early Access</span>
              </h2>
              <p className="text-xl text-gray-400">
                Join our early access list and be among the first to experience hassle-free rent management
              </p>
            </div>

            <div className="reveal space-y-6 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
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
                <label className="block text-sm font-medium mb-2 text-gray-300">I am a</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({...formData, userType: 'homeowner'})}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                      formData.userType === 'homeowner'
                        ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                        : 'border-white/20 bg-black/50 text-gray-400 hover:border-white/40'
                    }`}
                  >
                    Homeowner
                  </button>
                  <button
                    onClick={() => setFormData({...formData, userType: 'tenant'})}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                      formData.userType === 'tenant'
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-white/20 bg-black/50 text-gray-400 hover:border-white/40'
                    }`}
                  >
                    Tenant
                  </button>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Request Early Access
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE HOME CARE CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/30 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="reveal max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Meanwhile, Explore Our <span className="text-gradient">Home Care</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Already managing properties in Kozhikode? Check out our professional home care plans
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
              >
                View Home Care
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full font-bold text-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                See Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentAutomationPage;