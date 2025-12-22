export default function Schema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Planter Business',
    description: 'Professional seasonal planters, designed and installed for you. Serving the Detroit metro area.',
    url: 'https://planterbusiness.com',
    telephone: '+1-248-555-0123',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Detroit',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.3314,
      longitude: -83.0458,
    },
    areaServed: [
      'Birmingham, MI',
      'Bloomfield Hills, MI',
      'Grosse Pointe, MI',
      'Royal Oak, MI',
      'Troy, MI',
      'Rochester, MI',
      'West Bloomfield, MI',
      'Farmington Hills, MI',
      'Northville, MI',
      'Plymouth, MI',
    ],
    priceRange: '$$',
    image: 'https://planterbusiness.com/images/logo.jpg',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Planter Subscriptions and Seasonal Decor',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Planter Business',
    },
    areaServed: {
      '@type': 'State',
      name: 'Michigan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Planter Subscriptions',
            description: 'Year-round planter service with 4 seasonal refreshes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seasonal Decor',
            description: 'One-time seasonal and holiday decorations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Irrigation',
            description: 'Container plant irrigation setup and maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance',
            description: 'Container plant maintenance, watering, and care',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Events & Rentals',
            description: 'Short-term planter solutions for events and staging',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a planter subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A planter subscription is a year-round service where we design, install, and maintain your seasonal planters. We refresh them four times per year—spring, summer, fall, and winter—so you always have beautiful, fresh displays without any work.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve the greater Detroit metro area including Birmingham, Bloomfield Hills, Grosse Pointe, Royal Oak, Troy, Rochester, West Bloomfield, Farmington Hills, Northville, and Plymouth.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to do any maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No! That\'s the beauty of our service. We handle everything—design, installation, watering, deadheading, and seasonal transitions. You just enjoy the beautiful planters.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get started?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply request a consultation through our contact form or give us a call. We\'ll schedule a time to visit your property, discuss your preferences, and create a custom plan for your space.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
