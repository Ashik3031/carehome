'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';
import {
  Sparkles,
  Wrench,
  Wind,
  Bug,
  Zap,
  Key,
  Camera,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Cleaning',
    description: 'Regular deep cleaning of your entire property',
  },
  {
    icon: Wrench,
    title: 'Minor Repairs',
    description: 'Quick fixes for leaks, doors, and small issues',
  },
  {
    icon: Wind,
    title: 'AC Filter Check',
    description: 'Regular maintenance for optimal cooling',
  },
  {
    icon: Bug,
    title: 'Pest Control',
    description: 'Preventive treatment to keep pests away',
  },
  {
    icon: Zap,
    title: 'Power & Water Check',
    description: 'Ensuring utilities are working properly',
  },
  {
    icon: Key,
    title: 'Key Handling',
    description: 'Secure access management for your property',
  },
  {
    icon: Camera,
    title: 'Photo Reports',
    description: 'Detailed visual documentation after each visit',
  },
  {
    icon: CheckCircle,
    title: 'Inspections',
    description: 'Regular property condition assessments',
  },
];

export function ServicesGrid() {
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
          Comprehensive <span className="text-gradient">Home Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Everything you need to keep your home in perfect condition
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
