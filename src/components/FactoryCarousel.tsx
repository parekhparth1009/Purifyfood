"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/assets/factory-1.jpg", alt: "Machinery room at the Purify Foods dehydration facility" },
  { src: "/assets/factory-2.jpg", alt: "Dehydration and processing line at the Purify Foods facility" },
  { src: "/assets/factory-3.jpg", alt: "Purify Food & Spices Pvt. Ltd. facility exterior and reception" },
  { src: "/assets/factory-4.jpg", alt: "Loading and unloading area at the Purify Foods facility" },
];

const SLIDE_DURATION = 4500;

export default function FactoryCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-rule shadow-lg sm:aspect-[21/9]">
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 z-10 font-mono text-[11px] uppercase tracking-wider text-white/85 drop-shadow">
        {SLIDES[index].alt}
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show factory photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
