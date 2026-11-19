"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONSENT_KEY } from "@/lib/analytics";

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function emit() {
  listeners.forEach((l) => l());
}

function getConsentSnapshot() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, () => "ssr");
  const visible = consent === null;

  const save = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    emit();
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p className="text-sm leading-relaxed text-white/85">
        Usamos cookies essenciais para o funcionamento do site e, somente com seu consentimento, cookies de medição.
        Saiba mais no{" "}
        <Link href="/cookies" className="text-teal underline underline-offset-2">
          Aviso de Cookies
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="btn-primary !min-h-11 !px-4 text-sm" onClick={() => save("accepted")}>
          Aceitar
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-4 text-sm text-white"
          onClick={() => save("essential")}
        >
          Apenas essenciais
        </button>
      </div>
    </div>
  );
}
