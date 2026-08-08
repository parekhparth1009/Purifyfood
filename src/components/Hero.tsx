"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = ["Dehydrated Onion, Garlic,", "Vegetables & Spices",];

const SLIDES = [
  { src: "/assets/hero-bg.png", alt: "Dehydrated onion, garlic and spices" },
  { src: "/assets/prod-vegetables.png", alt: "Dehydrated vegetable powders" },
  { src: "/assets/prod-spices.png", alt: "Whole Indian spices" },
];

const SLIDE_DURATION = 5000;

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.2, ease: "linear" }}
          >
            <Image
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center brightness-[0.92] contrast-[1.03]"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/22" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-[90px] pb-16">
      <HeroCarousel />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <motion.span
          className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-md"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Purify Food &amp; Spices Pvt Ltd
        </motion.span>

        <h1 className="mt-5 font-display text-[clamp(36px,5.6vw,62px)] leading-[1.08] text-white drop-shadow-md">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-[54ch] text-[17px] text-white/90 leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A certified manufacturer supplying custom cuts, mesh sizes and finishes to food manufacturers, importers and private-label
          brands worldwide.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <Link
            href="/company"
            className="inline-flex items-center rounded-md bg-accent px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:bg-accent/90"
          >
            Explore Company
          </Link>
          <Link
            href="/enquiry"
            className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-[14.5px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-ink"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <path d="M10 1v22M2 15l8 8 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
