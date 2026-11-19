"use client";

import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { MobileCtaBar } from "./MobileCtaBar";
import { BookingModal } from "./BookingModal";

export function SiteChrome({ children, withMobileCta = true }: { children: ReactNode; withMobileCta?: boolean }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className={withMobileCta ? "has-mobile-cta" : undefined}>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <div id="conteudo">{children}</div>
      <Footer />
      {withMobileCta ? <MobileCtaBar onOpenBooking={() => setBookingOpen(true)} /> : null}
      <CookieBanner />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
