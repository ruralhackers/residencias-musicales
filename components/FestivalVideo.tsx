"use client";

import { useTranslation } from "./Language";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FestivalVideo() {
  const t = useTranslation();

  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      video.current?.pause();
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        aria-label={t("Ver Rural Hackers Fest 2024 en grande")}
        className="media-card group relative block aspect-video w-full overflow-hidden bg-bone-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pure-ink">
        <Image src="/videos/anceu-fest-2024-poster.jpg"
          alt={t("Encuentro de la comunidad en Rural Hackers Fest 2024")}
          fill sizes="(max-width: 1024px) 380px, 30vw" className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105" />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-12 bg-black/35 transition-colors group-hover:bg-black/45">
          <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-cream-paper text-pure-ink shadow-lg ring-4 ring-white/25 motion-safe:transition-transform motion-safe:group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="flex flex-col items-center gap-1 text-white">
            <span className="label-mono">{t("Dale al play")}</span>
            <span className="text-sm">{t("Así vivimos la música")}</span>
          </span>
        </span>
      </button>
      {open && (
        <dialog ref={dialog} aria-label="Rural Hackers Fest 2024"
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
          className="fixed inset-0 m-auto max-h-[95dvh] w-[94vw] max-w-[1200px] overflow-auto border-0 bg-transparent p-0 text-white backdrop:bg-black/85">
          <div className="mb-12 flex items-center justify-between gap-20">
            <p className="label-mono">Rural Hackers Fest 2024</p>
            <button type="button" autoFocus onClick={() => setOpen(false)}
              className="min-h-[44px] px-16 label-mono underline underline-offset-4">{t("Cerrar")}</button>
          </div>
          <video ref={video} controls autoPlay playsInline
            poster="/videos/anceu-fest-2024-poster.jpg"
            className="block max-h-[80dvh] w-full bg-black">
            <source src="/videos/anceu-fest-2024.webm" type="video/webm" />
            <source src="/videos/anceu-fest-2024.mp4" type="video/mp4" />
          </video>
        </dialog>
      )}
    </>
  );
}
