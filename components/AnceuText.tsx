import { Fragment, type ReactNode } from "react";
import { site } from "@/content/site";

const LINK_CLASS =
  "underline underline-offset-4 transition-opacity hover:opacity-60";

type LinkRule = {
  match: string;
  href: string;
};

const RULES: LinkRule[] = [
  { match: "Anceu Coliving", href: site.anceuUrl },
  { match: "Anceu", href: site.anceuUrl },
  { match: "Pegadas do Recordo", href: site.pegadasUrl },
];

function linkify(text: string, rules: LinkRule[]): ReactNode[] {
  if (rules.length === 0) return [text];

  const [rule, ...rest] = rules;
  const parts = text.split(rule.match);

  return parts.flatMap((part, i) => {
    const linked = linkify(part, rest);
    if (i === parts.length - 1) return linked;
    return [
      ...linked,
      <a
        key={`${rule.match}-${i}`}
        href={rule.href}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        {rule.match}
      </a>,
    ];
  });
}

/** Links Anceu / Anceu Coliving → anceu.com and Pegadas do Recordo → Linktree */
export function AnceuText({ text }: { text: string }) {
  return (
    <>
      {linkify(text, RULES).map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}
