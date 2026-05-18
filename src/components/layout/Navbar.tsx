"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ChevronDown, PhoneCall, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || isOpen || openMega
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/20"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-20 flex justify-between items-center"
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const hasMega = !!link.groups?.length;
            return (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => hasMega && (cancelClose(), setOpenMega(link.name))}
                onMouseLeave={() => hasMega && scheduleClose()}
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  aria-expanded={hasMega ? openMega === link.name : undefined}
                  aria-haspopup={hasMega ? "menu" : undefined}
                  onFocus={() => hasMega && setOpenMega(link.name)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-gold flex items-center gap-1.5",
                    isActive(link.href) ? "text-gold" : "text-navy",
                  )}
                >
                  {link.name}
                  {hasMega && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        openMega === link.name && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="hidden xl:flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-gold" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold bg-navy text-white rounded-md hover:bg-navy-light transition-all shadow-md inline-flex items-center gap-2"
          >
            Free Consultation
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-navy p-2 -mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {openMega && (
          <motion.div
            key={openMega}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
            className="hidden lg:block absolute left-0 right-0 top-20 border-t border-gold/10"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="bg-white shadow-2xl">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <MegaMenuContent name={openMega} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
            className="lg:hidden bg-white border-b border-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <MobileNavItem key={link.name} link={link} />
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="block w-full py-3 text-sm font-semibold text-navy border border-gold/30 text-center rounded-md"
                >
                  Call {siteConfig.contact.phone}
                </a>
                <Link
                  href="/contact"
                  className="block w-full py-3 text-sm font-semibold bg-navy text-white text-center rounded-md"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaMenuContent({ name }: { name: string }) {
  const link = navLinks.find((l) => l.name === name);
  if (!link?.groups) return null;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10" role="menu">
      {link.groups.map((group) => (
        <div key={group.heading}>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-4">
            {group.heading}
          </p>
          <ul className="space-y-2.5">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block text-sm text-navy hover:text-gold transition-colors leading-snug"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileNavItem({
  link,
}: {
  link: (typeof navLinks)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const hasGroups = !!link.groups?.length;

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={link.href}
          className="flex-1 block px-3 py-3.5 text-base font-medium text-navy active:text-gold"
        >
          {link.name}
        </Link>
        {hasGroups && (
          <button
            type="button"
            aria-label={expanded ? `Collapse ${link.name}` : `Expand ${link.name}`}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="p-3 text-navy/60"
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                expanded && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {hasGroups && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-4">
              {link.groups!.map((group) => (
                <div key={group.heading}>
                  <p className="px-3 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-navy/80"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
