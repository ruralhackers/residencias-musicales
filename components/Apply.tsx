"use client";

import { useContent, useTranslation } from "./Language";
import { Button } from "./Button";

export function Apply() {
  const { apply } = useContent();
  const t = useTranslation();

  return (
    <section id={apply.id} className="section-gap bg-cream-paper pb-160">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">{t("07 / Hablemos")}</p>
        <h2 className="mt-20 text-section text-pure-ink">{apply.title}</h2>

        <div className="mt-60 grid gap-40 md:grid-cols-2">
          {apply.audiences.map((audience, index) => (
            <article key={audience.title} className="flex flex-col border-t border-pure-ink pt-20">
              <p className="label-mono text-charcoal-press">0{index + 1}</p>
              <h3 className="mt-16 label-mono text-pure-ink">{audience.title}</h3>
              <p className="mt-16 text-body-sm text-pure-ink">{audience.text}</p>
              <Button href={audience.href} variant="ink" className="mt-24 w-fit">
                {audience.label}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
