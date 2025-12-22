# Planter Business Website

Professional seasonal planters website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Split-screen hero** (Blank Roast style) with video background
- **11 homepage sections** including trust bar, how it works, services, seasonal preview, before/after gallery, testimonials, FAQ, and contact form
- **Smooth scroll animations** inspired by Hajster
- **Interactive components**: seasonal toggle, before/after slider, testimonials carousel, FAQ accordion
- **Mobile-first responsive design** - 1:1 cohesive experience across all devices
- **SEO optimized** with Schema.org markup (LocalBusiness, Service, FAQ)
- **Edge-to-edge layouts** where specified
- **Chatbot widget** for customer engagement
- **Zero pricing displayed** - guides to consultation

## Tech Stack

- **Framework**: Next.js 14 (App Router) with static export
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)
- **Deployment**: Vercel (recommended)

## Color Palette

- **Forest Green**: Primary brand color (`forest-600: #267854`)
- **Cream**: Light backgrounds (`cream-50: #fdfcfb`)
- **Earth Tones**: Supporting colors for warmth

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Generates static HTML files in the `/out` directory.

### Production

```bash
npm start
```

## Project Structure

```
planter-business/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Sticky navigation
│   ├── Hero.tsx             # Split-screen hero
│   ├── TrustBar.tsx         # 3 trust icons
│   ├── HowItWorks.tsx       # 3-step process
│   ├── WhatWeDo.tsx         # 5 service cards
│   ├── SeasonalPreview.tsx  # Spring/Summer/Fall/Winter toggle
│   ├── BeforeAfterGallery.tsx # Interactive slider
│   ├── OurStory.tsx         # Brief story section
│   ├── Testimonials.tsx     # Rotating carousel
│   ├── FAQPreview.tsx       # Accordion preview
│   ├── FinalCTA.tsx         # Contact form
│   ├── Footer.tsx           # Site footer
│   ├── Chatbot.tsx          # Chat widget
│   └── Schema.tsx           # SEO structured data
├── public/
│   ├── images/              # Image assets
│   └── videos/              # Video assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

## Assets Needed

To complete the website, add the following assets to `/public`:

### Videos
- `videos/hero-planters.webm` - Hero background video (WebM format)
- `videos/hero-planters.mp4` - Hero background video (MP4 fallback)
- `images/hero-poster.jpg` - Hero video poster image

### Images

**Seasonal Preview**
- `images/season-spring.jpg`
- `images/season-summer.jpg`
- `images/season-fall.jpg`
- `images/season-winter.jpg`

**Services**
- `images/service-planters.jpg`
- `images/service-seasonal.jpg`
- `images/service-irrigation.jpg`
- `images/service-maintenance.jpg`
- `images/service-events.jpg`

**Before/After Gallery**
- `images/before-1.jpg` through `images/before-4.jpg`
- `images/after-1.jpg` through `images/after-4.jpg`

**Story**
- Photo of Brian & Eliza (can be added to OurStory component)

## Next Steps

1. **Add images and videos** to `/public` directory
2. **Update content** - Replace "Planter Business" with final business name
3. **Build additional pages**:
   - `/planter-subscriptions`
   - `/seasonal-decor`
   - `/irrigation`
   - `/maintenance`
   - `/events-rentals`
   - `/about`
   - `/faq`
   - `/contact`
   - `/areas/*` (SEO landing pages)
4. **Configure form submission** in FinalCTA.tsx (e.g., integrate with email service)
5. **Set up Microsoft Clarity** for analytics
6. **Deploy to Vercel**

## Performance Optimization

The site is built with Core Web Vitals in mind:
- Static export for fast loading
- Optimized fonts with `display: swap`
- Lazy loading for images
- Code splitting via dynamic imports
- Minimal JavaScript bundle

## SEO

Schema.org structured data included for:
- LocalBusiness (Detroit metro area)
- Service offerings
- FAQ markup

## Deployment

Recommended: Deploy to Vercel for optimal Next.js performance and Edge CDN.

```bash
npm run build
vercel deploy
```

## License

Private project for client use.