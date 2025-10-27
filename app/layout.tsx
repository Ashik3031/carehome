import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { StructuredData } from '@/components/seo/structured-data';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'CareToHome - Remote Home Care in Kozhikode, Kerala',
  description: 'Monthly cleaning, maintenance & inspections for homeowners in Kozhikode. Professional home care services handled remotely.',
  keywords: 'Home care Kozhikode, Kerala home maintenance, remote home management, Kozhikode property care',
  openGraph: {
    title: 'CareToHome - Remote Home Care in Kozhikode',
    description: 'Monthly cleaning, maintenance & inspections for homeowners in Kozhikode.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
