"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Philosophy } from "./Philosophy";
import { CareAreas } from "./CareAreas";
import { Doctors } from "./Doctors";
import { Clinic } from "./Clinic";
import { BlogPreview } from "./BlogPreview";
import { FAQ } from "./FAQ";
import { Location } from "./Location";
import { Booking } from "./Booking";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { MobileCtaBar } from "./MobileCtaBar";
import { BookingModal } from "./BookingModal";
import { ImageBanner } from "./ImageBanner";
import type { BookingPrefill } from "./BookingForm";
import { clinic } from "@/content/clinic";
import { track } from "@/lib/analytics";

export function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefill, setPrefill] = useState<BookingPrefill | undefined>();

  const openBooking = (goal?: string) => {
    setPrefill(goal ? { goal } : undefined);
    setBookingOpen(true);
  };

  return (
    <div className="has-mobile-cta">
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Header onOpenBooking={() => openBooking()} />
      <main id="conteudo">
        <Hero onOpenBooking={() => openBooking()} />
        <Philosophy />
        <CareAreas onBook={(goal) => openBooking(goal)} />
        <ImageBanner
          src={clinic.banners.clinicSpace}
          alt="Ambiente acolhedor da Clínica Mattos Leite"
          eyebrow="Espaço de cuidado"
          title="Um ambiente pensado para você ser ouvido com calma"
          text="No Edifício The Office, em Adrianópolis, cada consulta é conduzida sem pressa e com privacidade."
        />
        <Doctors />
        <Clinic />
        <ImageBanner
          src={clinic.banners.evaluation}
          alt="Preparação para avaliação clínica"
          eyebrow="Próximo passo"
          title="Comece pela avaliação que o seu corpo precisa"
          text="Fale com a equipe e escolha o melhor horário com a Dra. Fábia ou o Dr. Felipe."
          ctaLabel="Agendar avaliação"
          onCta={() => {
            track("cta_agendar_click", { source: "mid_banner" });
            openBooking();
          }}
        />
        <BlogPreview />
        <FAQ />
        <Location />
        <Booking prefill={prefill} />
      </main>
      <Footer />
      <MobileCtaBar onOpenBooking={() => openBooking()} />
      <CookieBanner />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} prefill={prefill} />
    </div>
  );
}
