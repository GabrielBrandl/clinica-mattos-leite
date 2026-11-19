"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
  ctaLabel?: string;
  onCta?: () => void;
};

export function ImageBanner({ src, alt, eyebrow, title, text, ctaLabel, onCta }: Props) {
  return (
    <section className="relative isolate min-h-[42vh] overflow-hidden md:min-h-[48vh]">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/35" />
      <div className="relative z-10 section-shell flex min-h-[42vh] items-center py-14 md:min-h-[48vh]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-xl"
        >
          {eyebrow ? <p className="eyebrow eyebrow-on-dark">{eyebrow}</p> : null}
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-white">{title}</h2>
          {text ? <p className="mt-4 text-base leading-relaxed text-on-dark md:text-lg">{text}</p> : null}
          {ctaLabel && onCta ? (
            <button type="button" className="btn-primary mt-7" onClick={onCta}>
              {ctaLabel}
            </button>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
