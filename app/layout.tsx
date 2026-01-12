import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Planter Business | Your Private Gardener',
  description: 'Professional seasonal planters, designed and installed for you. Serving the Detroit metro area with planter subscriptions, seasonal decor, irrigation, and maintenance services.',
  keywords: 'planter subscriptions, seasonal planters, outdoor decor, Detroit landscaping, container gardening, seasonal decor, irrigation, plant maintenance',
  openGraph: {
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
