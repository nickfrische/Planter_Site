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
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Detroit Style Planter Company Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    images: ['/images/logo.png'],
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
