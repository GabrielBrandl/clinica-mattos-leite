"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { clinic } from "@/content/clinic";
import { track } from "@/lib/analytics";

const links = [
  { href: "/#como-ajudamos", label: "Como ajudamos", id: "como-ajudamos" },
  { href: "/#medicos", label: "Médicos", id: "medicos" },
  { href: "/#clinica", label: "A clínica", id: "clinica" },
  { href: "/blog", label: "Blog", id: "blog" },
  { href: "/#local", label: "Localização", id: "local" },
];

export function Header({ onOpenBooking }: { onOpenBooking: () => void }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionActive, setSectionActive] = useState("");
  const active = !onHome ? (pathname.startsWith("/blog") ? "blog" : "") : sectionActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!onHome) return;
    const sections = links
      .map((l) => (l.id !== "blog" ? document.getElementById(l.id) : null))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setSectionActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  const openBooking = () => {
    track("cta_agendar_click", { source: "header" });
    onOpenBooking();
  };

  const solid = scrolled || open || !onHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-navy-deep/92 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)]" : "bg-transparent"
      }`}
    >
      <div className={`section-shell flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-[4.5rem]"}`}>
        <Link href="/" aria-label={`${clinic.name} — início`} className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={active === link.id || (link.id === "blog" && pathname.startsWith("/blog")) ? "true" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button type="button" onClick={openBooking} className="btn-primary !min-h-11 !px-5 text-sm">
            Agendar avaliação
          </button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div id="mobile-menu" className={`lg:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-navy-deep`}>
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="btn-primary mt-3"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
          >
            Agendar avaliação
          </button>
        </nav>
      </div>
    </header>
  );
}
