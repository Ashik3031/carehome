'use client'
import React, { useEffect, useState } from 'react';
import { Check, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const PlansPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const plans = [
    {
      name: 'Basic',
      description: 'Essential home care',
      features: [
        'Monthly deep cleaning',
        'Visual property inspection',
        'Photo reports after each visit',
        'WhatsApp updates',
        'Basic power & water check',
        'Key handling',
      ],
    },
    {
      name: 'Standard',
      description: 'Complete home maintenance',
      popular: true,
      features: [
        'Monthly deep cleaning',
        'Visual property inspection',
        'Minor maintenance & repairs',
        'Photo reports after each visit',
        'WhatsApp & email updates',
        'Basic power & water check',
        'Key handling',
        'Priority support',
      ],
    },
    {
      name: 'Premium',
      description: 'Full care package',
      features: [
        'Bi-weekly deep cleaning',
        'Comprehensive property inspection',
        'Full maintenance & repairs',
        'Quarterly pest control',
        'AC filter check & cleaning',
        'Detailed photo & video reports',
        'WhatsApp, email & call updates',
        'Power, water & gas checks',
        'Secure key management',
        '24/7 priority support',
        'Emergency response',
      ],
    },
  ];

  const addOns = [
    'Deep cleaning (quarterly or on-demand)',
    'Comprehensive pest control schedule',
    'AC servicing and maintenance',
    'Garden and landscaping care',
    'Pool cleaning and maintenance',
    'Additional emergency visits',
  ];

  const howItWorksSteps = [
    'Choose your plan and submit an inquiry',
    'We schedule a property assessment',
    'You provide access details and special instructions',
    'We begin regular scheduled visits',
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan anytime. Contact us at least 7 days before your next scheduled visit to make changes.',
    },
    {
      question: 'What happens if I need additional services?',
      answer: "You can add services from our add-ons list anytime. We'll provide a quote and schedule them based on your needs.",
    },
    {
      question: 'How does billing work?',
      answer: "We bill monthly in advance. You'll receive an invoice via email, and payment can be made through bank transfer or UPI.",
    },
    {
      question: 'Can I customize a plan for my needs?',
      answer: 'Absolutely! If none of our standard plans fit perfectly, we can create a custom plan tailored to your specific requirements.',
    },
  ];

  const heroParallax = scrollY * 0.5;

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
          transform: translateY(-12px);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .glow-yellow {
          box-shadow: 0 0 40px rgba(255, 204, 0, 0.3);
        }

        .glow-green {
          box-shadow: 0 0 40px rgba(0, 191, 99, 0.3);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80')`,
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
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
          </div>

          <div className="reveal max-w-2xl space-y-6">
            <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
              Flexible plans for every home.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              No long-term commitments, cancel or pause anytime. We believe in earning your trust every month, not locking you into contracts.
            </p>

            <div className="flex flex-wrap gap-6 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Flexible Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-gray-400">No Lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">Cancel Anytime</span>
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

      {/* PLANS SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`reveal stagger-${index + 1} card-hover relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border ${
                  plan.popular 
                    ? 'border-yellow-500/50 glow-yellow' 
                    : 'border-white/10 hover:border-yellow-500/30'
                } overflow-hidden group cursor-pointer`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-green-500 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-4xl font-black mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-lg">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <button className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 font-semibold">
                    Request This Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-green-600/5" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                Optional <span className="text-gradient">Add-Ons</span>
              </h2>
              <p className="text-xl text-gray-400">
                Enhance your plan with additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className={`reveal stagger-${index + 1} flex items-start gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300`}
                >
                  <Check className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{addOn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl float-delayed" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className={`reveal stagger-${index + 1} text-center`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-green-500 flex items-center justify-center mx-auto mb-4 text-2xl font-black text-black glow-yellow">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`reveal stagger-${index + 1} rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-green-900/30 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="reveal max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Choose your plan and let us take care of your home
            </p>
            
            <div className="pt-8">
              <button className="group px-12 py-5 bg-gradient-to-r from-yellow-500 to-green-500 text-black rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
                Request a Plan
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;