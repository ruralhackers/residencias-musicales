"use client";

import { useContent, useTranslation } from "./Language";
import { AnceuText } from "./AnceuText";
import { FestivalVideo } from "./FestivalVideo";

export function About() {
  const { about } = useContent();
  const t = useTranslation();

  return (
    <section id={about.id} className="section-gap bg-cream-paper">
      <div className="page-shell grid gap-40 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label-mono text-pure-ink">{t("01 / La residencia")}</p>
          <figure className="mt-40 max-w-[380px] lg:mt-60 lg:pr-20">
            <FestivalVideo />
            <figcaption className="mt-16 border-t border-bone-gray pt-12 label-mono text-caption text-charcoal-press">
              Rural Hackers Fest 2024
            </figcaption>
          </figure>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-section text-pure-ink">{about.title}</h2>
          <p className="mt-40 max-w-[34rem] text-body text-pure-ink">{about.lead}</p>
          <p className="mt-20 max-w-[34rem] text-body text-pure-ink">
            <AnceuText text={about.body} />
          </p>
          <div className="mt-60 grid gap-40 md:grid-cols-3">
            {about.pillars.map((pillar) => (
              <article key={pillar.title} className="border-t border-bone-gray pt-20">
                <h3 className="label-mono text-pure-ink">{pillar.title}</h3>
                <p className="mt-16 text-body-sm text-pure-ink">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
