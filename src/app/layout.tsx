import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'InclusiveRead — Built for Neurodivergent Minds',
  description: 'A free Chrome extension designed for people with ADHD, Autism, Dyslexia, and other neurodivergent conditions. Customize fonts, reduce sensory overload, listen to content, and decode complex language.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className="font-body antialiased overflow-x-hidden bg-[#f5f5f0] text-gray-800">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
