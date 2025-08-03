
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server'; 
import '../globals.css';
import { Navbar } from '@/components/ui/nav-bar';
import { Footer } from '@/components/ui/footer';
import { Toaster } from "@/components/ui/toaster";
import { Meta } from '@/components/ui/meta'; 
import { CookieConsentBanner } from '@/components/ui/cookie-consent-banner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Brand'});
 
  return {
    title: {
      default: t('name'),
      template: `%s | ${t('name')}`,
    },
    description: 'Private apartment rentals in Târgu Mureș, Romania. Comfort, style, and local charm.',
    manifest: '/manifest.json', 
    icons: {
      apple: '/icons/icon-192x192.png', 
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <Meta locale={locale} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen relative bg-background">
            <Navbar />
            <main className="flex flex-col flex-grow z-10 relative">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <CookieConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
