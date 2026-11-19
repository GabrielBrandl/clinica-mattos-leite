"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin, Clock, Phone } from "lucide-react";
import { clinic } from "@/content/clinic";

export function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="local" className="section-y bg-mist" aria-labelledby="local-title">
      <div className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Localização</p>
          <h2 id="local-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-navy">
            Como chegar
          </h2>
          <p className="mt-4 text-lg text-muted">Edifício The Office, Adrianópolis — Manaus.</p>
        </div>

        <div className="card-surface grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-8 p-6 md:p-9">
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-teal-deep" size={20} aria-hidden />
                <div>
                  <p className="font-medium text-navy">{clinic.name}</p>
                  <p className="mt-1 leading-relaxed text-muted">
                    {clinic.address.street}
                    <br />
                    {clinic.address.building}
                    <br />
                    {clinic.address.city} - {clinic.address.region}, CEP {clinic.address.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-teal-deep" size={20} aria-hidden />
                <p className="text-muted">{clinic.hoursLabel}</p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 shrink-0 text-teal-deep" size={20} aria-hidden />
                <a href={`tel:${clinic.phoneTel}`} className="text-navy underline-offset-4 hover:underline">
                  {clinic.phoneDisplay}
                </a>
              </div>
            </div>

            <a
              href={clinic.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit !bg-navy !text-white"
            >
              Traçar rota
              <ExternalLink size={16} aria-hidden />
            </a>
          </div>

          <div ref={ref} className="relative min-h-[320px] bg-navy/5">
            {showMap ? (
              <iframe
                title="Mapa da Clínica Mattos Leite no Google Maps"
                src={clinic.maps.embed}
                className="map-frame absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center text-sm text-muted">
                Carregando mapa…
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
