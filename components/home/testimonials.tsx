'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Nair',
    location: 'Living in Dubai',
    text: "CareToHome has been a lifesaver! I can manage my Kozhikode home from Dubai without any stress. The photo reports give me complete peace of mind.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Rahul Menon',
    location: 'Living in Bangalore',
    text: "Professional service and excellent communication. They handle everything from cleaning to minor repairs. Highly recommend for anyone living away from home.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Anjali Kumar',
    location: 'Living in USA',
    text: "Managing my property from the US was impossible until I found CareToHome. They're reliable, transparent, and truly care about maintaining my home.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div ref={ref} className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Side - Content */}
        <div className="relative bg-gradient-to-br from-teal-700 to-teal-800 flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center pointer-events-none"
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                x: currentIndex === index ? 0 : 30,
              }}
              transition={{ duration: 0.6 }}
              style={{ pointerEvents: currentIndex === index ? 'auto' : 'none' }}
            >
              <div className="max-w-xl space-y-8">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-normal">{testimonial.name}</p>
                    <p className="text-white/70 text-sm font-light">{testimonial.location}</p>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-2 pt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? 'w-8 bg-yellow-400'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}