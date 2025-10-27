'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/ui/section';

const frames = [
  {
    title: 'Managing a home from another country is stressful.',
    description: 'Coordinating cleaners, repairs, and inspections from abroad is overwhelming.',
  },
  {
    title: 'Coordinating maintenance remotely is messy.',
    description: 'Phone calls, payments, scheduling—it all takes too much time and energy.',
  },
  {
    title: 'Subscribe once—we handle monthly care & reports.',
    description: 'One simple plan. Regular visits. Photo reports. Peace of mind.',
  },
];

export function ProblemSolution() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section ref={ref} dark className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-24">
          {frames.map((frame, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {frame.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                {frame.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
