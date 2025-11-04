'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern home interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 relative z-20">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              Remote home care<br />
              <span className="font-normal">handled.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
              Monthly cleaning, maintenance & inspections for homeowners in Kozhikode.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-sm font-normal px-8 h-11 rounded-full"
            >
              <a
                href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans."
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Admin
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-sm font-normal px-8 h-11 rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}