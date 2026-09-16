"use client";

import { Headphones, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { socialLinks } from "@/components/BrandIcons";
import Logo from "@/components/Logo";
import { PaymentIcons } from "@/components/PaymentIcons";
import { useLanguage } from "@/lib/i18n";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/70 transition hover:text-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.aboutUs, href: "#why" },
    { label: t.nav.packages, href: "#packages" },
    { label: t.nav.destinations, href: "#destinations" },
    { label: t.nav.tours, href: "#tours" },
    { label: t.footer.contactUs, href: "#contact" },
  ];

  const topDestinations = [
    { label: t.destinations.maldives.name, href: "#destinations" },
    { label: t.destinations.bali.name, href: "#destinations" },
    { label: t.destinations.turkey.name, href: "#destinations" },
    { label: t.footer.europe, href: "#destinations" },
    { label: t.footer.thailand, href: "#destinations" },
  ];

  const travelGuide = [
    { label: t.footer.travelTips, href: "#guide" },
    { label: t.footer.visa, href: "#guide" },
    { label: t.nav.faqs, href: "#guide" },
    { label: t.footer.cancellation, href: "#guide" },
    { label: t.footer.privacy, href: "#privacy" },
  ];

  return (
    <footer id="contact" className="bg-navy-deep text-white">
      <div className="container-site grid grid-cols-2 gap-8 py-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <FooterLinks title={t.footer.quickLinks} links={quickLinks} />
        <FooterLinks title={t.footer.topDestinations} links={topDestinations} />
        <FooterLinks title={t.footer.travelGuide} links={travelGuide} />

        <div id="guide">
          <h3 className="mb-4 text-sm font-semibold text-white">
            {t.footer.support}
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              {contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              {contact.email}
            </li>
            <li className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-gold" />
              {t.footer.liveChat}
            </li>
            <li>{t.footer.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">
            {t.footer.weAccept}
          </h3>
          <PaymentIcons />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-gold">
              {t.footer.terms}
            </a>
            <a href="#privacy" className="hover:text-gold">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
