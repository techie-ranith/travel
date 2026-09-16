"use client";

import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { testimonialMedia } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLanguage();
  const copy = {
    sarah: { quote: t.reviews.sarahQuote, location: t.reviews.sarahLocation },
    james: { quote: t.reviews.jamesQuote, location: t.reviews.jamesLocation },
    emily: { quote: t.reviews.emilyQuote, location: t.reviews.emilyLocation },
  };

  return (
    <section id="reviews" className="container-site scroll-mt-24 py-8 lg:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-navy lg:text-[28px]">
          {t.reviews.title}
        </h2>
        <a
          href="#reviews"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          {t.reviews.viewAll}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonialMedia.map((item) => {
          const text = copy[item.id];
          return (
            <article
              key={item.name}
              className="relative rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(13,27,76,0.08)] ring-1 ring-black/5"
            >
              <Quote className="absolute top-5 end-5 h-8 w-8 text-brand/20" />
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{item.name}</h3>
                  <p className="text-xs text-muted">{text.location}</p>
                </div>
              </div>
              <p
                className="mt-3 text-[15px] leading-none tracking-wide text-gold"
                aria-label={t.reviews.rating}
              >
                ★★★★★
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{text.quote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
