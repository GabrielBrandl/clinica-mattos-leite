"use client";

import { useEffect, useId } from "react";
import { X } from "lucide-react";
import { BookingFormWithPrefill, type BookingPrefill } from "./BookingForm";

export function BookingModal({
  open,
  onClose,
  prefill,
}: {
  open: boolean;
  onClose: () => void;
  prefill?: BookingPrefill;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button type="button" className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" aria-label="Fechar" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[90svh] w-full max-w-md overflow-y-auto rounded-[24px] bg-paper p-6 shadow-2xl"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="font-display text-3xl text-navy">
              Agendar avaliação
            </h2>
            <p className="mt-1 text-sm text-muted">Preencha e continue no WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 text-navy"
            aria-label="Fechar modal"
          >
            <X size={18} />
          </button>
        </div>

        <BookingFormWithPrefill
          variant="modal"
          prefill={prefill}
          prefillKey={`${prefill?.goal || ""}-${open}`}
          onSubmitted={onClose}
        />
      </div>
    </div>
  );
}
