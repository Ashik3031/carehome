'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Nair',
    location: 'Living in Dubai',
    text: "CareToHome has been a lifesaver! I can manage my Kozhikode home from Dubai without any stress. The photo reports give me complete peace of mind.",
    rating: 5,
  },
  {
    name: 'Rahul Menon',
    location: 'Living in Bangalore',
    text: "Professional service and excellent communication. They handle everything from cleaning to minor repairs. Highly recommend for anyone living away from home.",
    rating: 5,
  },
  {
    name: 'Anjali Kumar',
    location: 'Living in USA',
    text: "Managing my property from the US was impossible until I found CareToHome. They're reliable, transparent, and truly care about maintaining my home.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section ref={ref} className="bg-secondary/30">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary"
        >
          Serving Kozhikode since 2025
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Trusted by <span className="text-gradient">Homeowners</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-foreground/70 max-w-2xl mx-auto"
        >
          Hear what our clients say about their experience
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed flex-grow italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
