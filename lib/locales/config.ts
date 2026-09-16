export const localeCodes = [
  "en",
  "si",
  "ta",
  "hi",
  "fr",
  "de",
  "es",
  "ar",
  "zh",
] as const;

export type Locale = (typeof localeCodes)[number];

export type RegionId =
  | "international"
  | "southAsia"
  | "europe"
  | "middleEast"
  | "eastAsia";

export type LocaleMeta = {
  code: Locale;
  htmlLang: string;
  nativeName: string;
  shortName: string;
  region: RegionId;
  dir: "ltr" | "rtl";
  fontClass: string;
  latin: boolean;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: {
    code: "en",
    htmlLang: "en",
    nativeName: "English",
    shortName: "EN",
    region: "international",
    dir: "ltr",
    fontClass: "lang-latin",
    latin: true,
  },
  si: {
    code: "si",
    htmlLang: "si",
    nativeName: "සිංහල",
    shortName: "සිං",
    region: "southAsia",
    dir: "ltr",
    fontClass: "lang-si",
    latin: false,
  },
  ta: {
    code: "ta",
    htmlLang: "ta",
    nativeName: "தமிழ்",
    shortName: "த",
    region: "southAsia",
    dir: "ltr",
    fontClass: "lang-ta",
    latin: false,
  },
  hi: {
    code: "hi",
    htmlLang: "hi",
    nativeName: "हिन्दी",
    shortName: "हिं",
    region: "southAsia",
    dir: "ltr",
    fontClass: "lang-hi",
    latin: false,
  },
  fr: {
    code: "fr",
    htmlLang: "fr",
    nativeName: "Français",
    shortName: "FR",
    region: "europe",
    dir: "ltr",
    fontClass: "lang-latin",
    latin: true,
  },
  de: {
    code: "de",
    htmlLang: "de",
    nativeName: "Deutsch",
    shortName: "DE",
    region: "europe",
    dir: "ltr",
    fontClass: "lang-latin",
    latin: true,
  },
  es: {
    code: "es",
    htmlLang: "es",
    nativeName: "Español",
    shortName: "ES",
    region: "europe",
    dir: "ltr",
    fontClass: "lang-latin",
    latin: true,
  },
  ar: {
    code: "ar",
    htmlLang: "ar",
    nativeName: "العربية",
    shortName: "عر",
    region: "middleEast",
    dir: "rtl",
    fontClass: "lang-ar",
    latin: false,
  },
  zh: {
    code: "zh",
    htmlLang: "zh-CN",
    nativeName: "中文",
    shortName: "中",
    region: "eastAsia",
    dir: "ltr",
    fontClass: "lang-zh",
    latin: false,
  },
};

export const regionOrder: RegionId[] = [
  "international",
  "southAsia",
  "europe",
  "middleEast",
  "eastAsia",
];

export function isLocale(value: string | null): value is Locale {
  return localeCodes.includes(value as Locale);
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  for (const candidate of candidates) {
    if (candidate.startsWith("zh")) return "zh";
    if (candidate.startsWith("ar")) return "ar";
    if (candidate.startsWith("si")) return "si";
    if (candidate.startsWith("ta")) return "ta";
    if (candidate.startsWith("hi")) return "hi";
    if (candidate.startsWith("fr")) return "fr";
    if (candidate.startsWith("de")) return "de";
    if (candidate.startsWith("es")) return "es";
    if (candidate.startsWith("en")) return "en";
  }

  return "en";
}

export const fontClasses = [
  "lang-latin",
  "lang-si",
  "lang-ta",
  "lang-hi",
  "lang-ar",
  "lang-zh",
];
