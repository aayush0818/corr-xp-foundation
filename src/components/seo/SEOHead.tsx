import { Helmet } from 'react-helmet-async';
import { 
  SITE_URL, 
  SITE_NAME, 
  SITE_PHONE,
  SOCIAL_IMAGE,
  organizationSchema,
  createBreadcrumbSchema,
} from '@/lib/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string;
  schemas?: object[];
  breadcrumbs?: { name: string; url: string }[];
  articlePublishedTime?: string;
  articleModifiedTime?: string;
}

const SEOHead = ({
  title,
  description,
  path = '',
  image = SOCIAL_IMAGE,
  noindex = false,
  keywords,
  schemas = [],
  breadcrumbs,
  articlePublishedTime,
  articleModifiedTime,
}: SEOHeadProps) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  
  // Ensure description is within 160 characters
  const metaDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  // Always include organization schema
  const allSchemas = [organizationSchema, ...schemas];
  
  // Add breadcrumb schema if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push(createBreadcrumbSchema(breadcrumbs));
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - Structural Repair & Retrofitting`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - Structural Repair & Retrofitting`} />
      
      {/* Additional SEO */}
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="copyright" content={SITE_NAME} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Navi Mumbai, Maharashtra" />
      <meta name="geo.position" content="19.0345;73.0735" />
      <meta name="ICBM" content="19.0345, 73.0735" />
      
      {/* Business Contact */}
      <meta name="contact" content={SITE_PHONE} />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile & App */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CORR XP" />
      
      {/* Article timestamps if provided */}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      
      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
