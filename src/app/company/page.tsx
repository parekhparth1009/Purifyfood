import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FactoryCarousel from "@/components/FactoryCarousel";
import { Factory, MapPin, ShieldCheck, FlaskConical, Eye, Target, Globe2 } from "lucide-react";
import { WELCOME_PARAGRAPHS, VISION_MISSION, STATS, EXPORT_COUNTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Company | Purify Food & Spices",
  description:
    "The story, vision, infrastructure and export reach of Purify Foods and Spices Pvt. Ltd. — dehydrated onion, garlic and spices, farm to world.",
};

const PORTS = ["Pipavav Port", "Mundra Port", "Kandla Port"];

const LAB_EQUIPMENT = ["Laminar Floor", "Microscope", "Colony Counter", "Autoclave", "PH Meters", "Distillation Plant"];

const CORE_VALUES = [
  { title: "Customer-Focused", detail: "Every process is built around what the buyer on the other end actually needs." },
  { title: "Quality and Value Oriented", detail: "Consistency and standards come before shortcuts, at every stage of production." },
  { title: "Honesty, Integrity and Respect", detail: "The basis for every relationship — with growers, staff and customers alike." },
  { title: "Employee Safety & Wellness", detail: "A safe, well-run facility is the foundation of a reliable product." },
  { title: "Information Driven", detail: "Decisions are backed by testing data and process records, not guesswork." },
  { title: "Natural is Better", detail: "Processing that preserves the ingredient, rather than working around it." },
] as const;

const VISION_MISSION_ICONS = { Vision: Eye, Mission: Target };

export default function CompanyPage() {
  return (
    <>
      <PageHero
        kicker="Purify Foods and Spices Pvt. Ltd."
        title="Dehydrated Onion, Garlic & Spices — Farm to World."
        lede="Rooted in a family with a strong background in trade and business, our journey reflects years of hands-on commitment to quality, reliability and customer trust."
        image="/assets/bg-farm.png"
      />

      <section className="border-t border-rule py-24">
        <div className="container-page max-w-[820px]">
          <Reveal>
            <span className="kicker">Welcome</span>
            <h2 className="mt-3 font-display text-[clamp(22px,3vw,30px)] text-ink text-balance">
              Welcome to Purify Foods and Spices
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {WELCOME_PARAGRAPHS.map((para, i) => (
              <Reveal key={para.slice(0, 24)} delay={i * 0.08}>
                <p className="text-[15px] leading-relaxed text-muted">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-raised py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2">
            {VISION_MISSION.map((item, i) => {
              const Icon = VISION_MISSION_ICONS[item.title as keyof typeof VISION_MISSION_ICONS];
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-rule bg-paper p-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={19} />
                    </div>
                    <h3 className="mt-5 font-display text-[19px] text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-rule py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center gap-3">
              <Globe2 className="text-accent" size={22} />
              <span className="kicker">Export — Global Reach</span>
            </div>
            <h2 className="mt-3 max-w-[40ch] font-display text-[clamp(24px,3vw,34px)] text-ink text-balance">
              Shipping to twelve countries, and counting.
            </h2>
            <p className="mt-4 max-w-[68ch] text-[15px] text-muted leading-relaxed">
              Purify Foods and Spices Pvt. Ltd. proudly exports its range of dehydrated onion, garlic and spice products to
              customers across the globe. We continue to expand our international footprint, guided by the same commitment to
              quality and reliability that has defined our journey from the start.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {EXPORT_COUNTRIES.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center gap-3 rounded-xl border border-rule bg-paper-raised px-4 py-3.5"
                >
                  <span className={`fi fi-${country.code} shrink-0 rounded-[3px] shadow-sm`} aria-hidden="true" />
                  <span className="text-[13.5px] font-medium text-ink">{country.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/bg-export.png"
            alt="Purify Foods global export logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/90" />
        </div>
        <div className="container-page relative z-10">
          <Reveal>
            <span className="font-mono text-[11.5px] uppercase tracking-wider text-accent">Our Journey</span>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="rounded-xl border border-white/20 bg-white/10 p-7 text-center backdrop-blur-md">
                  <div className="font-display text-[34px] text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-white/75">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <Factory className="text-accent" size={22} />
              <span className="kicker">Infrastructure Facility</span>
            </div>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              Our dedicated production facility runs at an annual capacity of 2,000 metric tonnes. As part of our ongoing
              growth, we are in the process of setting up our own cold storage facility, allowing us to maintain finished-product
              quality and ensure uninterrupted supply to our buyers throughout the year.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-lg border border-rule bg-paper-raised px-4 py-3">
                <div className="font-display text-[22px] text-ink">2,000 MT</div>
                <div className="mt-0.5 text-[12px] text-muted">Annual production capacity</div>
              </div>
              <div className="rounded-lg border border-rule bg-paper-raised px-4 py-3">
                <div className="font-display text-[16px] text-ink">Cold storage</div>
                <div className="mt-0.5 text-[12px] text-muted">Under development</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" size={22} />
              <span className="kicker">Location Advantages</span>
            </div>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              Our facility in Mahuva, Gujarat is strategically located close to three major ports, giving us a significant
              logistical advantage for timely, cost-effective exports to markets around the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {PORTS.map((port) => (
                <span key={port} className="rounded-full border border-rule bg-paper-raised px-4 py-2 text-[13px] font-medium text-ink">
                  {port}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-rule py-24">
        <div className="container-page max-w-[960px]">
          <Reveal>
            <span className="kicker">Inside the Facility</span>
            <h2 className="mt-3 max-w-[36ch] font-display text-[clamp(22px,3vw,30px)] text-ink text-balance">
              A look at our Mahuva production and export facility.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <FactoryCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-raised py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent" size={22} />
              <span className="kicker">Quality Control &amp; Standards</span>
            </div>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              We have upgraded our facility with three fully automatic colour sorters for optical colour sorting, helping us
              maintain product hygiene and achieve a superior, impurity-free end product. We continue to invest in our R&amp;D
              capabilities and adopt advanced day-to-day technology improvements to ensure the best possible product quality —
              enabling uniform quality standards and the availability of large quantities for shipment.
            </p>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              At Purify Food &amp; Spices, quality means producing safe and hygienic food products through an environment-friendly
              manufacturing process that preserves natural ingredients. Consistent quality is achieved through careful attention at
              every stage — from procuring the right raw material, to storage, packing of finished products and dispatch — all
              carried out in line with Good Manufacturing Practices (GMP).
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <FlaskConical className="text-accent" size={22} />
              <span className="kicker">Testing Facility</span>
            </div>
            <p className="mt-4 text-[15px] text-muted leading-relaxed">
              Quality is at the core of everything we produce. Our in-house testing laboratory analyses the physical, chemical
              and microbiological parameters of our products, helping us meet the stringent quality and food-safety requirements
              expected by our customers and international regulatory standards.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {LAB_EQUIPMENT.map((item) => (
                <span key={item} className="font-mono text-[11.5px] uppercase tracking-wide border border-rule rounded px-2.5 py-1.5 text-muted bg-paper">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-rule py-24">
        <div className="container-page">
          <Reveal>
            <span className="kicker">Core Values</span>
            <h2 className="mt-3 max-w-[36ch] font-display text-[clamp(24px,3vw,34px)] text-ink text-balance">
              What shapes our culture and every business decision.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-rule bg-paper-raised p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/40">
                  <h3 className="text-[16px] font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-[14px] text-muted">{value.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-14 max-w-[70ch] text-[15px] text-muted leading-relaxed border-t border-rule pt-8">
              These values are the foundation on which Purify Food &amp; Spices stands. They shape our culture, guide every
              business decision, and drive our continued commitment to delivering trusted, high-quality dehydrated products to
              customers worldwide.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
