"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessTimeline({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <div ref={ref} className="relative">
      <div className={`absolute left-[19px] top-2 bottom-2 w-[2px] sm:left-[23px] ${dark ? "bg-white/20" : "bg-rule"}`}>
        <motion.div
          style={{ scaleY: lineHeight }}
          className="h-full w-full origin-top bg-accent"
        />
      </div>

      <ol className="space-y-12">
        {PROCESS_STEPS.map((step, i) => (
          <motion.li
            key={step.title}
            className="relative pl-14 sm:pl-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent font-mono text-[13px] font-semibold text-accent backdrop-blur-sm sm:h-12 sm:w-12 ${
                dark ? "bg-white/10" : "bg-paper"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`font-display text-[19px] ${dark ? "text-white" : "text-ink"}`}>{step.title}</h3>
            <p className={`mt-1.5 max-w-[56ch] text-[14.5px] ${dark ? "text-white/75" : "text-muted"}`}>{step.detail}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
