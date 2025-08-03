
"use client";
import { Link, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Home, Building2, Percent, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { apartments } from '@/lib/data'; // Import apartment data
import React from 'react';
import { BrandLogoIcon } from '@/components/icons/brand-logo-icon';

// ListItem component for NavigationMenu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  const locale = useLocale();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as any} // Cast href for Link props compatibility
          locale={locale}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Interface for NavLinkContent props
interface NavLinkContentProps {
  href: string;
  label: string;
  icon: React.ElementType;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Updated: prop now expects an event
}

export function Navbar() {
  const t = useTranslations('Navbar');
  const brandT = useTranslations('Brand');
  const pathname = usePathname();
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinksConfig = [
    { href: '/', labelKey: 'home', icon: Home },
    {
      labelKey: 'apartments',
      icon: Building2,
      dropdownItems: apartments.map(ap => ({
        slug: ap.slug,
        title: ap.name[locale] || ap.name.en,
        href: `/apartments/${ap.slug}`
      }))
    },
    { href: '/discounts', labelKey: 'discounts', icon: Percent },
    { href: '/contact', labelKey: 'contact', icon: Mail },
  ];

  const NavLinkContent = ({ href, label, icon: Icon, className, onClick }: NavLinkContentProps) => (
    <Link
      href={href as any}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        pathname === href ? "bg-primary text-primary-foreground" : "text-foreground",
        className
      )}
      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => { // Capture the event from Link's onClick
        if (onClick) {
          onClick(event); // Pass the event to the prop if it exists
        }
        setIsMobileMenuOpen(false);
      }}
      aria-current={pathname === href ? "page" : undefined}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );

  const MobileMenu = () => (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-background p-4 shadow-lg">
        <SheetHeader>
          {/* Visually hidden title for accessibility, addresses Radix UI warning */}
          <SheetTitle className="sr-only">{t('language')}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-1">
          <SheetClose asChild>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4" onClick={() => setIsMobileMenuOpen(false)}>
              <BrandLogoIcon className="h-7 w-7" />
              {brandT('name')}
            </Link>
          </SheetClose>
          {navLinksConfig.map((link) => {
            if (link.dropdownItems) {
              return (
                <Accordion type="single" collapsible className="w-full" key={link.labelKey}>
                  <AccordionItem value={link.labelKey} className="border-b-0">
                    <AccordionTrigger className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center justify-between w-full py-2 px-3 text-lg font-medium hover:no-underline hover:bg-accent hover:text-accent-foreground",
                      pathname.startsWith("/apartments") ? "bg-muted text-primary" : "text-foreground"
                    )}>
                       <div className="flex items-center gap-2">
                        <link.icon className="h-5 w-5" />
                        <span>{t(link.labelKey)}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0 pl-4">
                      {link.dropdownItems.map((item) => (
                        <SheetClose asChild key={item.slug}>
                          <Link
                            href={item.href}
                            locale={locale}
                            className={cn(
                              "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground",
                              pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                            )}
                            onClick={() => setIsMobileMenuOpen(false)} // This onClick directly closes menu
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }
            // For direct links in MobileMenu, NavLinkContent's internal setIsMobileMenuOpen(false) handles closure.
            return (
              <SheetClose asChild key={link.labelKey}>
                 <NavLinkContent href={link.href!} label={t(link.labelKey)} icon={link.icon} className="text-lg" />
              </SheetClose>
            );
          })}
          <div className="mt-auto pt-4 border-t border-border">
            <LanguageSwitcher />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );


  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
             <BrandLogoIcon className="h-6 w-6" />
            {brandT('name')}
          </Link>
          <div className="h-8 w-8 rounded-md bg-muted animate-pulse md:hidden"></div>
          <nav className="hidden items-center space-x-2 md:flex">
            <div className="h-8 w-20 rounded-md bg-muted animate-pulse"></div>
            <div className="h-8 w-24 rounded-md bg-muted animate-pulse"></div>
            <div className="h-8 w-20 rounded-md bg-muted animate-pulse"></div>
            <div className="h-8 w-20 rounded-md bg-muted animate-pulse"></div>
          </nav>
        </div>
      </header>
    );
  }


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80" aria-label="Homepage">
          <BrandLogoIcon className="h-6 w-6" />
          {brandT('name')}
        </Link>

        <nav className="hidden items-center space-x-1 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinksConfig.map((link) => {
                if (link.dropdownItems) {
                  return (
                    <NavigationMenuItem key={link.labelKey}>
                      <NavigationMenuTrigger className={cn(pathname.startsWith("/apartments") && "bg-accent text-accent-foreground")}>
                        <link.icon className="h-5 w-5 mr-2" />
                        {t(link.labelKey)}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2 md:w-[250px]">
                          {link.dropdownItems.map((item) => (
                            <ListItem
                              key={item.slug}
                              title={item.title}
                              href={item.href}
                              className={cn(pathname === item.href && "bg-muted text-primary")}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={link.labelKey}>
                     <NavigationMenuLink asChild className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === link.href && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                      )}>
                        <Link href={link.href!} locale={locale}>
                          <link.icon className="h-5 w-5 mr-2" />
                          {t(link.labelKey)}
                        </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageSwitcher />
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

    