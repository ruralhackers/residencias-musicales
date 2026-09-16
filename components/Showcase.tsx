"use client";

import { useContent, useTranslation } from "./Language";
import Image from "next/image";

export function Showcase() {
  const { showcase } = useContent();
  const t = useTranslation();

  return (
    <section id={showcase.id} className="section-gap bg-bone-gray">
      <div className="page-shell grid items-end gap-40 lg:grid-cols-12 lg:gap-60">
        <div className="lg:col-span-5">
          <p className="label-mono text-pure-ink">{t("04 / El entorno")}</p>
          <h2 className="mt-20 text-section text-pure-ink">{showcase.title}</h2>
          <p className="mt-40 max-w-[34rem] text-body text-pure-ink">
            {showcase.lead}
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="media-card relative aspect-[3/2] bg-cream-paper">
            <Image
              src={showcase.image.src}
              alt={showcase.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
