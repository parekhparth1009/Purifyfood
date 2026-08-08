"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Certifications() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden border-t border-rule bg-paper-raised py-20">
      <div className="container-page relative z-10">
        <Reveal>
          <div className="text-center">
            <span className="kicker">Certifications</span>
            <h2 className="mt-3 font-display text-[clamp(28px,3.5vw,38px)] text-ink drop-shadow-sm">
              Our Certificates
            </h2>
            <p className="mt-2 text-[14.5px] text-muted max-w-[48ch] mx-auto">
              Certified food safety, quality management and international export compliance at every stage.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.code} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setActive(active === cert.code ? null : cert.code)}
                className={`w-full group relative rounded-2xl bg-paper p-6 shadow-sm border border-rule flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                  active === cert.code ? "ring-2 ring-accent shadow-xl" : ""
                }`}
              >
                <div className="relative h-28 w-full flex items-center justify-center overflow-hidden p-3 bg-paper rounded-xl">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={240}
                    height={110}
                    className="max-h-24 max-w-[90%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-display text-[15.5px] font-bold text-ink group-hover:text-accent transition-colors">
                    {cert.name}
                  </h3>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: active === cert.code ? "auto" : 0, opacity: active === cert.code ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden w-full"
                >
                  <p className="mt-3 pt-3 border-t border-rule text-[13px] text-muted leading-relaxed">
                    {cert.detail}
                  </p>
                </motion.div>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-[12px] uppercase tracking-wider text-muted">
          Click any certificate badge for compliance details. Documentation available on request.
        </p>
      </div>
    </section>
  );
}
