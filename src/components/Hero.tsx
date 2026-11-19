"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic, waLink } from "@/content/clinic";
import { track } from "@/lib/analytics";

export function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <Image
        src={clinic.banners.heroAtmosphere}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,31,48,0.94) 0%, rgba(6,31,48,0.82) 42%, rgba(6,31,48,0.45) 70%, rgba(6,31,48,0.55) 100%)",
        }}
      />

      <div className="relative z-10 section-shell grid min-h-[100svh] items-center gap-10 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16 lg:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="eyebrow eyebrow-on-dark"
          >
            {clinic.name} · Adrianópolis, Manaus
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] text-white"
          >
            Nutrologia e saúde hormonal com um plano feito para você
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-on-dark md:text-lg"
          >
            Avaliação clínica completa e acompanhamento próximo com a Dra. Fábia Mattos e o Dr. Felipe Leite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                track("cta_agendar_click", { source: "hero" });
                onOpenBooking();
              }}
            >
              Agendar avaliação
            </button>
            <a
              href={waLink("Olá! Vim pelo site da Clínica Mattos Leite e gostaria de mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              onClick={() => track("whatsapp_click", { source: "hero" })}
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65"
          >
            <li>Atendimento particular</li>
            <li aria-hidden="true">·</li>
            <li>Recibo para reembolso</li>
            <li aria-hidden="true">·</li>
            <li>{clinic.hoursShort}</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/doutores-hero.jpg"
              alt="Dra. Fábia Mattos e Dr. Felipe Leite"
              width={579}
              height={494}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5">
              <p className="font-display text-2xl text-white">Dra. Fábia & Dr. Felipe</p>
              <p className="mt-1 text-sm text-teal">Nutrologia · Saúde hormonal · Longevidade</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/dra-fabia.jpg"
                alt="Dra. Fábia Mattos"
                width={429}
                height={651}
                className="aspect-[3/4] h-full w-full object-cover object-top"
                sizes="200px"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/dr-felipe.jpg"
                alt="Dr. Felipe Leite"
                width={563}
                height={715}
                className="aspect-[3/4] h-full w-full object-cover object-top"
                sizes="200px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
