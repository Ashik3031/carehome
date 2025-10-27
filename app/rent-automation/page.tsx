import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { EarlyAccessForm } from '@/components/forms/early-access-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Users, CreditCard, Bell, CheckCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rent Automation - Coming Soon | CareToHome',
  description: 'Automate rent collection with CareToHome. Upload agreements, invite tenants, and receive monthly rent automatically. Coming soon for landlords and tenants.',
};

const features = [
  {
    icon: FileText,
    title: 'Upload Signed Agreement',
    description: 'Digitize your rental agreement and store it securely in one place.',
  },
  {
    icon: Users,
    title: 'Invite Your Tenant',
    description: 'Send a simple invitation link to your tenant to join the platform.',
  },
  {
    icon: CreditCard,
    title: 'Autopay Monthly Rent',
    description: 'Set up automatic monthly rent collection with multiple payment options.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Automatic reminders for both landlords and tenants before due dates.',
  },
];

const benefits = {
  homeowners: [
    'Receive rent automatically every month',
    'Track payment history and receipts',
    'Digital agreement management',
    'Automatic late payment reminders',
    'Multiple payment method support',
    'Transparent transaction records',
  ],
  tenants: [
    'Never miss a rent payment',
    'Set up one-time autopay',
    'Instant payment confirmations',
    'Digital rent receipts',
    'Payment reminders before due date',
    'Secure and hassle-free',
  ],
};

export default function RentAutomationPage() {
  return (
    <div className="pt-16">
      <Section className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-gradient-to/10 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Coming Soon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Automate Rent Collection — <span className="text-gradient">Stress-Free</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            The easiest way for homeowners and tenants to manage monthly rent payments. Set it up once, and let automation handle the rest.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How <span className="text-gradient">It Works</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Three simple steps to automated rent collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent-gradient-to flex items-center justify-center mx-auto">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mx-auto" style={{ marginLeft: 'calc(50% - 1rem)' }}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for <span className="text-gradient">Everyone</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Whether you're a homeowner or tenant, rent automation makes life easier
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Homeowners</h3>
              </div>

              <ul className="space-y-3">
                {benefits.homeowners.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Tenants</h3>
              </div>

              <ul className="space-y-3">
                {benefits.tenants.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-semibold">Be the First to Know</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get Early Access to Rent Automation
          </h2>
          <p className="text-lg text-white/80">
            Join our early access list and be among the first to experience hassle-free rent management.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Request <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below and we'll notify you when we launch
            </p>
          </div>

          <Card className="p-6 lg:p-8">
            <EarlyAccessForm />
          </Card>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Meanwhile, Explore Our <span className="text-gradient">Home Care Services</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Already managing properties in Kozhikode? Check out our professional home care plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
              <Link href="/">View Home Care</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/plans">See Plans</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
