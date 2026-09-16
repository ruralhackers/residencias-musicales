"use client";

import { useContent } from "./Language";
import Image from "next/image";
import { AnceuText } from "./AnceuText";
import { Logo3D } from "./Logo3D";

export function Hero() {
  const { hero } = useContent();

  return (
    <section id="top" className="bg-cream-paper pt-40 md:pt-60">
      <div className="page-shell">
        <p className="animate-rise label-mono text-pure-ink">
          <AnceuText text={hero.eyebrow} />
        </p>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-20">
          <h1 className="animate-rise min-w-0 whitespace-pre-line text-display-xl text-pure-ink">
            {hero.brand}
          </h1>
          <Logo3D />
        </div>

        <p className="animate-rise-delay-1 mt-24 max-w-[22ch] text-display text-pure-ink md:max-w-[28ch]">
          {hero.headline}
        </p>

        <div className="animate-rise-delay-2 mt-40 flex flex-wrap gap-x-40 gap-y-12 border-y border-bone-gray py-16 label-mono text-pure-ink">
          {hero.strip.map((item, index) => (
            <span key={item}>{index > 0 ? "● " : ""}{item}</span>
          ))}
        </div>

        <div className="mt-40 grid items-end gap-24 lg:grid-cols-2">
          <div>
            <p className="max-w-[32rem] text-body text-pure-ink">
              <AnceuText text={hero.support} />
            </p>
            <div className="media-card relative mt-24 aspect-[16/10] overflow-hidden">
              <Image
              src={hero.images.small.src}
              alt={hero.images.small.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            </div>
          </div>
          <div className="media-card relative aspect-[16/10] overflow-hidden">
            <Image
              src={hero.images.large.src}
              alt={hero.images.large.alt}
              fill
              className="object-cover object-[center_72%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
