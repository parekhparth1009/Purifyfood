"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, CATEGORIES } from "@/lib/data";

const PRODUCTS_HREF = "/#food-category";

function ProductsDropdown({ solid, active }: { solid: boolean; active: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={PRODUCTS_HREF}
        className={`relative flex items-center gap-1 py-2 text-[14.5px] font-medium transition-colors group ${
          solid ? "text-ink hover:text-accent" : "text-white/90 hover:text-white"
        }`}
      >
        Products
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] bg-accent transition-all duration-200 ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-xl border border-rule bg-paper p-3 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="rounded-lg px-3.5 py-2.5 text-[13.5px] text-ink transition-colors hover:bg-paper-raised hover:text-accent"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div className="mt-2 border-t border-rule pt-2">
              <Link
                href={PRODUCTS_HREF}
                className="block rounded-lg px-3.5 py-2 text-[12.5px] font-semibold uppercase tracking-wide text-accent hover:bg-paper-raised"
              >
                View all product categories →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileProductsItem() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href={PRODUCTS_HREF} className="block py-2.5 text-[15px] text-ink">
          Products
        </Link>
        <button
          type="button"
          aria-label="Toggle product categories"
          onClick={() => setOpen((v) => !v)}
          className="p-2.5 text-ink"
        >
          <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-3"
          >
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="block py-2 text-[13.5px] text-muted">
                {cat.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  const isActive = (href: string) =>
    href === PRODUCTS_HREF ? pathname.startsWith("/products") : pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-paper/80 backdrop-blur-xl border-b border-rule/60 shadow-md py-2"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3"
      }`}
    >
      <div className="container-page flex items-center justify-between min-h-[76px]">
        <Link href="/" className="flex flex-col items-center justify-center gap-0.5 shrink-0 group py-0.5">
          <div className="relative h-11 w-11 flex items-center justify-center">
            <Image
              src="/assets/logo1.png"
              alt="Purify Food & Spices"
              width={48}
              height={48}
              className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <span className={`font-mono text-[10.5px] tracking-[0.12em] uppercase text-center font-semibold leading-none ${solid ? "text-ink" : "text-white drop-shadow"}`}>
            Purify Food &amp; Spices
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            if (link.href === PRODUCTS_HREF) {
              return <ProductsDropdown key={link.href} solid={solid} active={isActive(link.href)} />;
            }
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[14.5px] font-medium transition-colors group ${
                  solid ? "text-ink hover:text-accent" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-accent transition-all duration-200 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/enquiry"
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-[13.5px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden p-2 ${solid ? "text-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-paper border-t border-rule"
          >
            <nav className="container-page py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.href === PRODUCTS_HREF ? (
                    <MobileProductsItem />
                  ) : (
                    <Link href={link.href} className="block py-2.5 text-[15px] text-ink">
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link
                href="/enquiry"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-[14px] font-semibold text-white"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
