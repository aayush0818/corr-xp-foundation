// SEO Schema.org Structured Data Generators

export const SITE_URL = 'https://corrxp.com';
export const SITE_NAME = 'CORR XP India Services';
export const SITE_PHONE = '+91-9988252531';
export const SITE_EMAIL = 'corrxp@gmail.com';
export const SOCIAL_IMAGE = 'https://corrxp.com/og-image.png';
export const SITE_TAGLINE = 'Structural Repair & Concrete Rehabilitation Experts in Mumbai, Navi Mumbai, Thane & Pune';

// Location-specific keywords for SEO
export const LOCATION_KEYWORDS = {
  primary: ['Mumbai', 'Navi Mumbai', 'Kharghar', 'Thane', 'Pune'],
  secondary: ['Panvel', 'Vashi', 'Nerul', 'Belapur', 'Airoli', 'Turbhe', 'Kalamboli'],
  regions: ['Maharashtra', 'Western India', 'MMR Region'],
};

export const SERVICE_LOCATION_KEYWORDS = {
  structuralRepair: 'structural repair Mumbai, structural repair Navi Mumbai, building repair Thane, construction repair Kharghar, structural contractor Pune',
  waterproofing: 'waterproofing Mumbai, terrace waterproofing Navi Mumbai, building waterproofing Thane, waterproofing contractor Kharghar, waterproofing services Pune',
  concreteRepair: 'concrete repair Mumbai, RCC repair Navi Mumbai, concrete rehabilitation Thane, concrete restoration Pune',
  frpStrengthening: 'FRP strengthening Mumbai, CFRP wrapping Navi Mumbai, fiber wrapping Thane, structural retrofitting Pune',
  corrosionControl: 'corrosion protection Mumbai, anti-corrosion coating Navi Mumbai, steel protection Thane, corrosion control Pune',
};

// Organization Schema - Use on all pages
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description: 'Leading structural repair, rehabilitation, and retrofitting contractor serving Mumbai, Navi Mumbai, Thane, Kharghar, and Pune. Specialized in concrete repair, FRP strengthening, waterproofing, and corrosion protection.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_PHONE,
    contactType: 'Customer Service',
    areaServed: ['Mumbai', 'Navi Mumbai', 'Thane', 'Pune', 'Maharashtra'],
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1201, Chaturbhuj CHS, Shilp Chowk, Sec 21',
    addressLocality: 'Kharghar, Navi Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '410210',
    addressCountry: 'IN',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Mumbai',
    },
    {
      '@type': 'City', 
      name: 'Navi Mumbai',
    },
    {
      '@type': 'City',
      name: 'Thane',
    },
    {
      '@type': 'City',
      name: 'Pune',
    },
  ],
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
  description: 'Premier structural repair and waterproofing contractor in Navi Mumbai. Serving Mumbai, Thane, Kharghar, Panvel, and Pune with FRP strengthening, concrete rehabilitation, and corrosion protection services.',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Mumbai',
      containedInPlace: { '@type': 'State', name: 'Maharashtra' },
    },
    {
      '@type': 'City',
      name: 'Navi Mumbai',
      containedInPlace: { '@type': 'State', name: 'Maharashtra' },
    },
    {
      '@type': 'City',
      name: 'Thane',
      containedInPlace: { '@type': 'State', name: 'Maharashtra' },
    },
    {
      '@type': 'City',
      name: 'Pune',
      containedInPlace: { '@type': 'State', name: 'Maharashtra' },
    },
    {
      '@type': 'Place',
      name: 'Kharghar',
    },
    {
      '@type': 'Place',
      name: 'Panvel',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Structural Repair Services in Mumbai Region',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repair Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waterproofing Navi Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FRP Strengthening Thane' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Repair Kharghar' } },
    ],
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
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/services?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// FAQ Schema - Use on Services or About pages
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does CORR XP provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORR XP provides structural repair & rehabilitation, concrete repair & protection, corrosion control, steel coating & protection, fiber wrapping (FRP strengthening), structural retrofitting using CFRP/GFRP/AFRP systems, and waterproofing services for terraces and decks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is FRP strengthening?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FRP (Fiber Reinforced Polymer) strengthening is a method of reinforcing concrete structures using carbon fiber (CFRP), glass fiber (GFRP), or aramid fiber (AFRP) wrapping systems. It improves load-carrying capacity, stiffness, and ductility without adding significant dead load.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CORR XP certified for corrosion testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CORR XP conducts comprehensive corrosion testing as per NACE International standards and ASTM testing standards including ASTM G102, G50, B117, G142, and G316.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is CORR XP located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORR XP India is located in Kharghar, Navi Mumbai, Maharashtra (Sector 21). We provide pan-India structural repair and retrofitting services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get a consultation from CORR XP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact CORR XP for a free consultation by calling +91 99 88 2525 31, emailing corrxp@gmail.com, or visiting our contact page to submit an inquiry form.',
      },
    },
  ],
};
