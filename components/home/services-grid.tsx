'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    description: 'Regular deep cleaning',
  },
  {
    icon: Wrench,
    title: 'Minor Repairs',
    description: 'Quick fixes & maintenance',
  },
  {
    icon: Wind,
    title: 'AC Filter Check',
    description: 'Regular AC maintenance',
  },
  {
    icon: Bug,
    title: 'Pest Control',
    description: 'Preventive treatment',
  },
  {
    icon: Zap,
    title: 'Power Check',
    description: 'Utility monitoring',
  },
  {
    icon: Key,
    title: 'Key Handling',
    description: 'Secure access management',
  },
  {
    icon: Camera,
    title: 'Photo Reports',
    description: 'Visual documentation',
  },
  {
    icon: CheckCircle,
    title: 'Inspections',
    description: 'Property assessments',
  },
];

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={ref} className="relative bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-black leading-tight max-w-2xl"
          >
            Our Comprehensive Home<br />
            <span className="font-normal">Care Services</span>
          </motion.h2>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-black/10 hover:bg-black/5 transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-black/10 hover:bg-black/5 transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex-none w-[280px] snap-start"
              >
                <div className="relative h-[320px] bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl p-8 text-white flex flex-col justify-between">
                  {/* Icon */}
                  <div>
                    <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-auto">
                      <Icon className="w-7 h-7 text-teal-800" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-normal mb-1">{service.title}</h3>
                    <p className="text-sm text-white/70 font-light">{service.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-8 right-8 opacity-20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}