"use client";

import { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { destinationMedia } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import { useLanguage } from "@/lib/i18n";

export default function PopularDestinations() {
  const scroller = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  function scrollNext() {
    const node = scroller.current;
    if (!node) return;
    const rtl = document.documentElement.dir === "rtl";
    node.scrollBy({ left: rtl ? -260 : 260, behavior: "smooth" });
  }

  return (
    <section id="destinations" className="container-site scroll-mt-24 py-6 lg:py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-navy lg:text-[28px]">
          {t.destinations.title}
        </h2>
        <a
          href="#destinations"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          {t.destinations.viewAll}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </a>
      </div>

      <div className="relative">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {destinationMedia.map((destination) => {
            const copy = t.destinations[destination.id];
            return (
              <DestinationCard
                key={destination.id}
                name={copy.name}
                city={copy.city}
                duration={copy.duration}
                alt={copy.alt}
                price={destination.price}
                image={destination.image}
                perPerson={t.destinations.perPerson}
              />
            );
          })}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          className="absolute top-[88px] -end-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-lg ring-1 ring-black/5 hover:text-brand lg:-end-5"
          aria-label={t.destinations.next}
        >
          <ChevronRight className="h-5 w-5 rtl:rotate-180" />
        </button>
      </div>
    </section>
  );
}
