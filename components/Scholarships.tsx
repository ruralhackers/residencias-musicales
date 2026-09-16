"use client";

import { useTranslation } from "./Language";
import Image from "next/image";

export function Scholarships() {
  const t = useTranslation();

  return (
    <section id="experiencia" className="section-gap bg-cream-paper">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">{t("06 / Nuestra trayectoria")}</p>
        <h2 className="mt-20 text-section text-pure-ink">{t("Las residencias están en nuestro ADN")}</h2>
        <p className="mt-24 max-w-[42rem] text-body-sm text-pure-ink">{t("En Rural Hackers acogemos artistas, acompañamos su trabajo y conectamos sus proyectos con la vida de las aldeas. Las residencias musicales continúan ese recorrido.")}</p>
        <div className="mt-40 grid gap-40 md:grid-cols-2">
          <article className="border-t border-bone-gray pt-20">
            <h3 className="label-mono text-pure-ink">
              <a href="https://ruralhackers.com/2025-2/" target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-60">
                Culture Moves Europe
              </a>
            </h3>
            <p className="mt-16 max-w-[34rem] text-body-sm text-pure-ink">{t("Dos ediciones de residencias artísticas internacionales acogidas en Anceu, en el marco de Europa Creativa, con financiación de la Unión Europea y gestión de Goethe-Institut.")}</p>
          </article>
          <article className="border-t border-bone-gray pt-20">
            <h3 className="label-mono text-pure-ink">
              <a href="https://ruraliart.ruralhackers.com/" target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-60">
                RURALI-ART
              </a>
            </h3>
            <p className="mt-16 max-w-[34rem] text-body-sm text-pure-ink">{t("Nuestro laboratorio de arte e inteligencia artificial en Anceu: creación, experimentación y trabajo compartido desde el rural. Propuesto provisionalmente en las ayudas a la acción y promoción cultural 2026 del Ministerio de Cultura.")}</p>
          </article>
        </div>
        <div className="mt-40 border-t border-bone-gray pt-20">
          <p className="text-caption text-charcoal-press">{t("Instituciones vinculadas a nuestra trayectoria y programas")}</p>
          <div className="mt-20 flex flex-wrap items-center gap-40">
            {[
              { src: "/logos/ministerio-cultura-oficial.png", name: "Ministerio de Cultura" },
              { src: "/logos/european-commission.svg", name: t("Comisión Europea") },
              { src: "/logos/goethe-institut.svg", name: "Goethe-Institut" },
            ].map((logo) => (
              <Image key={logo.src} src={logo.src} alt={logo.name}
                width={180} height={80}
                className="h-auto max-h-[60px] w-[130px] object-contain object-left" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
