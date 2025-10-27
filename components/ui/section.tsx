import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, id, dark }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'py-16 md:py-24 lg:py-32',
          dark && 'bg-dark text-white',
          className
        )}
      >
        <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
