"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success";

const FIELD_CLASS =
  "w-full rounded-md border border-rule bg-paper px-4 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // NOTE: no backend wired yet — same TODO as EnquiryForm.
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-rule bg-paper-raised p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-accent" size={34} />
        <h3 className="mt-3 font-display text-[19px] text-ink">Message sent</h3>
        <p className="mt-1.5 text-[14px] text-muted">We&apos;ll be in touch shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-[13px] font-medium text-ink">
          Name <span className="text-spice">*</span>
        </label>
        <input id="c-name" name="name" className={FIELD_CLASS} />
        {errors.name && <p className="mt-1.5 text-[12.5px] text-spice">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-[13px] font-medium text-ink">
          Email <span className="text-spice">*</span>
        </label>
        <input id="c-email" name="email" type="email" className={FIELD_CLASS} />
        {errors.email && <p className="mt-1.5 text-[12.5px] text-spice">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-[13px] font-medium text-ink">
          Message <span className="text-spice">*</span>
        </label>
        <textarea id="c-message" name="message" rows={4} className={FIELD_CLASS} />
        {errors.message && <p className="mt-1.5 text-[12.5px] text-spice">{errors.message}</p>}
      </div>
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
        className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-[14px] font-semibold text-white transition-shadow hover:shadow-lg disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={16} /> Sending…
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
