"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

const FIELD_CLASS =
  "w-full rounded-md border border-rule bg-paper px-4 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-accent";

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const presetProduct = searchParams.get("product") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!company) nextErrors.company = "Please enter your company name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Let us know what you're looking for.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // NOTE: no backend wired yet — replace with a POST to /api/enquiry (or a form service)
    // that emails the sales inbox and/or logs to a CRM/sheet, per PRD section 10.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-rule bg-paper-raised p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-accent" size={40} />
        <h3 className="mt-4 font-display text-[22px] text-ink">Enquiry received</h3>
        <p className="mt-2 text-[14.5px] text-muted">
          Thank you — our export team will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors.name} required />
        <Field label="Company Name" name="company" error={errors.company} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" error={errors.email} required />
        <Field label="Phone (with country code)" name="phone" type="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Country" name="country" />
        <div>
          <label htmlFor="product" className="mb-1.5 block text-[13px] font-medium text-ink">
            Product of Interest
          </label>
          <select id="product" name="product" defaultValue={presetProduct} className={FIELD_CLASS}>
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Field label="Estimated Quantity" name="quantity" placeholder="e.g. 5 MT / month" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink">
          Message <span className="text-spice">*</span>
        </label>
        <textarea id="message" name="message" rows={5} className={FIELD_CLASS} />
        {errors.message && <p className="mt-1.5 text-[12.5px] text-spice">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
        className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-[14.5px] font-semibold text-white transition-shadow hover:shadow-lg disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={17} /> Sending…
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Submit Enquiry
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-medium text-ink">
        {label} {required && <span className="text-spice">*</span>}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} className={FIELD_CLASS} />
      {error && <p className="mt-1.5 text-[12.5px] text-spice">{error}</p>}
    </div>
  );
}
