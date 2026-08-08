import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Enquiry | Purify Food & Spices",
  description: "Request a quote for dehydrated onion, garlic, vegetables or Indian spices from Purify Food & Spices Pvt Ltd.",
};

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        kicker="Enquiry"
        title="Tell us what you need — we'll do the rest."
        lede="Product spec, quantity and destination is all we need to get a quote moving. Our export team replies within one business day."
        image="/assets/hero-bg.png"
      />
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/bg-export.png"
            alt="Purify Foods export logistics"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/90" />
        </div>
        <div className="container-page relative z-10 max-w-[640px]">
          <div className="rounded-2xl border border-white/10 bg-paper p-8 shadow-2xl">
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
