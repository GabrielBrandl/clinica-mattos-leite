import Link from "next/link";
import { Logo } from "./Logo";
import { clinic } from "@/content/clinic";
import { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-navy">
      <header className="border-b border-[var(--line)] bg-navy-deep">
        <div className="section-shell flex h-20 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="text-sm text-white/80 hover:text-white">
            Voltar ao site
          </Link>
        </div>
      </header>
      <main className="section-shell py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-teal-deep">{clinic.name}</p>
        <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h1>
        <div className="legal-prose mt-8 max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
