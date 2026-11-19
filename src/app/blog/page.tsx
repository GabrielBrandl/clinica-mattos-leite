import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { clinic } from "@/content/clinic";

export const metadata: Metadata = {
  title: "Blog",
  description: `Artigos educativos da ${clinic.name} sobre nutrologia, saúde hormonal, prevenção e cuidado médico em Manaus.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <SiteChrome>
      <main className="bg-paper pt-24 pb-16 sm:pt-28 sm:pb-20">
        <section className="section-shell">
          <p className="eyebrow">Conteúdo educativo</p>
          <h1 className="mt-3 font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.08] text-navy">
            Blog da Clínica Mattos Leite
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Textos claros sobre nutrologia, saúde hormonal, prevenção e o caminho até a consulta — sem promessas, com
            foco em informação responsável.
          </p>
          <BlogIndex />
        </section>
      </main>
    </SiteChrome>
  );
}
