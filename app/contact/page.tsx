import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us - CareToHome | Get a Quote for Home Care',
  description: 'Contact CareToHome for home care services in Kozhikode. Get a quote, ask questions, or discuss your home maintenance needs.',
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses for all your queries',
    action: 'Chat with us',
    href: 'https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans.',
    external: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+91 9000000000',
    action: 'Call us',
    href: 'tel:+919000000000',
    external: false,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'hello@example.com',
    action: 'Email us',
    href: 'mailto:hello@example.com',
    external: false,
  },
];

const officeInfo = [
  {
    icon: MapPin,
    title: 'Location',
    description: 'Kozhikode, Kerala, India',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Section className="text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Let's Make Your Home Care <span className="text-gradient">Effortless</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            Have questions? Need a quote? We're here to help. Reach out through your preferred channel.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{method.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                    >
                      {method.action}
                    </a>
                  </Button>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-sm text-foreground/60">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Fill out the form and we'll get back to you within 24 hours. For urgent matters, please use WhatsApp.
              </p>
            </div>

            <Card className="p-6 lg:p-8">
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose CareToHome?</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Professional, vetted team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Photo reports after every visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Flexible plans with no long-term commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transparent pricing and communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Local expertise in Kozhikode</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-gradient-to/10 border border-primary/20">
              <h3 className="text-xl font-bold mb-3">Need Help Choosing?</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Not sure which plan is right for you? Our team can assess your property and recommend the perfect care plan.
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 font-semibold"
              >
                <a
                  href="https://wa.me/919000000000?text=Hi%2C%20I%20need%20help%20choosing%20a%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to Admin
                </a>
              </Button>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/50 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-sm text-foreground/60">
                  Map placeholder - Kozhikode, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
