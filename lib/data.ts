export const contact = {
  phone: "+1 234 567 8900",
  email: "info@traveleo.com",
};

export const navLinks = [
  { key: "home", href: "#home", active: true },
  { key: "destinations", href: "#destinations" },
  {
    key: "packages",
    href: "#packages",
    children: [
      { key: "beachHolidays", href: "#packages" },
      { key: "adventureTours", href: "#promo" },
      { key: "familyPackages", href: "#packages" },
    ],
  },
  {
    key: "tours",
    href: "#packages",
    children: [
      { key: "cityTours", href: "#tours" },
      { key: "cruiseTours", href: "#tours" },
      { key: "culturalTours", href: "#tours" },
    ],
  },
  {
    key: "pages",
    href: "#",
    children: [
      { key: "aboutUs", href: "#why" },
      { key: "faqs", href: "#guide" },
      { key: "gallery", href: "#destinations" },
    ],
  },
  { key: "blog", href: "#reviews" },
  { key: "contact", href: "#contact" },
] as const;

export const destinationMedia = [
  {
    id: "turkey",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "maldives",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "greece",
    price: 849,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "france",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bali",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const testimonialMedia = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "james",
    name: "James Anderson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "emily",
    name: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=2000&q=80";

export const promoImage =
  "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80";
