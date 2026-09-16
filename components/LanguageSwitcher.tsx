"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  localeCodes,
  localeMeta,
  regionOrder,
  type Locale,
} from "@/lib/locales/config";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export default function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t, meta } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const grouped = regionOrder
    .map((region) => ({
      region,
      label: t.regions[region],
      options: localeCodes
        .map((code) => localeMeta[code])
        .filter((item) => item.region === region),
    }))
    .filter((group) => group.options.length > 0);

  function selectLocale(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-navy/15 bg-white px-2.5 text-navy transition hover:bg-surface ${
          compact ? "h-8" : "h-10"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language}
      >
        <Globe className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        <span className="text-xs font-semibold">{meta.shortName}</span>
        <span className="hidden max-w-[88px] truncate text-xs font-medium sm:inline">
          {meta.nativeName}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          className="absolute end-0 z-50 mt-2 max-h-[min(70vh,28rem)] w-[min(18rem,calc(100vw-2rem))] overflow-y-auto rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/8"
          role="listbox"
          aria-label={t.language}
        >
          {grouped.map((group) => (
            <div key={group.region} className="px-2 py-1">
              <p className="px-2 pb-1 text-[10px] font-semibold tracking-wide text-muted uppercase">
                {group.label}
              </p>
              {group.options.map((option) => {
                const selected = option.code === locale;
                return (
                  <button
                    key={option.code}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => selectLocale(option.code)}
                    className={`flex w-full items-center justify-between rounded-lg px-2 py-2 text-start text-sm transition ${
                      selected
                        ? "bg-brand/10 font-semibold text-brand"
                        : "text-navy hover:bg-surface"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-8 text-[11px] font-semibold text-muted">
                        {option.shortName}
                      </span>
                      {option.nativeName}
                    </span>
                    {selected ? <Check className="h-4 w-4" /> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
