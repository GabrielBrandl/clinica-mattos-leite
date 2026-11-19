"use client";

import { Plus } from "lucide-react";
import { getVisibleFaqs, waLink } from "@/content/clinic";
import { track } from "@/lib/analytics";

export function FAQ() {
  const faqs = getVisibleFaqs();

  return (
    <section id="duvidas" className="section-y bg-paper" aria-labelledby="faq-title">
      <div className="section-shell max-w-3xl">
        <p className="eyebrow">Dúvidas</p>
        <h2 id="faq-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-navy">
          Perguntas frequentes
        </h2>

        <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item group py-2">
              <summary className="text-left text-lg text-navy">
                <span>{item.q}</span>
                <Plus className="shrink-0 text-teal-deep transition-transform duration-300" size={20} aria-hidden />
              </summary>
              <p className="pb-4 pr-8 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="card-surface mt-10 p-6 md:p-8">
          <h3 className="font-display text-2xl text-navy">Ainda com dúvida?</h3>
          <p className="mt-2 text-muted">Fale com a nossa equipe pelo WhatsApp.</p>
          <a
            href={waLink("Olá! Tenho uma dúvida sobre a Clínica Mattos Leite.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 !bg-navy !text-white"
            onClick={() => track("whatsapp_click", { source: "faq_card" })}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
