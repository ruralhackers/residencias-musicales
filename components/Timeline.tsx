import { timeline } from "@/content/site";
import { AnceuText } from "./AnceuText";

export function Timeline() {
  return (
    <section id={timeline.id} className="section-gap bg-cream-paper">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">07 / Calendario</p>
        <h2 className="mt-20 text-section text-pure-ink">{timeline.title}</h2>

        <ol className="mt-60 grid gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.phases.map((phase, index) => (
            <li key={phase.title} className="border-t border-bone-gray pt-20">
              <span className="label-mono text-charcoal-press">
                0{index + 1} ● {phase.when}
              </span>
              <h3 className="mt-16 label-mono text-pure-ink">{phase.title}</h3>
              <p className="mt-10 text-body-sm text-pure-ink">
                <AnceuText text={phase.text} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
