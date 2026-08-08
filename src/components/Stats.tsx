"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, animate } from "framer-motion";
import { STATS } from "@/lib/data";
import Reveal from "./Reveal";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular">
      {display}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 text-paper">
      {/* Export Logistics Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg-export.png"
          alt="Global Export Logistics"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:border-accent/60">
                <div className="font-display text-[44px] text-white drop-shadow-sm">
                  <Counter to={stat.value} />
                  <span className="text-accent ml-0.5">{stat.suffix}</span>
                </div>
                <div className="mt-3 font-mono text-[12px] uppercase tracking-wider text-white/80 font-semibold">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
