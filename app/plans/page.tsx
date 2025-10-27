import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlanInquiryForm } from '@/components/forms/plan-inquiry-form';
import { Check, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Plans & Pricing - CareToHome | Home Care Plans in Kozhikode',
  description: 'Choose from Basic, Standard, or Premium home care plans. Monthly cleaning, maintenance, and inspections for your Kozhikode property.',
};

const plans = [
  {
    name: 'Basic',
    description: 'Essential home care',
    features: [
      'Monthly deep cleaning',
      'Visual property inspection',
      'Photo reports after each visit',
      'WhatsApp updates',
      'Basic power & water check',
      'Key handling',
    ],
    addOns: ['Deep cleaning (quarterly)', 'Pest control'],
  },
  {
    name: 'Standard',
    description: 'Complete home maintenance',
    popular: true,
    features: [
      'Monthly deep cleaning',
      'Visual property inspection',
      'Minor maintenance & repairs',
      'Photo reports after each visit',
      'WhatsApp & email updates',
      'Basic power & water check',
      'Key handling',
      'Priority support',
    ],
    addOns: ['AC service', 'Deep pest control', 'Garden maintenance'],
  },
  {
    name: 'Premium',
    description: 'Full care package',
    features: [
      'Bi-weekly deep cleaning',
      'Comprehensive property inspection',
      'Full maintenance & repairs',
      'Quarterly pest control',
      'AC filter check & cleaning',
      'Detailed photo & video reports',
      'WhatsApp, email & call updates',
      'Power, water & gas checks',
      'Secure key management',
      '24/7 priority support',
      'Emergency response',
    ],
    addOns: ['Garden care', 'Pool maintenance', 'Additional visits'],
  },
];

const addOns = [
  'Deep cleaning (quarterly or on-demand)',
  'Comprehensive pest control schedule',
  'AC servicing and maintenance',
  'Garden and landscaping care',
  'Pool cleaning and maintenance',
  'Additional emergency visits',
];

const howItWorksSteps = [
  'Choose your plan and submit an inquiry',
  'We schedule a property assessment',
  'You provide access details and special instructions',
  'We begin regular scheduled visits',
];

const faqs = [
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan anytime. Contact us at least 7 days before your next scheduled visit to make changes.',
  },
  {
    question: 'What happens if I need additional services?',
    answer: "You can add services from our add-ons list anytime. We'll provide a quote and schedule them based on your needs.",
  },
  {
    question: 'How does billing work?',
    answer: "We bill monthly in advance. You'll receive an invoice via email, and payment can be made through bank transfer or UPI.",
  },
  {
    question: 'Can I customize a plan for my needs?',
    answer: 'Absolutely! If none of our standard plans fit perfectly, we can create a custom plan tailored to your specific requirements.',
  },
];

export default function PlansPage() {
  return (
    <div className="pt-16">
      <Section className="text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Choose Your <span className="text-gradient">Care Plan</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
            Flexible plans designed for every homeowner's needs. No long-term commitments, cancel or pause anytime.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 lg:p-8 flex flex-col ${
                plan.popular ? 'border-primary border-2 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent-gradient-to text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60">{plan.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-foreground/70">
                  Included Services
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 font-semibold"
                >
                  <a
                    href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20the%20CareToHome%20{plan.name}%20plan."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Admin
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <a href="#inquiry-form">Request This Plan</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Optional <span className="text-gradient">Add-Ons</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Enhance your plan with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{addOn}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-white/80 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section id="inquiry-form" className="bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Request a <span className="text-gradient">Plan</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <Card className="p-6 lg:p-8">
            <PlanInquiryForm />
          </Card>
        </div>
      </Section>
    </div>
  );
}
