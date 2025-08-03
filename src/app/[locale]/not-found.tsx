// app/[locale]/not-found.tsx
'use client'; // Required for useTranslations
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation'; // Updated import
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFoundPage() {
  const t = useTranslations('Common');

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-12 text-center">
      <Frown className="w-24 h-24 text-primary mb-6" />
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-6">{t('notFound')}</h2>
      <p className="text-lg text-muted-foreground mb-8">
        {/* Add specific "not found" message if needed in translations */}
        Oops! The page you are looking for does not exist or may have been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">{useTranslations('Navbar')('home')}</Link>
      </Button>
    </div>
  );
}
