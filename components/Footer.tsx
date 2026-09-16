"use client";

import { useContent, useTranslation } from "./Language";
import { Logo3D } from "./Logo3D";

export function Footer() {
  const { site } = useContent();
  const t = useTranslation();

  return (
    <footer className="bg-cream-paper text-pure-ink">
      <div className="page-shell border-t border-bone-gray py-60">
        <div className="grid gap-60 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-section">{site.name}</p>
            <p className="mt-20 max-w-[28rem] text-body-sm">{t("Un proyecto de")} {site.org} en{" "}
              <a
                href={site.anceuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Anceu
              </a>
              , Galicia.
            </p>
          </div>

          <div className="flex items-center justify-center self-center lg:col-span-3">
            <Logo3D compact />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div>
              <h2 className="label-mono text-charcoal-press">Contacto</h2>
              <ul className="mt-20 space-y-12 text-body-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone}`}
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="label-mono text-charcoal-press">
                  {site.hashtags.join(" ● ")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-60 flex flex-col gap-12 border-t border-bone-gray pt-24 label-mono text-caption sm:flex-row sm:items-center sm:justify-between">
          <span>Versión 0.1</span>
          <span>
            <a
              href={site.anceuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Anceu
            </a>{" "}
            ● Ponte Caldelas ● Galicia
          </span>
        </div>
      </div>
    </footer>
  );
}
