import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id={faq.id} className="section-gap bg-cream-paper">
      <div className="page-shell grid gap-40 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label-mono text-pure-ink">07 / Preguntas</p>
          <h2 className="mt-20 text-section text-pure-ink">{faq.title}</h2>
        </div>
        <div className="lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.question} className="border-t border-bone-gray py-20 last:border-b">
              <summary className="cursor-pointer list-none pr-24 label-mono text-pure-ink marker:content-none">
                {item.question}
              </summary>
              <p className="mt-16 max-w-[42rem] text-body-sm text-pure-ink">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
