"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { doctorsList, doctorCredentials, waLink } from "@/content/clinic";
import { track } from "@/lib/analytics";

export function Doctors() {
  return (
    <section id="medicos" className="section-y bg-paper" aria-labelledby="medicos-title">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Corpo clínico</p>
          <h2 id="medicos-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.3rem)] text-navy">
            Quem cuida de você
          </h2>
          <p className="mt-4 text-lg text-muted">
            Atendimento humanizado, escuta ativa e atualização científica constante.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {doctorsList.map((doc, index) => (
            <motion.article
              key={doc.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="card-surface overflow-hidden"
            >
              <div className="mx-auto max-w-[400px]">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={doc.image}
                    alt={`Retrato de ${doc.name}`}
                    width={doc.imageWidth}
                    height={doc.imageHeight}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-7">
                <div>
                  <h3 className="font-display text-3xl text-navy">{doc.name}</h3>
                  <p className="mt-1 text-sm tracking-wide text-teal-deep">{doctorCredentials(doc)}</p>
                  <p className="mt-2 text-sm text-muted">{doc.focus}</p>
                </div>
                <p className="leading-relaxed text-muted">{doc.bio}</p>
                <a
                  href={waLink(`Olá! Gostaria de agendar uma avaliação com ${doc.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-navy !text-white"
                  onClick={() => track("whatsapp_click", { source: "doctor_card", doctor: doc.id })}
                >
                  Agendar avaliação
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
