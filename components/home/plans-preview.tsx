'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    description: 'Essential home care',
    features: ['Monthly Cleaning', 'Visual Inspection', 'Photo Reports', 'WhatsApp Updates'],
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
  },
];

export function PlansPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section ref={ref}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Choose Your <span className="text-gradient">Care Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Flexible plans designed for every homeowner's needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`relative p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'border-primary border-2 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent-gradient-to text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 font-semibold"
                >
                  <a
                    href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20the%20CareToHome%20Basic%20plan."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Admin
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/plans">View Details</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
