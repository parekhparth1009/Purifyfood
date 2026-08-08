import Image from "next/image";
import Reveal from "./Reveal";
import FactoryCarousel from "./FactoryCarousel";
import { USPS } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 text-paper">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg-factory.png"
          alt="Purify Foods Dehydration Processing Factory"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink/90" />
      </div>

      <div className="container-page relative z-10">
        <Reveal>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
            Why Work With Us
          </span>
          <h2 className="mt-3 max-w-[26ch] font-display text-[clamp(26px,3.2vw,36px)] text-white text-balance drop-shadow-sm">
            What buyers actually check for, built in from the start.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <FactoryCarousel />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USPS.map((usp, i) => (
            <Reveal key={usp.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:border-accent/50 hover:shadow-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-mono text-[13px] font-bold transition-transform duration-300 group-hover:scale-110 shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-white tracking-wide">{usp.title}</h3>
                <p className="mt-2.5 text-[14.5px] text-white/80 leading-relaxed">{usp.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
