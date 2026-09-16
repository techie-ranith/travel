"use client";

import { BadgeCheck, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const badgeMeta = [
  { key: "price", icon: BadgeCheck },
  { key: "support", icon: Headphones },
  { key: "hotels", icon: Sparkles },
  { key: "booking", icon: ShieldCheck },
] as const;

export default function TrustBadges() {
  const { t } = useLanguage();
  const copy = {
    price: { title: t.trust.priceTitle, subtitle: t.trust.priceSubtitle },
    support: { title: t.trust.supportTitle, subtitle: t.trust.supportSubtitle },
    hotels: { title: t.trust.hotelsTitle, subtitle: t.trust.hotelsSubtitle },
    booking: { title: t.trust.bookingTitle, subtitle: t.trust.bookingSubtitle },
  };

  return (
    <section className="container-site py-10 lg:py-14">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {badgeMeta.map((badge) => {
          const Icon = badge.icon;
          const text = copy[badge.key];
          return (
            <div key={badge.key} className="flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-navy">{text.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-muted">
                  {text.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
