import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CERTIFICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Quality | Purify Food & Spices",
  description: "Certifications, lab testing parameters and quality systems behind every batch of Purify Food & Spices product.",
};

const TEST_PARAMETERS = [
  { label: "Moisture Content", detail: "Verified against product-specific shelf-life thresholds." },
  { label: "Colour Value (ASTA / Visual)", detail: "Checked to hold consistent colour batch to batch." },
  { label: "Microbial Limits", detail: "Total plate count, yeast & mould, and pathogen screening." },
  { label: "Foreign Matter & Impurities", detail: "Screened post optical colour-sorting, pre-packing." },
  { label: "Granulation / Mesh Size", detail: "Sieve-verified against the ordered cut or mesh spec." },
  { label: "Pesticide Residue", detail: "Tested against destination-market MRL requirements on request." },
] as const;

export default function QualityPage() {
  return (
    <>
      <PageHero
        kicker="Quality"
        title="Seven certifications, one in-house testing lab."
        lede="Every certification the company holds, what it actually covers, and the parameters our lab checks before a batch is cleared for packing."
        image="/assets/bg-quality.png"
      />

      <section className="border-t border-rule py-24">
        <div className="container-page">
          <Reveal>
            <span className="kicker">Certifications</span>
            <h2 className="mt-3 max-w-[32ch] font-display text-[clamp(22px,3vw,30px)] text-ink text-balance">
              What each mark certifies
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.code} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-rule bg-paper-raised p-6">
                  <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-paper p-4">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={280}
                      height={160}
                      className="h-full max-h-36 w-auto object-contain"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[16.5px] text-ink">{cert.name}</h3>
                  <p className="mt-1.5 text-[13.5px] text-muted">{cert.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[70ch] text-[13.5px] text-muted">
              Certificate copies are available on request during vendor evaluation —{" "}
              <Link href="/enquiry" className="text-teal underline underline-offset-2">
                request documentation
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-raised py-24">
        <div className="container-page">
          <Reveal>
            <span className="kicker">In-House Testing</span>
            <h2 className="mt-3 max-w-[36ch] font-display text-[clamp(22px,3vw,30px)] text-ink text-balance">
              What we check before a batch is cleared
            </h2>
            <p className="mt-4 max-w-[64ch] text-[15px] text-muted">
              Our lab is equipped with a Laminar Floor, Microscope, Colony Counter, Autoclave, PH Meters and Distillation Plant —
              the standard requirement for a food processing unit testing to export-market standards.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEST_PARAMETERS.map((param, i) => (
              <Reveal key={param.label} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-rule bg-paper p-6">
                  <h3 className="text-[15px] font-semibold text-ink">{param.label}</h3>
                  <p className="mt-2 text-[13.5px] text-muted">{param.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
