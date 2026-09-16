"use client";

import Image from "next/image";
import { Camera, Compass, Plane, Puzzle, Users } from "lucide-react";
import { promoImage } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function PromoSplit() {
  const { t } = useLanguage();
  const reasons = [
    { title: t.promo.guideTitle, description: t.promo.guideText, icon: Compass },
    {
      title: t.promo.packagesTitle,
      description: t.promo.packagesText,
      icon: Puzzle,
    },
    {
      title: t.promo.experiencesTitle,
      description: t.promo.experiencesText,
      icon: Camera,
    },
    { title: t.promo.trustedTitle, description: t.promo.trustedText, icon: Users },
  ];

  return (
    <section id="packages" className="container-site scroll-mt-24 py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="relative min-h-[320px] overflow-hidden rounded-2xl">
          <Image
            src={promoImage}
            alt={t.promo.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20 rtl:bg-gradient-to-l" />
          <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-center p-8 text-white lg:p-10">
            <span className="mb-4 inline-flex w-fit rounded-md border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
              {t.promo.specialOffer}
            </span>
            <h2 className="text-3xl font-bold lg:text-4xl">{t.promo.heading}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
              {t.promo.text}
            </p>
            <a
              href="#packages"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold"
            >
              {t.promo.exploreDeals}
              <Plane className="h-4 w-4" />
            </a>
          </div>
        </article>

        <article
          id="why"
          className="rounded-2xl bg-surface p-8 shadow-sm lg:p-10"
        >
          <h2 className="text-2xl font-bold text-navy lg:text-[28px]">
            {t.promo.whyTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-muted">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
