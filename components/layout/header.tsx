'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Plans', href: '/plans' },
  { name: 'Contact', href: '/contact' },
  { name: 'Rent Automation', href: '/rent-automation' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Increased heights here */}
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="https://res.cloudinary.com/dugtxybef/image/upload/v1761570828/care_your_home.-removebg_yuo5mf.png"
              alt="CareToHome"
              className="h-16 lg:h-24 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-normal transition-colors ${
                    isActive
                      ? isScrolled
                        ? 'text-primary bg-primary/10'
                        : isHomePage
                          ? 'text-white bg-white/20'
                          : 'text-primary bg-primary/10'
                      : isScrolled
                        ? 'text-foreground/80 hover:text-foreground hover:bg-accent'
                        : isHomePage
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="ghost"
              className={`font-normal rounded-full ${
                isScrolled
                  ? 'text-foreground hover:bg-accent'
                  : isHomePage
                    ? 'text-white hover:bg-white/10 hover:text-white'
                    : 'text-foreground hover:bg-accent'
              }`}
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
              className={`font-normal rounded-full ${
                isScrolled
                  ? 'bg-primary text-foreground hover:bg-primary/90'
                  : isHomePage
                    ? 'bg-white text-foreground hover:bg-white/90'
                    : 'bg-primary text-foreground hover:bg-primary/90'
              }`}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'hover:bg-foreground/10'
                : isHomePage
                  ? 'hover:bg-white/10'
                  : 'hover:bg-foreground/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : isHomePage ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : isHomePage ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-normal transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full font-normal rounded-full"
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
                  className="w-full bg-primary hover:bg-primary/90 font-normal rounded-full text-foreground"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
 