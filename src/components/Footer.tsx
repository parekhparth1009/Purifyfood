import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CERTIFICATIONS, CONTACT_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper border-t border-rule">
      <div className="absolute inset-0 -z-0 opacity-20">
        <Image src="/assets/cat-spices.png" alt="Indian Spices Background" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/90" />
      </div>
      <div className="container-page relative z-10 py-16 grid gap-12 md:grid-cols-[1.2fr_0.8fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/logo1.png" alt="Purify Food & Spices" width={40} height={40} className="object-contain" />
            <span className="font-mono text-[13px] tracking-[0.1em] uppercase font-bold">Purify Food &amp; Spices</span>
          </div>
          <p className="mt-4 max-w-[38ch] text-[14px] text-paper/70 leading-relaxed">
            Manufacturer and exporter of dehydrated onion, garlic, vegetables and Indian spices — processed at scale, certified at every step.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => (
              <span key={c.code} className="font-mono text-[10.5px] uppercase tracking-wide border border-paper/25 rounded px-2 py-1 text-paper/70">
                {c.code}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="kicker !text-paper/50">Quick Links</div>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[14px] text-paper/80 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="kicker !text-paper/50">Contact Us</div>
          <div className="mt-4 space-y-3 text-[13.5px] text-paper/80">
            <div>
              <strong className="text-white font-medium block text-[12px] uppercase tracking-wider text-accent">Office Address</strong>
              <p className="mt-0.5">{CONTACT_INFO.officeAddress}</p>
            </div>
            <div>
              <strong className="text-white font-medium block text-[12px] uppercase tracking-wider text-accent">Factory Address</strong>
              <p className="mt-0.5">{CONTACT_INFO.processHouseAddress}</p>
            </div>
            <div className="pt-1 flex flex-wrap gap-x-6 gap-y-2">
              <div>
                <strong className="text-white font-medium block text-[12px] uppercase tracking-wider text-accent">Sales</strong>
                {CONTACT_INFO.salesPhones.map((p) => (
                  <a key={p.value} href={`tel:${p.value}`} className="block hover:text-white transition-colors">
                    {p.display}
                  </a>
                ))}
              </div>
              <div>
                <strong className="text-white font-medium block text-[12px] uppercase tracking-wider text-accent">Support</strong>
                <a href={`tel:${CONTACT_INFO.supportPhone.value}`} className="block hover:text-white transition-colors">
                  {CONTACT_INFO.supportPhone.display}
                </a>
              </div>
            </div>
            <div className="pt-1">
              <strong className="text-white font-medium block text-[12px] uppercase tracking-wider text-accent">Email</strong>
              {CONTACT_INFO.emails.map((e) => (
                <a key={e.value} href={`mailto:${e.value}`} className="mr-4 hover:text-white transition-colors inline-block">
                  {e.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page py-5 flex flex-wrap gap-3 justify-between text-[12.5px] text-paper/50">
          <span>© {new Date().getFullYear()} Purify Foods and Spices Pvt. Ltd. All rights reserved.</span>
          <span>CIN / GST — on file</span>
        </div>
      </div>
    </footer>
  );
}
