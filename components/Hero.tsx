"use client";

import Image from "next/image";
import { PlayCircle, Plane } from "lucide-react";
import { heroImage } from "@/lib/data";
import SearchWidget from "@/components/SearchWidget";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t, locale, meta } = useLanguage();

  return (
    <section id="home" className="relative">
      <div className="relative min-h-[560px] overflow-hidden lg:min-h-[620px]">
        <Image
          src={heroImage}
          alt={t.hero.imageAlt}
          fill
          priority
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/20" />

        <div className="container-site relative flex min-h-[560px] items-center pb-28 pt-12 lg:min-h-[620px] lg:pb-32">
          <div className="max-w-xl text-white">
            <p
              className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold text-gold ${
                meta.latin ? "tracking-[0.28em] uppercase" : "tracking-normal"
              }`}
            >
              {t.hero.eyebrow}
              <Plane className="h-3.5 w-3.5" />
            </p>
            <h1 className="text-4xl leading-[1.15] font-bold sm:text-5xl lg:text-[58px]">
              {t.hero.titleLine1}
              <br />
              {meta.latin ? (
                <>
                  {t.hero.titleLine2}{" "}
                  <span className="font-script text-[1.15em] font-normal text-gold italic">
                    {t.hero.titleAccent}
                  </span>
                </>
              ) : locale === "si" ? (
                <>
                  <span className="text-[1.05em] font-bold text-gold">
                    {t.hero.titleAccent}
                  </span>{" "}
                  {t.hero.titleLine2}
                </>
              ) : (
                <>
                  {t.hero.titleLine2}{" "}
                  <span className="text-[1.05em] font-bold text-gold">
                    {t.hero.titleAccent}
                  </span>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/80">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-sm transition hover:bg-gold-hover"
              >
                {t.hero.explorePackages}
                <Plane className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                  <PlayCircle className="h-6 w-6" />
                </span>
                <span className="leading-tight">
                  {t.hero.watchVideo}
                  <span className="block text-xs font-normal text-white/70">
                    {t.hero.howItWorks}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="absolute top-10 end-4 hidden h-[118px] w-[118px] items-center justify-center rounded-full bg-white text-center shadow-lg sm:flex lg:end-8 lg:top-16">
            <div>
              <p
                className={`text-[11px] font-semibold text-navy ${
                  meta.latin ? "tracking-widest uppercase" : ""
                }`}
              >
                {t.hero.getUpTo}
              </p>
              <p className="text-[28px] leading-none font-extrabold text-navy">
                30%
              </p>
              <p
                className={`mt-1 text-[11px] font-semibold text-navy ${
                  meta.latin ? "tracking-widest uppercase" : ""
                }`}
              >
                {t.hero.off}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="how-it-works"
        className="container-site relative z-20 -mt-24 scroll-mt-28 pb-4 lg:-mt-28"
      >
        <SearchWidget />
      </div>
    </section>
  );
}
