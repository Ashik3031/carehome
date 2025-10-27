import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Users, Clock, Award, CheckCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - CareToHome | Remote Home Care in Kozhikode',
  description: 'Learn about CareToHome - your trusted home care partner in Kozhikode, Kerala. Professional, reliable, and dedicated to maintaining your home.',
};

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on, month after month.',
  },
  {
    icon: Users,
    title: 'Vetted Professionals',
    description: 'Every team member is carefully verified and trained.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'Scheduled visits that happen exactly when promised.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Photo reports and documentation for complete transparency.',
  },
];

const whyUs = [
  'Local expertise in Kozhikode property management',
  'Monthly photo reports after every visit',
  'Direct WhatsApp communication with admin',
  'Flexible plans with no long-term lock-in',
  'Secure key handling and property access',
  'Verified and trusted service professionals',
];

const timeline = [
  {
    year: '2025',
    title: 'CareToHome Founded',
    description: 'Started serving homeowners in Kozhikode with professional home care services.',
  },
  {
    year: '2025',
    title: 'Growing Customer Base',
    description: 'Helping homeowners across India and abroad manage their Kozhikode properties.',
  },
  {
    year: 'Coming Soon',
    title: 'Rent Automation',
    description: 'Launching automated rent collection platform for landlords and tenants.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Section className="text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            CareToHome — Your Trusted <span className="text-gradient">Home Partner</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            We understand the challenge of managing a home from afar. That's why we created CareToHome — a simple, reliable way to keep your Kozhikode property maintained, cleaned, and cared for while you're away.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Mission & Values</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Making remote home management effortless through trust, transparency, and professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose <span className="text-gradient">CareToHome?</span>
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-gradient-to/10 border border-primary/20">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Coverage & Assurance</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We serve most areas within Kozhikode city limits. Our team consists of verified professionals who undergo thorough background checks and training.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Every property visit is documented with photos and detailed reports, giving you complete visibility into your home's condition from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-white/70">
              Building the future of remote home management
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start pb-8 border-b border-white/10 last:border-0"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Experience Stress-Free Home Care?
          </h2>
          <p className="text-lg text-foreground/70">
            Join homeowners across India and abroad who trust CareToHome with their Kozhikode properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              <Link href="/plans">View Plans</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
