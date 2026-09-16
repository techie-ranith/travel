"use client";

import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  X,
} from "lucide-react";
import { contact, navLinks } from "@/lib/data";
import { socialLinks } from "@/components/BrandIcons";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";
import type { Translation } from "@/lib/translations";

type NavKey = keyof Translation["nav"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <div className="hidden bg-[#f3f5f8] text-[13px] text-navy md:block">
        <div className="container-site flex h-10 items-center justify-between gap-4">
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5 text-brand" />
              {contact.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {t.footer.address}
            </span>
          </div>
          <div className="ms-auto flex items-center gap-3">
            <span className="hidden text-muted sm:inline">{t.followUs}</span>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-navy/80 transition hover:text-brand"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-10 items-center justify-end gap-3 bg-[#f3f5f8] px-4 md:hidden">
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-muted">{t.followUs}</span>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-navy/80"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white shadow-[0_4px_20px_rgba(13,27,76,0.06)]">
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.key} className="group relative">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition xl:text-[15px] ${
                    "active" in link && link.active
                      ? "text-brand"
                      : "text-navy hover:text-brand"
                  }`}
                >
                  {t.nav[link.key as NavKey]}
                  {"children" in link ? (
                    <ChevronDown className="h-3.5 w-3.5 text-muted" />
                  ) : null}
                </a>
                {"active" in link && link.active ? (
                  <span className="absolute -bottom-1 start-0 h-0.5 w-full rounded bg-brand" />
                ) : null}
                {"children" in link ? (
                  <div className="invisible absolute start-0 top-full z-40 min-w-[180px] translate-y-2 rounded-xl bg-white py-2 opacity-0 shadow-lg ring-1 ring-black/5 transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                    {link.children.map((child) => (
                      <a
                        key={child.key}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-surface hover:text-brand"
                      >
                        {t.nav[child.key as NavKey]}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher compact />
            <a
              href="#wishlist"
              className="hidden items-center gap-1.5 text-[15px] font-medium text-navy hover:text-brand xl:flex"
            >
              <Heart className="h-4 w-4" />
              {t.wishlist}
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-mid sm:px-4"
            >
              {t.bookNow}
              <Plane className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? t.closeMenu : t.openMenu}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-black/5 bg-white lg:hidden">
            <div className="container-site flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <div key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      "active" in link && link.active
                        ? "bg-brand/10 text-brand"
                        : "text-navy hover:bg-surface"
                    }`}
                  >
                    {t.nav[link.key as NavKey]}
                  </a>
                  {"children" in link
                    ? link.children.map((child) => (
                        <a
                          key={child.key}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg py-2 ps-6 text-sm text-muted hover:text-brand"
                        >
                          {t.nav[child.key as NavKey]}
                        </a>
                      ))
                    : null}
                </div>
              ))}
              <a
                href="#wishlist"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-surface"
              >
                <Heart className="h-4 w-4" />
                {t.wishlist}
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}
