import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Plans', href: '/plans' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Home Care', href: '/' },
    { name: 'Rent Automation', href: '/rent-automation' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">CareToHome</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Remote home care, handled. Monthly cleaning, maintenance & inspections for homeowners in Kozhikode.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000000000"
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9000000000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@example.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} CareToHome. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Serving Kozhikode, Kerala, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
