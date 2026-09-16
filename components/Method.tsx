"use client";

import { useContent } from "./Language";
import Image from "next/image";
import { AnceuText } from "./AnceuText";

export function Method() {
  const { method } = useContent();

  return (
    <section id={method.id} className="section-gap bg-cream-paper">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">03 / Casas do pobo</p>
        <h2 className="mt-20 max-w-[22ch] text-section text-pure-ink">
          {method.title}
        </h2>
        <p className="mt-40 max-w-[34rem] text-body text-pure-ink">{method.lead}</p>

        <div className="mt-60 grid gap-20 md:grid-cols-2">
          {method.items.map((item) => (
            <article key={item.title}>
              <div className="media-card relative aspect-[4/3] bg-bone-gray">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className={
                    item.image.src.includes("mural")
                      ? "object-cover object-[center_70%]"
                      : "object-cover"
                  }
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-16 label-mono text-pure-ink">{item.title}</p>
              <p className="mt-10 text-body-sm text-pure-ink">
                <AnceuText text={item.text} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
