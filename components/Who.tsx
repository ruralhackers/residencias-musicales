import Image from "next/image";
import { who } from "@/content/site";
import { AnceuText } from "./AnceuText";

export function Who() {
  return (
    <section id={who.id} className="section-gap bg-bone-gray">
      <div className="page-shell grid items-center gap-40 lg:grid-cols-12 lg:gap-60">
        <div className="lg:col-span-6">
          <p className="label-mono text-pure-ink">06 / Organizadores</p>
          <h2 className="mt-20 text-section text-pure-ink">{who.title}</h2>
          <p className="mt-40 max-w-[34rem] text-body text-pure-ink">
            <AnceuText text={who.lead} />
          </p>
          <div className="mt-40 flex flex-wrap gap-10">
            {who.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-10 rounded-[var(--radius-buttons)] border border-pure-ink bg-transparent px-20 py-10 label-mono text-pure-ink transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="media-card relative aspect-[4/3] w-full max-w-[520px] bg-cream-paper lg:ml-auto">
            <Image
              src={who.image.src}
              alt={who.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
