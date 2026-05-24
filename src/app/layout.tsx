import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'DreamCart AI — Who do you want to become?',
  description: 'AI-powered aspirational commerce. Transform dreams into actionable product roadmaps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
