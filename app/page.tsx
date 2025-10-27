import { HeroSection } from '@/components/home/hero-section';
import { ProblemSolution } from '@/components/home/problem-solution';
import { PlansPreview } from '@/components/home/plans-preview';
import { HowItWorks } from '@/components/home/how-it-works';
import { ServicesGrid } from '@/components/home/services-grid';
import { Testimonials } from '@/components/home/testimonials';
import { FAQSection } from '@/components/home/faq-section';
import { CTABand } from '@/components/home/cta-band';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <PlansPreview />
      <HowItWorks />
      <ServicesGrid />
      <Testimonials />
      <FAQSection />
      <CTABand />
    </>
  );
}
