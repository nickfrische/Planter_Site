import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://detroit-planter.vercel.app'),
  title: 'Planter Business | Your Private Gardener',
  description: 'Professional seasonal planters, designed and installed for you. Serving the Detroit metro area with planter subscriptions, seasonal decor, irrigation, and maintenance services.',
  keywords: 'planter subscriptions, seasonal planters, outdoor decor, Detroit landscaping, container gardening, seasonal decor, irrigation, plant maintenance',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    type: 'website',
    images: [
      {
        url: '/images/seasonal-decor.jpeg',
        width: 1200,
        height: 630,
        alt: 'Beautiful patio with potted plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    images: ['/images/seasonal-decor.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
