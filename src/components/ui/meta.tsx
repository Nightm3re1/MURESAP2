import { getTranslations } from 'next-intl/server';

interface MetaProps {
  locale: string;
  title?: string;
  description?: string;
  ogImage?: string;
  // Add more props as needed for specific pages
}

// This component is intended to generate a JSON-LD script tag.
// Other meta tags are usually handled by Next.js Metadata API in layout.tsx/page.tsx.
export async function Meta({ locale, title, description, ogImage }: MetaProps) {
  const tBrand = await getTranslations({ locale, namespace: 'Brand' });
  const tContact = await getTranslations({ locale, namespace: 'ContactPage' });
  const tFooter = await getTranslations({ locale, namespace: 'Footer' });

  const siteName = tBrand('name');
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || 'Private apartment rentals in Târgu Mureș, Romania.';
  // Use a default image or a specific one if provided
  const imageUrl = ogImage || `https://picsum.photos/seed/${siteName}/1200/630`;


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": pageDescription,
    "image": imageUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Central Târgu Mureș (example)", // Replace with actual main address or make dynamic
      "addressLocality": "Târgu Mureș",
      "addressRegion": "Mureș",
      "addressCountry": "RO"
    },
    "telephone": "+40700123456", // Replace with actual phone
    "email": "contact@muresapartments.ro", // Replace with actual email
    "url": `https://mures-apartments.example.com/${locale}`, // Replace with actual domain
    "priceRange": "$$" // Example price range
    // "openingHoursSpecification": [ ... ] // Optional
  };

  return (
    <>
      {/* 
        Standard meta tags (title, description, Open Graph) are best handled by
        Next.js Metadata API in layout.tsx and page.tsx.
        This component focuses on JSON-LD or complex/dynamic tags if needed.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* You can add other specific tags here if necessary */}
    </>
  );
}
