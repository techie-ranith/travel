"use client";

import { Mail, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="bg-navy-mid">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
        <div className="flex items-start gap-4 text-white">
          <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Mail className="h-6 w-6 text-gold" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">{t.newsletter.title}</h2>
            <p className="mt-1 text-sm text-white/75">{t.newsletter.subtitle}</p>
          </div>
        </div>

        <form
          className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            {t.newsletter.email}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder={t.newsletter.placeholder}
            className="h-12 flex-1 rounded-lg bg-white px-4 text-sm text-navy outline-none ring-2 ring-transparent placeholder:text-slate-400 focus:ring-gold"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 text-sm font-semibold text-navy transition hover:bg-gold-hover"
          >
            {t.newsletter.subscribe}
            <Send className="h-4 w-4 -rotate-45" />
          </button>
        </form>
      </div>
    </section>
  );
}
