'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section ref={ref} dark className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-gradient-to/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Not sure which plan fits you?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
          Talk to our team and we'll help you choose the perfect care plan for your home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 text-lg font-semibold px-8 h-12 sm:h-14 group"
          >
            <a
              href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans."
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Admin
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg font-semibold px-8 h-12 sm:h-14 border-2 border-white text-white hover:bg-white/10"
          >
            <Link href="/plans">View Plans</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg font-semibold px-8 h-12 sm:h-14 border-2 border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
