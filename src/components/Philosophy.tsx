"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clinic } from "@/content/clinic";

export function Philosophy() {
  return (
    <section className="section-y bg-navy" aria-labelledby="filosofia-title">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="eyebrow eyebrow-on-dark">Nossa filosofia</p>
          <h2 id="filosofia-title" className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-white">
            Não tratamos só exames. Cuidamos da pessoa por inteiro.
          </h2>
          <blockquote className="mt-8 border-l border-teal/50 pl-5 text-lg leading-relaxed text-on-dark md:text-xl">
            “{clinic.philosophyQuote}”
          </blockquote>
          <p className="mt-3 text-sm text-white/55">
            {clinic.philosophyQuoteAuthor ? `— ${clinic.philosophyQuoteAuthor}` : "— Clínica Mattos Leite"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] border border-white/12"
        >
          <Image
            src="/images/consultorio.jpg"
            alt="Dra. Fábia e Dr. Felipe no consultório"
            width={543}
            height={599}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </motion.div>
      </div>
    </section>
  );
}
