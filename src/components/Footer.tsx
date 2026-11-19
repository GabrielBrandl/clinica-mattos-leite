"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { clinic } from "@/content/clinic";

const nav = [
  { href: "/#como-ajudamos", label: "Como ajudamos" },
  { href: "/#medicos", label: "Médicos" },
  { href: "/#clinica", label: "A clínica" },
  { href: "/blog", label: "Blog" },
  { href: "/#local", label: "Localização" },
  { href: "/#agendar", label: "Agendar avaliação" },
];

const legal = [
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/termos", label: "Termos de Serviço" },
  { href: "/cookies", label: "Aviso de Cookies" },
  { href: "/reembolso", label: "Política de Reembolso" },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between py-3 text-left text-sm uppercase tracking-[0.22em] text-teal md:pointer-events-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`md:hidden transition ${open ? "rotate-180" : ""}`} size={18} />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-4 md:block`}>{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="section-shell grid gap-6 py-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-10 md:py-12">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Nutrologia e saúde hormonal em Manaus, com cuidado médico individualizado.
          </p>
          <p className="mt-4 text-sm text-white/55">
            {clinic.legalName}
            <br />
            CNPJ {clinic.cnpj}
          </p>
          {clinic.technicalDirector ? (
            <p className="mt-3 text-sm text-white/55">
              Diretor(a) técnico(a): {clinic.technicalDirector.name} · {clinic.technicalDirector.crm}
            </p>
          ) : null}
        </div>

        <Accordion title="Navegação">
          <ul className="space-y-2 text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Contato & Legal">
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a className="inline-flex min-h-11 items-center" href={`tel:${clinic.phoneTel}`}>
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center"
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @{clinic.instagram}
              </a>
            </li>
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Accordion>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs leading-relaxed text-white/45 md:flex-row md:justify-between">
          <p>
            © 2026 {clinic.name}. Todos os direitos reservados. As informações deste site não substituem consulta
            médica.
          </p>
          <p>
            Responsáveis técnicos: {clinic.doctors.fabia.name} ({clinic.doctors.fabia.crm}) e {clinic.doctors.felipe.name}{" "}
            ({clinic.doctors.felipe.crm})
          </p>
        </div>
      </div>
    </footer>
  );
}
