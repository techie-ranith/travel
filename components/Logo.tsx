"use client";

import type { SVGProps } from "react";
import { useLanguage } from "@/lib/i18n";

type LogoProps = {
  variant?: "light" | "dark";
};

function PaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.2 11.1 20.4 3.4c.7-.3 1.4.4 1.1 1.1l-7.7 17.2c-.3.7-1.3.7-1.6 0l-2.6-6.3-6.3-2.6c-.7-.3-.7-1.3 0-1.7Zm5.5 3.3 1.6 3.9 4.6-10.3-6.2 6.4Z" />
    </svg>
  );
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const { t, meta } = useLanguage();
  const title = variant === "light" ? "text-white" : "text-navy";
  const subtitle = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-sm">
        <PaperPlane className="h-5 w-5 translate-x-[1px] rtl:-translate-x-[1px]" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[22px] font-bold tracking-tight ${title}`}>
          Traveleo
        </span>
        <span
          className={`block text-[10px] font-semibold ${subtitle} ${
            meta.latin ? "tracking-[0.18em] uppercase" : "tracking-normal"
          }`}
        >
          {t.travelAgency}
        </span>
      </span>
    </a>
  );
}
