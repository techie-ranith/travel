function Badge({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex h-8 min-w-[52px] items-center justify-center rounded-md px-1.5 text-[10px] font-bold tracking-wide ${className}`}
      aria-label={label}
    >
      {children}
    </span>
  );
}

export function PaymentIcons() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Badge label="Visa" className="bg-white text-[#1a1f71]">
        VISA
      </Badge>
      <Badge label="Mastercard" className="bg-white">
        <span className="flex items-center">
          <span className="-mr-1.5 h-4 w-4 rounded-full bg-[#eb001b]" />
          <span className="h-4 w-4 rounded-full bg-[#f79e1b] opacity-90" />
        </span>
      </Badge>
      <Badge label="American Express" className="bg-[#2e77bc] text-white">
        AMEX
      </Badge>
      <Badge label="PayPal" className="bg-white text-[#003087]">
        PayPal
      </Badge>
      <Badge label="Apple Pay" className="bg-white text-black">
        Apple
      </Badge>
      <Badge label="Google Pay" className="bg-white text-[#4285f4]">
        G Pay
      </Badge>
    </div>
  );
}
