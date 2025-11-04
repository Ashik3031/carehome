'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    description: 'Essential home care',
    features: ['Monthly Cleaning', 'Visual Inspection', 'Photo Reports', 'WhatsApp Updates'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Standard',
    description: 'Complete home maintenance',
    features: [
      'Monthly Cleaning',
      'Visual Inspection',
      'Minor Maintenance',
      'Photo Reports',
      'Priority Support',
    ],
    popular: true,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  },
  {
    name: 'Premium',
    description: 'Full care package',
    features: [
      'Bi-weekly Cleaning',
      'Full Maintenance',
      'Pest Control',
      'AC Filter Check',
      'Detailed Reports',
      '24/7 Support',
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  },
];

export function PlansPreview() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with Standard (most popular)

  return (
    <div className="relative bg-white py-16 sm:py-24 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={plans[activeIndex].image}
                alt={plans[activeIndex].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-light text-black/40 uppercase tracking-wider">
                Choose Your Plan
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-black">
                Flexible plans for<br />
                <span className="font-normal">every need.</span>
              </h2>
            </div>

            {/* Plan Tabs */}
            <div className="flex gap-2 border-b border-black/10 pb-4">
              {plans.map((plan, index) => (
                <button
                  key={plan.name}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 text-sm font-light rounded-full transition-all ${
                    activeIndex === index
                      ? 'bg-black text-white'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Plan Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  {plans[activeIndex].popular && (
                    <span className="inline-block bg-black text-white text-xs font-normal px-3 py-1 rounded-full mb-3">
                      Most Popular
                    </span>
                  )}
                  <p className="text-sm text-black/50 font-light">
                    {plans[activeIndex].description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {plans[activeIndex].features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-5 w-5 text-black shrink-0 mt-0.5" />
                      <span className="text-sm font-light text-black/70">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-black text-white hover:bg-black/90 font-normal rounded-full h-11"
                  >
                    <a
                      href={`https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20the%20CareToHome%20${plans[activeIndex].name}%20plan.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Talk to Admin
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="font-normal rounded-full h-11 border-black/20 hover:bg-black/5"
                  >
                    <Link href="/plans">View Details</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}