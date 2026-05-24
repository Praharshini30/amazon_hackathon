import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'DreamCart.ai — Online Shopping for Electronics, Fashion, AI & More',
  description: 'AI-powered aspirational commerce. Shop like Amazon with Dream AI — transform aspirations into product roadmaps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#e3e6e6]">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
