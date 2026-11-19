"use client";

import { clinic } from "@/content/clinic";
import { BookingForm, type BookingPrefill } from "./BookingForm";

export function Booking({ prefill }: { prefill?: BookingPrefill }) {
  return (
    <section id="agendar" className="section-y bg-navy text-white" aria-labelledby="agendar-title">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow eyebrow-on-dark">Agendamento</p>
          <h2 id="agendar-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.05]">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-on-dark">
            Agende sua avaliação com a Dra. Fábia Mattos ou o Dr. Felipe Leite. Atendimento particular, com recibo para
            reembolso quando aplicável.
          </p>
          <ul className="mt-8 space-y-2 text-white/75">
            <li>{clinic.address.full}</li>
            <li>
              WhatsApp:{" "}
              <a className="text-teal underline-offset-2 hover:underline" href={`tel:${clinic.phoneTel}`}>
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a className="text-teal underline-offset-2 hover:underline" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </li>
            <li>{clinic.hoursLabel}</li>
          </ul>
        </div>

        <div className="glass-dark p-6 md:p-8">
          <h3 className="font-display text-2xl">Agendar avaliação</h3>
          <p className="mt-2 text-sm text-white/60">Coletamos apenas os dados necessários para confirmar seu horário.</p>
          <div className="mt-6">
            <BookingForm variant="section" prefill={prefill} />
          </div>
        </div>
      </div>
    </section>
  );
}
