"use client";

import { useContent, useTranslation } from "./Language";
import Image from "next/image";

export function Artists() {
  const { confianza } = useContent();
  const t = useTranslation();

  return (
    <section id={confianza.id} className="section-gap bg-bone-gray">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">{t("Fixar / Proyectos acompañados")}</p>
        <div className="mt-20 grid gap-40 lg:grid-cols-12">
          <h2 className="text-section text-pure-ink lg:col-span-6">{confianza.title}</h2>
          <p className="max-w-[34rem] text-body text-pure-ink lg:col-span-6">{confianza.lead}</p>
        </div>
        <div className="mt-60 grid gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {confianza.people.map((artist) => (
            <article key={artist.name} className="border-t border-bone-gray pt-16">
              <div className="media-card relative aspect-square max-w-[190px] bg-cream-paper">
                <Image src={artist.image} alt={artist.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <h3 className="mt-16 label-mono text-pure-ink">{artist.name}</h3>
              <p className="mt-8 text-body-sm text-charcoal-press">{artist.role}</p>
            </article>
          ))}
        </div>
        <p className="mt-24 label-mono text-charcoal-press">{confianza.note}</p>
      </div>
    </section>
  );
}
