"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clinic } from "@/content/clinic";
import { track } from "@/lib/analytics";

type Props = {
  onBook: (goal: string) => void;
};

export function CareAreas({ onBook }: Props) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!top) return;
        const idx = Number((top.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { rootMargin: "-28% 0px -42% 0px", threshold: [0.2, 0.45, 0.7] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const current = clinic.careAreas[active];

  return (
    <section id="como-ajudamos" className="relative section-y bg-navy-deep" aria-labelledby="como-ajudamos-title">
      <div className="section-shell relative">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow eyebrow-on-dark">Como podemos ajudar</p>
          <h2 id="como-ajudamos-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.3rem)] text-white">
            Cuidado médico alinhado à sua necessidade
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-dark md:text-lg">
            Role a lista: a imagem muda com cada área de cuidado — para você se reconhecer no que precisa agora.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          <div className="space-y-4">
            {clinic.careAreas.map((area, index) => (
              <article
                key={area.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`overflow-hidden rounded-[24px] border transition ${
                  active === index
                    ? "border-teal/45 bg-navy-soft/85"
                    : "border-white/10 bg-navy/50"
                }`}
              >
                {/* Mobile: image inside active card */}
                <div className={`relative aspect-[16/10] lg:hidden ${active === index ? "block" : "hidden"}`}>
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-xs tracking-[0.22em] text-teal">{area.id}</p>
                  <h3 className="mt-2 font-display text-2xl text-white md:text-[1.75rem]">{area.needTitle}</h3>
                  <p className="mt-1 text-sm font-medium text-teal/90">{area.specialty}</p>
                  <p className="mt-3 text-sm leading-relaxed text-on-dark md:text-base">{area.description}</p>
                  <button
                    type="button"
                    className="btn-primary mt-5 !min-h-11 text-sm"
                    onClick={() => {
                      track("cta_agendar_click", { source: "care_area", area: area.id });
                      onBook(area.goalChip);
                    }}
                  >
                    Agendar avaliação
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[28px] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[4/5] min-h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 45vw, 520px"
                      priority={active === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs tracking-[0.24em] text-teal">{current.id}</p>
                  <p className="mt-2 font-display text-3xl text-white">{current.specialty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
