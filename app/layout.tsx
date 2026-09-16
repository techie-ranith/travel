import type { Metadata } from "next";
import {
  Great_Vibes,
  Inter,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
  Noto_Sans_SC,
  Noto_Sans_Sinhala,
  Noto_Sans_Tamil,
} from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const notoSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const notoSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Traveleo | Travel Agency",
  description:
    "Discover breathtaking destinations, unforgettable experiences, and exclusive travel deals with Traveleo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${greatVibes.variable} ${notoSinhala.variable} ${notoTamil.variable} ${notoDevanagari.variable} ${notoArabic.variable} ${notoSC.variable} lang-latin h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-foreground">
        <Script id="traveleo-locale" strategy="beforeInteractive">
          {`(function(){try{var l=localStorage.getItem("traveleo-locale");var m={en:["en","ltr","lang-latin"],si:["si","ltr","lang-si"],ta:["ta","ltr","lang-ta"],hi:["hi","ltr","lang-hi"],fr:["fr","ltr","lang-latin"],de:["de","ltr","lang-latin"],es:["es","ltr","lang-latin"],ar:["ar","rtl","lang-ar"],zh:["zh-CN","ltr","lang-zh"]};var v=m[l];if(!v)return;var h=document.documentElement;h.lang=v[0];h.dir=v[1];h.classList.remove("lang-latin","lang-si","lang-ta","lang-hi","lang-ar","lang-zh");h.classList.add(v[2]);}catch(e){}})();`}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
