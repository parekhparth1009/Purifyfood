import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process | Purify Food & Spices",
  description: "From raw material sourcing to export dispatch — the manufacturing process behind every batch.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="From the field to the shipping container."
        lede="Seven stages, each logged and tested, standing between raw material and a finished, export-ready product."
        image="/assets/bg-factory.png"
      />
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/bg-factory.png"
            alt="Purify Foods dehydration processing line"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/90" />
        </div>
        <div className="container-page relative z-10 max-w-[760px]">
          <ProcessTimeline dark />
        </div>
      </section>
    </>
  );
}
