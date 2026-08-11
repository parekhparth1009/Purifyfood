"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import Reveal from "./Reveal";

const categoryImages: Record<string, string> = {
  "white-onion": "/assets/products/real/white-hero.jpg",
  "red-onion": "/assets/products/real/red-hero.jpg",
  "pink-onion": "/assets/products/real/pink-kibbled.jpg",
  "toasted-onion": "/assets/products/real/toasted-powder.jpg",
  "fried-onion": "/assets/products/real/fried-fresh.jpg",
  garlic: "/assets/products/real/garlic-hero.jpg",
  vegetables: "/assets/products/real/vegetables-hero.png",
  spices: "/assets/products/real/spices-hero.jpg",
};

export default function FoodCategory() {
  return (
    <section id="food-category" className="border-t border-rule bg-paper-raised py-24 scroll-mt-24">
      <div className="container-page">
        <Reveal>
          <span className="kicker">Food Category</span>
          <h2 className="mt-3 max-w-[30ch] font-display text-[clamp(24px,3vw,34px)] text-ink text-balance">
            Eight product lines, every cut and mesh size catalogued.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const imgSrc = categoryImages[cat.slug] || "/assets/hero-bg.png";
            return (
              <Reveal key={cat.slug} delay={i * 0.1}>
                <Link href={`/products/${cat.slug}`} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-rule bg-paper transition-shadow duration-300 hover:shadow-xl">
                    <div className="relative h-52 overflow-hidden bg-ink/5">
                      <Image
                        src={imgSrc}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute inset-0 flex items-end p-5">
                        <span className="font-mono text-[11.5px] uppercase tracking-wide text-white/90 font-semibold drop-shadow">
                          {cat.tagline}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-[20px] text-ink group-hover:text-accent transition-colors">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-[14px] text-muted leading-relaxed">{cat.blurb}</p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                        View Products
                        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
