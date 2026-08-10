import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CATEGORIES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  "white-onion": "/assets/products/real/white-hero.jpg",
  "red-onion": "/assets/products/real/red-hero.jpg",
  "pink-onion": "/assets/products/real/pink-kibbled.jpg",
  "toasted-onion": "/assets/products/real/toasted-powder.jpg",
  "fried-onion": "/assets/products/real/fried-fresh.jpg",
  garlic: "/assets/products/real/garlic-hero.jpg",
  vegetables: "/assets/products/real/veg-tomato.jpg",
  spices: "/assets/products/ALL SPICES/Spices.JPG",
};

function getVariantImage(categorySlug: string, variantName: string): string {
  const v = variantName.toLowerCase();
  if (categorySlug === "white-onion") {
    if (v.includes("kibbled")) return "/assets/products/real/white-kibbled.jpg";
    if (v.includes("chopped")) return "/assets/products/real/white-chopped.jpg";
    if (v.includes("2–4") || v.includes("2-4")) return "/assets/products/real/white-minced.jpg";
    if (v.includes("1–3") || v.includes("1-3")) return "/assets/products/real/white-minced.jpg";
    if (v.includes("1–2") || v.includes("1-2")) return "/assets/products/real/white-granules.jpg";
    if (v.includes("0.5–1") || v.includes("0.5-1")) return "/assets/products/real/white-granules.jpg";
    if (v.includes("0.3–0.8") || v.includes("0.3-0.8")) return "/assets/products/real/white-granules.jpg";
    if (v.includes("0.2–0.5") || v.includes("0.2-0.5")) return "/assets/products/real/white-granules.jpg";
    if (v.includes("40–80") || v.includes("40-80")) return "/assets/products/real/white-granules.jpg";
    if (v.includes("80–100") || v.includes("80-100")) return "/assets/products/real/white-powder.jpg";
    if (v.includes("100–120") || v.includes("100-120")) return "/assets/products/real/white-powder.jpg";
    return "/assets/products/real/white-kibbled.jpg";
  }
  if (categorySlug === "red-onion") {
    if (v.includes("kibbled")) return "/assets/products/real/red-kibbled.jpg";
    if (v.includes("chopped")) return "/assets/products/real/red-chopped.jpg";
    if (v.includes("minced")) return "/assets/products/real/red-minced.jpg";
    if (v.includes("granules")) return "/assets/products/real/red-granules.jpg";
    if (v.includes("powder")) return "/assets/products/real/red-powder.jpg";
    return "/assets/products/real/red-kibbled.jpg";
  }
  if (categorySlug === "pink-onion") {
    if (v.includes("kibbled")) return "/assets/products/real/pink-kibbled.jpg";
    if (v.includes("chopped")) return "/assets/products/real/pink-chopped.jpg";
    if (v.includes("minced")) return "/assets/products/real/pink-minced.jpg";
    if (v.includes("granules")) return "/assets/products/real/pink-granules.jpg";
    if (v.includes("powder")) return "/assets/products/real/pink-powder.jpg";
    return "/assets/products/real/pink-kibbled.jpg";
  }
  if (categorySlug === "toasted-onion") {
    if (v.includes("kibbled")) return "/assets/products/real/toasted-powder.jpg";
    if (v.includes("chopped")) return "/assets/products/real/toasted-powder.jpg";
    if (v.includes("minced")) return "/assets/products/real/toasted-powder.jpg";
    if (v.includes("granules")) return "/assets/products/real/toasted-powder.jpg";
    if (v.includes("light")) return "/assets/products/real/toasted-powder.jpg";
    if (v.includes("dark")) return "/assets/products/real/toasted-powder.jpg";
    return "/assets/products/real/toasted-powder.jpg";
  }
  if (categorySlug === "fried-onion") {
    if (v.includes("fresh")) return "/assets/products/real/fried-fresh.jpg";
    if (v.includes("coated")) return "/assets/products/real/fried-coated.jpg";
    if (v.includes("gluten")) return "/assets/products/real/fried-glutenfree.jpg";
    if (v.includes("palm")) return "/assets/products/real/fried-palm.jpg";
    if (v.includes("sunflower")) return "/assets/products/real/fried-palm.jpg";
    return "/assets/products/real/fried-fresh.jpg";
  }
  if (categorySlug === "garlic") {
    if (v.includes("kibbled")) return "/assets/products/real/garlic-kibbled.jpg";
    if (v.includes("chopped")) return "/assets/products/real/garlic-chopped.jpg";
    if (v.includes("minced")) return "/assets/products/real/garlic-minced.jpg";
    if (v.includes("granules")) return "/assets/products/real/garlic-granules.jpg";
    if (v.includes("powder")) return "/assets/products/real/garlic-powder.jpg";
    return "/assets/products/real/garlic-kibbled.jpg";
  }
  if (categorySlug === "vegetables") {
    if (v.includes("potato flakes")) return "/assets/prod-vegetables.png";
    if (v.includes("potato powder")) return "/assets/prod-vegetables.png";
    if (v.includes("beetroot")) return "/assets/prod-vegetables.png";
    if (v.includes("tomato")) return "/assets/products/real/veg-tomato.jpg";
    if (v.includes("spinach")) return "/assets/prod-vegetables.png";
    if (v.includes("carrot")) return "/assets/prod-vegetables.png";
    if (v.includes("cabbage")) return "/assets/prod-vegetables.png";
    if (v.includes("chilli")) return "/assets/products/real/veg-green-chilli.jpg";
    if (v.includes("ginger")) return "/assets/products/real/veg-ginger.jpg";
    if (v.includes("curry")) return "/assets/prod-vegetables.png";
    if (v.includes("mint")) return "/assets/products/real/veg-mint.jpg";
    if (v.includes("coriander")) return "/assets/prod-vegetables.png";
    return "/assets/prod-vegetables.png";
  }
  if (categorySlug === "spices") {
    if (v.includes("cumin")) return "/assets/products/real/spice-cumin.jpg";
    if (v.includes("coriander")) return "/assets/products/real/spice-coriander.jpg";
    if (v.includes("fenugreek")) return "/assets/prod-spices.png";
    if (v.includes("cloves")) return "/assets/prod-spices.png";
    if (v.includes("cardamom")) return "/assets/prod-spices.png";
    if (v.includes("chilli")) return "/assets/products/real/spice-chilli.jpg";
    if (v.includes("turmeric")) return "/assets/products/real/spice-turmeric.jpg";
    if (v.includes("amchur")) return "/assets/products/real/spice-amchur.jpg";
    if (v.includes("cinnamon")) return "/assets/products/real/spice-cinnamon.jpg";
    return "/assets/prod-spices.png";
  }
  return "/assets/products/real/spices-hero.jpg";
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: `${category.name} | Purify Food & Spices`,
    description: category.blurb,
  };
}

export default function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) notFound();

  // Combine items & flat into display cuts
  const allVariants = category.items.length > 0
    ? category.items.flatMap((item) => item.variants.map((v) => ({ parentName: item.name, variantName: v })))
    : category.flat?.map((v) => ({ parentName: category.name, variantName: v })) || [];

  return (
    <>
      <PageHero kicker={category.tagline} title={category.name} lede={category.blurb} image={CATEGORY_HERO_IMAGES[category.slug]} />

      <section className="border-t border-rule py-20">
        <div className="container-page">
          {/* Cut / mesh-size selection summary */}
          <Reveal>
            <div className="rounded-2xl bg-paper-raised border border-rule p-8 shadow-sm">
              <h2 className="font-display text-[26px] font-bold text-ink">{category.name}</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {allVariants.map((item) => (
                  <span
                    key={item.variantName}
                    className="inline-block rounded-xl bg-paper border border-rule px-4 py-2.5 font-sans text-[13.5px] font-medium text-ink shadow-sm transition-all hover:shadow-md"
                  >
                    {item.variantName}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Product Cards Grid with Studio Wooden Bowl Photography (matching Screenshot 2) */}
          <div className="mt-16">
            <Reveal delay={0.1}>
              <h3 className="font-mono text-[12px] font-bold uppercase tracking-widest text-accent mb-6">
                Product Cuts &amp; Mesh Specifications
              </h3>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allVariants.map((item, i) => {
                const imgSrc = getVariantImage(category.slug, item.variantName);
                const fullTitle = `${item.parentName} ${item.variantName}`;
                return (
                  <Reveal key={item.variantName} delay={i * 0.05}>
                    <div className="group block h-full rounded-2xl bg-paper border border-rule p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-paper-raised border border-rule flex items-center justify-center">
                        <Image
                          src={imgSrc}
                          alt={fullTitle}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.08]"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h4 className="font-display text-[15.5px] font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                          {fullTitle}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-rule bg-ink px-8 py-8 text-paper shadow-lg">
              <div>
                <h3 className="font-display text-[19px]">Need a spec or mesh size we haven&apos;t listed?</h3>
                <p className="mt-1.5 text-[14px] text-paper/70">
                  Custom cuts, mesh sizes and export packaging are available against your required order quantity.
                </p>
              </div>
              <Link
                href={`/enquiry?product=${category.slug}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-6 py-3.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Enquire About This Product <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
