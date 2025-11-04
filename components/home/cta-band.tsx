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
    // Keeps your original dark background + overlay intact
    <Section ref={ref} dark className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-gradient-to/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-3xl text-center space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.01em]">
          Need help choosing a plan?
        </h2>

        <p className="text-base sm:text-lg text-white/80">
          Chat with our team to find the right CareToHome plan for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 px-7 h-11 sm:h-12 font-medium group"
          >
            <a
              href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about CareToHome plans"
            >
              Talk to Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-7 h-11 sm:h-12 border-white/70 text-black hover:bg-white/20  font-medium"
          >
            <Link href="/plans">View Plans</Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
