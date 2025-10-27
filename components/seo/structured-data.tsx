export function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CareToHome',
    description: 'Remote home care services in Kozhikode, Kerala. Monthly cleaning, maintenance & inspections for homeowners.',
    url: 'https://caretohome.com',
    telephone: '+919000000000',
    email: 'hello@example.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.2588,
      longitude: 75.7804,
    },
    areaServed: {
      '@type': 'City',
      name: 'Kozhikode',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 09:00-18:00',
    sameAs: [],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Care and Maintenance',
    provider: {
      '@type': 'LocalBusiness',
      name: 'CareToHome',
    },
    areaServed: {
      '@type': 'City',
      name: 'Kozhikode',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Care Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic Plan',
            description: 'Monthly cleaning and inspection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard Plan',
            description: 'Cleaning and minor maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Plan',
            description: 'Full care with pest control and AC maintenance',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
