"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/content/clinic";
import { track } from "@/lib/analytics";

export function MobileCtaBar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [visible, setVisible] = useState(false);
  const [hideForForm, setHideForForm] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const form = document.getElementById("agendar");
    if (!hero) return;

    const ioHero = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    ioHero.observe(hero);

    let ioForm: IntersectionObserver | undefined;
    if (form) {
      ioForm = new IntersectionObserver(([entry]) => setHideForForm(entry.isIntersecting), {
        threshold: 0.2,
      });
      ioForm.observe(form);
    }

    const onResize = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      setKeyboardOpen(vv.height < window.innerHeight * 0.65);
    };
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      ioHero.disconnect();
      ioForm?.disconnect();
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  if (!visible || hideForForm || keyboardOpen) return null;

  return (
    <div className="mobile-cta-bar md:hidden">
      <button
        type="button"
        className="btn-primary flex-1"
        onClick={() => {
          track("cta_agendar_click", { source: "mobile_bar" });
          onOpenBooking();
        }}
      >
        Agendar avaliação
      </button>
      <a
        href={waLink("Olá! Vim pelo site da Clínica Mattos Leite.")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white"
        aria-label="Falar no WhatsApp"
        onClick={() => track("whatsapp_click", { source: "mobile_bar" })}
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
