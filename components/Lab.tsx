"use client";

import { useContent, useTranslation } from "./Language";
import Image from "next/image";
import { AnceuText } from "./AnceuText";

export function Lab() {
  const { lab } = useContent();
  const t = useTranslation();

  return (
    <section id={lab.id} className="section-gap bg-bone-gray">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">{t("02 / El espacio · Anceu")}</p>
        <h2 className="mt-20 text-section text-pure-ink">{lab.title}</h2>
        <p className="mt-40 max-w-[32rem] text-body text-pure-ink">
          <AnceuText text={lab.lead} />
        </p>


        <div className="mt-60 grid gap-20 lg:grid-cols-3">
          {lab.modules.map((module) => (
            <article key={module.title} className="flex flex-col gap-16">
              <div className="media-card relative aspect-[4/3] bg-cream-paper">
                <Image
                  src={module.image.src}
                  alt={module.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div>
                <p className="label-mono text-pure-ink">
                  {module.title} ● {module.tag}
                </p>
                <p className="mt-10 text-body-sm text-pure-ink">
                  <AnceuText text={module.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
