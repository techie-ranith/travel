import Image from "next/image";
import { CalendarDays } from "lucide-react";

type DestinationCardProps = {
  name: string;
  city: string;
  duration: string;
  price: number;
  image: string;
  alt: string;
  perPerson: string;
};

export default function DestinationCard({
  name,
  city,
  duration,
  price,
  image,
  alt,
  perPerson,
}: DestinationCardProps) {
  return (
    <article className="min-w-[220px] snap-start overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(13,27,76,0.08)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(13,27,76,0.12)] lg:min-w-0">
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 70vw, 220px"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-navy">{name}</h3>
        <p className="text-sm text-muted">{city}</p>
        <div className="mt-3 flex items-end justify-between gap-2">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <CalendarDays className="h-3.5 w-3.5 text-brand" />
            {duration}
          </p>
          <p className="text-end">
            <span className="block text-lg leading-none font-bold text-brand">
              ${price}
            </span>
            <span className="text-[10px] text-muted">{perPerson}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
