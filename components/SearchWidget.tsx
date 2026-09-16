"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  Building2,
  CalendarDays,
  Car,
  MapPin,
  Package,
  Plane,
  Search,
  Ship,
  Users,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const tabIds = [
  { id: "flights", icon: Plane },
  { id: "hotels", icon: Building2 },
  { id: "packages", icon: Package },
  { id: "cruises", icon: Ship },
  { id: "cars", icon: Car },
] as const;

type TabId = (typeof tabIds)[number]["id"];

export default function SearchWidget() {
  const { t } = useLanguage();
  const [active, setActive] = useState<TabId>("flights");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const labels: Record<TabId, string> = {
    flights: t.search.flights,
    hotels: t.search.hotels,
    packages: t.search.packages,
    cruises: t.search.cruises,
    cars: t.search.cars,
  };

  function swapCities() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="rounded-2xl bg-white p-3 shadow-[0_18px_50px_rgba(13,27,76,0.14)] ring-1 ring-black/5 sm:p-5">
      <div className="mb-4 flex gap-1 overflow-x-auto pb-1">
        {tabIds.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-navy/80 hover:bg-surface"
              }`}
            >
              <Icon className="h-4 w-4" />
              {labels[tab.id]}
            </button>
          );
        })}
      </div>

      <form
        className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_auto_minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1fr)_auto]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="rounded-xl border border-slate-200 px-3 py-2.5 lg:rounded-none lg:border-0 lg:border-e lg:border-slate-200 lg:px-1 lg:py-1 lg:pe-4">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
            <MapPin className="h-3 w-3" />
            {t.search.from}
          </span>
          <input
            value={from}
            onChange={(event) => setFrom(event.target.value)}
            placeholder={t.search.cityPlaceholder}
            className="mt-0.5 w-full bg-transparent text-sm font-medium text-navy outline-none placeholder:text-slate-400"
          />
        </label>

        <div className="hidden justify-center lg:flex">
          <button
            type="button"
            onClick={swapCities}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-brand shadow-sm hover:bg-surface"
            aria-label={t.search.swapAria}
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        <label className="rounded-xl border border-slate-200 px-3 py-2.5 lg:rounded-none lg:border-0 lg:border-e lg:border-slate-200 lg:px-4 lg:py-1">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
            <MapPin className="h-3 w-3" />
            {t.search.to}
          </span>
          <input
            value={to}
            onChange={(event) => setTo(event.target.value)}
            placeholder={t.search.cityPlaceholder}
            className="mt-0.5 w-full bg-transparent text-sm font-medium text-navy outline-none placeholder:text-slate-400"
          />
        </label>

        <button
          type="button"
          onClick={swapCities}
          className="flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-medium text-brand lg:hidden"
        >
          <ArrowLeftRight className="h-4 w-4" />
          {t.search.swap}
        </button>

        <label className="rounded-xl border border-slate-200 px-3 py-2.5 lg:rounded-none lg:border-0 lg:border-e lg:border-slate-200 lg:px-4 lg:py-1">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
            <CalendarDays className="h-3 w-3" />
            {t.search.departure}
          </span>
          <input
            type="date"
            className="mt-0.5 w-full bg-transparent text-sm font-medium text-navy outline-none"
            aria-label={t.search.departure}
          />
        </label>

        <label className="rounded-xl border border-slate-200 px-3 py-2.5 lg:rounded-none lg:border-0 lg:border-e lg:border-slate-200 lg:px-4 lg:py-1">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
            <CalendarDays className="h-3 w-3" />
            {t.search.return}
          </span>
          <input
            type="date"
            className="mt-0.5 w-full bg-transparent text-sm font-medium text-navy outline-none"
            aria-label={t.search.return}
          />
        </label>

        <label className="rounded-xl border border-slate-200 px-3 py-2.5 lg:rounded-none lg:border-0 lg:px-4 lg:py-1">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted">
            <Users className="h-3 w-3" />
            {t.search.travelers}
          </span>
          <select
            defaultValue="2a1c"
            className="mt-0.5 w-full bg-transparent text-sm font-medium text-navy outline-none"
          >
            <option value="1a">{t.search.adults1}</option>
            <option value="2a">{t.search.adults2}</option>
            <option value="2a1c">{t.search.adults2Child1}</option>
            <option value="2a2c">{t.search.adults2Child2}</option>
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold whitespace-nowrap text-white shadow-sm transition hover:bg-navy md:col-span-2 lg:col-span-1"
        >
          {t.search.searchNow}
          <Search className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
