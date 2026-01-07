// SEO Schema.org Structured Data Generators

export const SITE_URL = 'https://corrxp.com';
export const SITE_NAME = 'CORR XP India Services';
export const SITE_PHONE = '+91-9988252531';
export const SITE_EMAIL = 'corrxp@gmail.com';
export const SOCIAL_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/Ah1bLRfI1KayT3tm7lsw0Bn73no1/social-images/social-1766299538701-corrxp.jpeg';

// Organization Schema - Use on all pages
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: 'Specialized structural repair, rehabilitation, protection, and retrofitting contractor providing advanced solutions for concrete and steel structures in India.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_PHONE,
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1201, Chaturbhuj CHS, Shilp Chowk, Sec 21',
    addressLocality: 'Kharghar',
    addressRegion: 'Maharashtra',
    postalCode: '410210',
    addressCountry: 'IN',
  },
  sameAs: [],
};

// LocalBusiness Schema - Use on Contact/About pages
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: SOCIAL_IMAGE,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1201, Chaturbhuj CHS, Shilp Chowk, Sec 21',
    addressLocality: 'Kharghar, Navi Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '410210',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.0478,
    longitude: 73.0717,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
};

// Service Schema Generator
export const createServiceSchema = (serviceName: string, serviceDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  description: serviceDescription,
});

// Professional Service Schema - For Services page
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/services`,
  description: 'Structural repair, concrete protection, corrosion control, steel coating, FRP strengthening, and structural retrofitting services with NACE & ASTM certified testing.',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Navi Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Structural Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structural Repair & Rehabilitation',
          description: 'Repair and rehabilitation of distressed structural members to restore structural safety.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Concrete Repair & Protection',
          description: 'Patch repair, micro-concreting, crack injection, grouting, and protective coating systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fiber Wrapping (FRP Strengthening)',
          description: 'Strengthening of RCC structures using Carbon, Glass, and Aramid Fiber Reinforced Polymer systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Structural Retrofitting',
          description: 'Advanced retrofitting using CFRP, GFRP, and AFRP wrapping systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corrosion Control',
          description: 'Treatment of corroded reinforcement and anti-corrosion systems with NACE & ASTM certified testing.',
        },
      },
    ],
  },
};

// Breadcrumb Schema Generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// WebPage Schema Generator
export const createWebPageSchema = (
  name: string,
  description: string,
  url: string,
  breadcrumbs?: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  },
  ...(breadcrumbs && {
    breadcrumb: createBreadcrumbSchema(breadcrumbs),
  }),
});

// Website Schema - Use on homepage
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'CORR XP delivers innovative corrosion protection and concrete rehabilitation solutions that extend the life of critical infrastructure.',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.png`,
    },
  },
};
