"use client";

import { useContent, useTranslation } from "./Language";
import { useEffect, useState } from "react";

export function Header() {
  const { nav } = useContent();
  const t = useTranslation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-10 rounded-[var(--radius-pill)] bg-charcoal-press px-20 py-10 label-mono text-cream-paper transition-opacity hover:opacity-90"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden>●●</span>
        {open ? t("Cerrar") : "Menú"}
      </button>

      {open ? (
        <nav
          id="site-menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-cream-paper"
          aria-label="Principal"
        >
          <ul className="page-shell flex min-h-full flex-col justify-center gap-20 py-160">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-section leading-[1.15] text-pure-ink transition-opacity hover:opacity-60"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
