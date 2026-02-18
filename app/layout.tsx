import type { Metadata, Viewport } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jost',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dsplanter.com'),
  title: 'Planter Business | Your Private Gardener',
  description: 'Professional seasonal planters, designed and installed for you. Serving the Detroit metro area with planter subscriptions, seasonal decor, irrigation, and maintenance services.',
  keywords: 'planter subscriptions, seasonal planters, seasonal decor, Detroit landscaping, container gardening, seasonal decor, irrigation, plant maintenance',
  themeColor: '#267854',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Detroit Style Planter Company | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    type: 'website',
    url: 'https://dsplanter.com',
    siteName: 'Detroit Style Planter Company',
    images: [
      {
        url: '/images/meta_image.png',
        width: 1200,
        height: 630,
        alt: 'Detroit Style Planter Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Detroit Style Planter Company | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    images: ['/images/meta_image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
