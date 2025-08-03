
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HomePageClient from '@/components/ui/home-page-client';
import { Meteors } from '@/components/ui/meteors';


// For server components (like this page) that need translations for metadata:
export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Navbar'}); // Using Navbar for 'home'
  const brandT = await getTranslations({locale, namespace: 'Brand'});

  return {
    title: t('home'),
    description: `Welcome to ${brandT('name')} - Your premier choice for apartment rentals in Târgu Mureș.`,
  };
}


export default function HomePage() {
  return (
    <div className="relative flex-grow"> {/* Added flex-grow to ensure it expands */}
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <HomePageClient />
    </div>
  );
}

