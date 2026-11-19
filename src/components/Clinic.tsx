"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic } from "@/content/clinic";

const steps = [
  {
    n: "01",
    t: "Você solicita o horário",
    d: "Pelo formulário ou WhatsApp. Confirmamos o melhor dia com você.",
  },
  {
    n: "02",
    t: "Avaliação completa",
    d: "Histórico detalhado, análise de exames e bioimpedância — sem pressa.",
  },
  {
    n: "03",
    t: "Plano individualizado",
    d: "Você sai com a estratégia definida e o acompanhamento combinado.",
  },
];

export function Clinic() {
  return (
    <section id="clinica" className="bg-navy-deep" aria-labelledby="clinica-title">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <Image
            src="/images/recepcao.jpg"
            alt="Recepção da Clínica Mattos Leite"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-6 py-14 md:px-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <p className="eyebrow eyebrow-on-dark">A clínica</p>
            <h2 id="clinica-title" className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-white">
              Conforto, privacidade e tecnologia no seu atendimento
            </h2>
            <p className="mt-5 text-base leading-relaxed text-on-dark md:text-lg">
              Ambiente pensado para consultas tranquilas, com avaliação de composição corporal e acompanhamento
              próximo.
            </p>
            <ul className="mt-7 space-y-3 text-white/85">
              {[
                "Consultas individualizadas e sem pressa",
                "Avaliação metabólica e bioimpedância",
                "Espaço moderno e privativo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="section-shell grid gap-4 py-8 md:grid-cols-3 md:py-10">
        {[
          { src: "/images/consultorio.jpg", alt: "Consultório da clínica", w: 543, h: 599 },
          { src: clinic.banners.clinicSpace, alt: "Ambiente da clínica", w: 1600, h: 900 },
          { src: clinic.banners.evaluation, alt: "Preparação para avaliação clínica", w: 1600, h: 900 },
        ].map((img) => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/10">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-14 md:px-12 md:py-16">
        <div className="section-shell">
          <h3 className="font-display text-3xl text-white md:text-4xl">Como funciona a primeira consulta</h3>
          <ol className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <li key={step.n} className="glass-dark p-5 md:p-6">
                <span className="font-display text-2xl text-teal">{step.n}</span>
                <p className="mt-3 text-lg text-white">{step.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-on-dark">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
