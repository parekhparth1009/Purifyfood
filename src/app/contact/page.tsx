import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, MessageCircle, Building2, Factory } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Purify Food & Spices",
  description: "Reach Purify Food & Spices Pvt Ltd — Mahuva, Gujarat, India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Mahuva, Gujarat — reachable by phone, email or WhatsApp."
        lede="Close to Pipavav, Mundra and Kandla ports, and easy to reach for sales inquiries, support, or a factory visit."
        image="/assets/cat-spices.png"
      />

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/cat-garlic.png"
            alt="Purify Foods garlic sourcing"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.32] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/90" />
        </div>

        <div className="container-page relative z-10 grid gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <Building2 className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">Office Address</div>
                    <div className="mt-1 text-[15px] font-semibold text-white">{CONTACT_INFO.officeAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <Factory className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">Process House Address</div>
                    <div className="mt-1 text-[15px] font-semibold text-white">{CONTACT_INFO.processHouseAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <Phone className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">Sales &amp; Business Phone</div>
                    <div className="mt-1 space-y-1">
                      {CONTACT_INFO.salesPhones.map((p) => (
                        <a key={p.value} href={`tel:${p.value}`} className="block text-[15px] font-semibold text-white hover:text-accent transition-colors">
                          {p.display} (Sales)
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <Phone className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">Support Phone</div>
                    <a href={`tel:${CONTACT_INFO.supportPhone.value}`} className="mt-1 block text-[15px] font-semibold text-white hover:text-accent transition-colors">
                      {CONTACT_INFO.supportPhone.display} (Support)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <Mail className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">Email Addresses</div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                      {CONTACT_INFO.emails.map((e) => (
                        <a key={e.value} href={`mailto:${e.value}`} className="text-[15px] font-semibold text-white hover:text-accent transition-colors">
                          {e.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <MessageCircle className="mt-0.5 shrink-0 text-accent" size={20} />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-white/60">WhatsApp Support</div>
                    <a
                      href="https://wa.me/918200839798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent hover:underline"
                    >
                      Chat with sales &amp; export team on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/15">
                <iframe
                  title="Purify Food & Spices facility location — Mahuva, Gujarat"
                  src="https://www.google.com/maps?q=Behind+Hanumant+High+School,+Mahuva,+Gujarat+364290&output=embed"
                  className="h-[220px] w-full grayscale-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-paper p-8 shadow-2xl">
              <h2 className="font-display text-[20px] text-ink">Send a message</h2>
              <p className="mt-1.5 text-[14px] text-muted">
                For product enquiries with a quantity or spec, use the{" "}
                <a href="/enquiry" className="text-teal underline underline-offset-2">
                  Enquiry form
                </a>{" "}
                instead — it routes straight to our export team.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
