'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const frames = [
  {
    title: 'Managing a home from another country is stressful.',
    description: 'Coordinating cleaners, repairs, and inspections from abroad is overwhelming.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
  },
  {
    title: 'Coordinating maintenance remotely is messy.',
    description: 'Phone calls, payments, scheduling—it all takes too much time and energy.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Subscribe once—we handle monthly care & reports.',
    description: 'One simple plan. Regular visits. Photo reports. Peace of mind.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
  },
];

export function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const index = Math.min(Math.floor(latest * frames.length * 1.5), frames.length - 1);
      setActiveIndex(Math.max(0, index));
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {frames.map((frame, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <img
                src={frame.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {frames.map((frame, index) => (
              <motion.div
                key={index}
                className="absolute space-y-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : -30,
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-base font-light text-black/20 min-w-[40px] pt-1">
                    0{index + 1}
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black">
                      {frame.title}
                    </h2>
                    <p className="text-sm sm:text-base text-black/60 font-light leading-relaxed">
                      {frame.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Progress Indicator */}
            <div className="absolute bottom-0 left-0 flex gap-2">
              {frames.map((_, index) => (
                <div
                  key={index}
                  className={`h-0.5 transition-all duration-500 ${
                    activeIndex === index 
                      ? 'w-12 bg-black' 
                      : 'w-6 bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for scroll */}
      <div style={{ height: `${frames.length * 100}vh` }} />
    </div>
  );
}