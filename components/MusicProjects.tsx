"use client";

import { useTranslation } from "./Language";
import Image from "next/image";

export function MusicProjects() {
  const t = useTranslation();

  return (
    <section id="proyectos-musicales" className="section-gap bg-cream-paper">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">{t("05 / Experiencias musicales")}</p>
        <h2 className="mt-20 text-section text-pure-ink">{t("Música que ya ha encontrado espacio aquí")}</h2>
        <p className="mt-24 max-w-[42rem] text-body text-pure-ink">{t("Facilitar un lugar para ensayar. Acoger a músicos que quieren trabajar con la comunidad. Estas experiencias dan forma a la residencia que estamos construyendo.")}</p>
        <div className="mt-40 grid gap-40 md:grid-cols-2">
          <article className="border-t border-bone-gray pt-20">
            <div className="flex items-center gap-20">
              <Image src="/images/artistas/gabi-reboredo.jpg" alt="Gabi Reboredo"
                width={120} height={120} className="media-card h-[120px] w-[120px] object-cover" />
              <div>
                <p className="text-caption text-charcoal-press">{t("Espacio para ensayar · Casa do pobo")}</p>
                <h3 className="mt-10 label-mono text-pure-ink">aTorna · Gabi Reboredo</h3>
              </div>
            </div>
            <p className="mt-24 text-body-sm text-pure-ink">{t("Facilitamos a Gabi Reboredo espacio en la casa do pobo y alojamiento para ensayar aTorna. Una forma concreta de apoyar la creación: abrir un espacio comunitario para que un proyecto pueda trabajar y avanzar.")}</p>
            <p className="mt-16 text-body-sm text-pure-ink">{t("Junto a Adrià Grandia y Gutier Álvarez, aTorna pone en diálogo las tradiciones gallega y catalana. Voz, percusión, violín, zanfona y electrónica se encuentran en una propuesta de libre creación presentada en la Fira Mediterrània de Manresa.")}</p>
            <a href="https://www.adriagrandia.net/work-1/atorna" target="_blank"
              rel="noopener noreferrer" className="mt-20 inline-block text-body-sm underline underline-offset-4">{t("Conocer aTorna")}</a>
          </article>
          <article className="border-t border-bone-gray pt-20">
            <div className="flex items-center gap-20">
              <Image
                src="/images/artistas/duo-raies.jpg"
                alt={t("Dúo Raíes, Alessandro Spada y Hugo Sergio Hidalgo Herrera")}
                width={120} height={120}
                className="media-card h-[120px] w-[120px] shrink-0 object-cover"
              />
              <div>
                <p className="text-caption text-charcoal-press">Residencia en Anceu · 2025</p>
                <h3 className="mt-10 label-mono text-pure-ink">{t("Dúo Raíes · Escuela Reina Sofía")}</h3>
              </div>
            </div>
            <p className="mt-24 text-body-sm text-pure-ink">{t("Alessandro Spada, al contrabajo, y Hugo Sergio Hidalgo Herrera, a la viola, desarrollaron en Anceu una propuesta que reúne música clásica y tradiciones de Italia y Cuba. Trabajaron con agrupaciones locales en un encuentro colectivo de improvisación, ritmos y participación del público.")}</p>
            <p className="mt-16 text-body-sm text-pure-ink">{t("La residencia formó parte de su proyecto práctico de Emprendimiento e Innovación Social en la Escuela Superior de Música Reina Sofía, con la tutoría de María Casado. Un ejemplo de cómo la formación musical puede abrirse a la vida de una aldea y construir algo con quienes la habitan.")}</p>
            <a href="https://www.escuelasuperiordemusicareinasofia.es/proyecto-emprendimie/duo-raies/"
              target="_blank" rel="noopener noreferrer"
              className="mt-20 inline-block text-body-sm underline underline-offset-4">{t("Ver el proyecto en la Escuela Reina Sofía")}</a>
          </article>
        </div>
      </div>
    </section>
  );
}
