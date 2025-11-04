'use client';

import { useState } from 'react';
import { X, Wind, Lightbulb, Frame, Armchair, Home, Droplets, DoorOpen, Wrench } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  frequency: string;
  icon: string;
  category: 'cleaning' | 'maintenance' | 'repair';
}

const faqs: FAQ[] = [
  {
    question: 'Can I customize a plan?',
    answer:
      'Absolutely! While we offer three standard plans, we understand every home is unique. Contact us to discuss your specific needs, and we can create a customized plan that fits your requirements perfectly.',
  },
  {
    question: 'How do I pause or cancel my subscription?',
    answer:
      "You can pause or cancel your subscription anytime with 7 days' notice. Simply contact us via WhatsApp or email, and we'll handle it immediately. No hidden fees or long-term commitments.",
  },
  {
    question: "What's included in maintenance?",
    answer:
      'Our maintenance includes minor repairs like fixing leaky taps, door adjustments, electrical switches, painting touch-ups, and similar small fixes. For major repairs, we provide estimates and coordinate with specialists.',
  },
  {
    question: 'How do you access my property?',
    answer:
      'You can provide keys through a trusted contact, or we can arrange secure key handling. All our team members are verified, and we maintain detailed logs of every property visit for complete transparency.',
  },
  {
    question: 'What areas in Kozhikode do you serve?',
    answer:
      'We currently serve most areas within Kozhikode city limits. Contact us with your property location, and we can confirm if we cover your area.',
  },
  {
    question: 'How do I receive updates?',
    answer:
      'After each visit, you receive photo reports and detailed updates via WhatsApp or email. You can see exactly what was done, any issues found, and recommendations for future maintenance.',
  },
];

const hotspots: Hotspot[] = [
  {
    id: 'ac',
    x: 82,
    y: 15,
    title: 'Air Conditioning',
    description: 'Filter cleaning, temperature checks, and efficiency monitoring to ensure optimal cooling and air quality.',
    frequency: 'Monthly',
    icon: 'wind',
    category: 'maintenance',
  },
  {
    id: 'lighting',
    x: 50,
    y: 12,
    title: 'Light Fixtures',
    description: 'Bulb replacement, fixture cleaning, and electrical connection checks for safe and bright lighting.',
    frequency: 'As Needed',
    icon: 'lightbulb',
    category: 'maintenance',
  },
  {
    id: 'window',
    x: 15,
    y: 35,
    title: 'Windows & Frames',
    description: 'Glass cleaning, frame wiping, track cleaning, and curtain dusting for crystal clear views.',
    frequency: 'Weekly',
    icon: 'frame',
    category: 'cleaning',
  },
  {
    id: 'furniture',
    x: 35,
    y: 65,
    title: 'Furniture Care',
    description: 'Dusting, polishing, upholstery cleaning, and minor repairs to keep your furniture looking new.',
    frequency: 'Weekly',
    icon: 'armchair',
    category: 'cleaning',
  },
  {
    id: 'floor',
    x: 50,
    y: 85,
    title: 'Flooring',
    description: 'Vacuuming, mopping, stain removal, and polish to maintain pristine floors throughout your home.',
    frequency: 'Twice Weekly',
    icon: 'home',
    category: 'cleaning',
  },
  {
    id: 'wall',
    x: 75,
    y: 50,
    title: 'Walls & Paint',
    description: 'Touch-up painting, crack filling, and wall cleaning to keep your walls fresh and well-maintained.',
    frequency: 'Quarterly',
    icon: 'droplets',
    category: 'repair',
  },
  {
    id: 'door',
    x: 88,
    y: 60,
    title: 'Doors & Hardware',
    description: 'Hinge oiling, lock maintenance, handle tightening, and door alignment adjustments.',
    frequency: 'Monthly',
    icon: 'dooropen',
    category: 'maintenance',
  },
  {
    id: 'decor',
    x: 65,
    y: 40,
    title: 'Decor & Fixtures',
    description: 'Dusting decorative items, artwork cleaning, and fixture polishing to maintain your home\'s aesthetic appeal.',
    frequency: 'Weekly',
    icon: 'wrench',
    category: 'cleaning',
  },
];

// Replace this URL with your own professional home image
const ROOM_IMAGE_URL = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cleaning':
        return 'bg-blue-500';
      case 'maintenance':
        return 'bg-green-500';
      case 'repair':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'cleaning':
        return 'border-blue-500';
      case 'maintenance':
        return 'border-green-500';
      case 'repair':
        return 'border-orange-500';
      default:
        return 'border-gray-500';
    }
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" };
    switch (iconName) {
      case 'wind':
        return <Wind {...iconProps} />;
      case 'lightbulb':
        return <Lightbulb {...iconProps} />;
      case 'frame':
        return <Frame {...iconProps} />;
      case 'armchair':
        return <Armchair {...iconProps} />;
      case 'home':
        return <Home {...iconProps} />;
      case 'droplets':
        return <Droplets {...iconProps} />;
      case 'dooropen':
        return <DoorOpen {...iconProps} />;
      case 'wrench':
        return <Wrench {...iconProps} />;
      default:
        return <Home {...iconProps} />;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left font-semibold py-5 flex justify-between items-center gap-4"
                >
                  <span>{faq.question}</span>
                  <span
                    className="text-2xl text-slate-400 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ↓
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    height: openIndex === index ? 'auto' : '0',
                    opacity: openIndex === index ? '1' : '0',
                  }}
                >
                  <p className="text-slate-600 leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Real Image Room Tour */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
               
                <p className="text-sm text-slate-600">
                  Click on the pulsing dots to discover what we maintain in your home
                </p>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-slate-600">Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-600">Maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-slate-600">Repairs</span>
                </div>
              </div>

              {/* Real Image with Hotspots */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ paddingBottom: '75%' }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${ROOM_IMAGE_URL})`,
                    filter: selectedHotspot ? 'brightness(0.6)' : 'brightness(1)',
                    transition: 'filter 0.3s ease'
                  }}
                />

                {/* Semi-transparent overlay for better hotspot visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Interactive Hotspots */}
                {hotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    onClick={() => setSelectedHotspot(hotspot)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                    }}
                  >
                    {/* Pulsing Ring Animation */}
                    <span className={`absolute inset-0 rounded-full ${getCategoryColor(hotspot.category)} opacity-75 animate-ping`}></span>
                    
                    {/* Outer Ring with white border for visibility */}
                    <span className={`relative flex h-10 w-10 items-center justify-center rounded-full ${getCategoryColor(hotspot.category)} shadow-lg ring-4 ring-white/50 group-hover:scale-125 transition-transform duration-200`}>
                      {/* Inner Dot */}
                      <span className="h-5 w-5 rounded-full bg-white shadow-inner"></span>
                    </span>
                  </button>
                ))}

                {/* Info Card Modal */}
                {selectedHotspot && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center p-4 z-20"
                    onClick={() => setSelectedHotspot(null)}
                  >
                    <div 
                      className={`bg-white rounded-2xl shadow-2xl max-w-sm w-full border-4 ${getCategoryBorder(selectedHotspot.category)} animate-in slide-in-from-bottom-4 duration-300`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${getCategoryColor(selectedHotspot.category)} text-white shadow-lg`}>
                            {getIcon(selectedHotspot.icon)}
                          </div>
                          <button
                            onClick={() => setSelectedHotspot(null)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-2 text-slate-900">{selectedHotspot.title}</h4>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {selectedHotspot.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Frequency</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(selectedHotspot.category)} shadow`}>
                            {selectedHotspot.frequency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-center text-blue-700">
                  💡 <strong>Pro Tip:</strong> Click any pulsing dot to see detailed service information
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}