import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-ink pt-[90px] pb-16 text-paper">
      {image && (
        <div className="absolute inset-0 -z-0 opacity-25">
          <Image src={image} alt={title} fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        </div>
      )}
      <div className="container-page relative z-10 py-16">
        <Reveal>
          <span className="inline-block rounded-full border border-paper/20 bg-paper/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
            {kicker}
          </span>
          <h1 className="mt-4 max-w-[24ch] font-display text-[clamp(30px,4.6vw,46px)] leading-[1.1] text-white text-balance drop-shadow-sm">
            {title}
          </h1>
          {lede && <p className="mt-5 max-w-[62ch] text-[16.5px] text-paper/80 leading-relaxed">{lede}</p>}
        </Reveal>
      </div>
    </section>
  );
}
