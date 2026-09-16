import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "ink" | "cream" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "ink",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-10 rounded-[var(--radius-buttons)] label-mono px-20 py-10 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pure-ink";

  const variants = {
    ink: "bg-pure-ink text-cream-paper",
    cream: "bg-cream-paper text-pure-ink",
    ghost: "bg-transparent text-pure-ink border border-bone-gray",
  };

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
