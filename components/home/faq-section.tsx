'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Can I customize a plan?',
    answer:
      'Absolutely! While we offer three standard plans, we understand every home is unique. Contact us to discuss your specific needs, and we can create a customized plan that fits your requirements perfectly.',
  },
  {
    question: 'How do I pause or cancel my subscription?',
    answer:
      "You can pause or cancel your subscription anytime with 7 days' notice. Simply contact us via WhatsApp or email, and we'll handle it immediately. No hidden fees or long-term commitments.",
  },
  {
    question: "What's included in maintenance?",
    answer:
      'Our maintenance includes minor repairs like fixing leaky taps, door adjustments, electrical switches, painting touch-ups, and similar small fixes. For major repairs, we provide estimates and coordinate with specialists.',
  },
  {
    question: 'How do you access my property?',
    answer:
      'You can provide keys through a trusted contact, or we can arrange secure key handling. All our team members are verified, and we maintain detailed logs of every property visit for complete transparency.',
  },
  {
    question: 'What areas in Kozhikode do you serve?',
    answer:
      'We currently serve most areas within Kozhikode city limits. Contact us with your property location, and we can confirm if we cover your area.',
  },
  {
    question: 'How do I receive updates?',
    answer:
      'After each visit, you receive photo reports and detailed updates via WhatsApp or email. You can see exactly what was done, any issues found, and recommendations for future maintenance.',
  },
];

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            Everything you need to know about our services
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </Section>
  );
}
