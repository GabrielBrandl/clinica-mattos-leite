const CONSENT_KEY = "cml-cookie-consent";

export type AnalyticsEvent = "cta_agendar_click" | "whatsapp_click" | "form_submit";

export function hasMeasurementConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

/** Fire only after measurement consent. Never send PII or health data. */
export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  if (!hasMeasurementConsent()) return;

  const payload = { event, ...props, ts: Date.now() };

  // Optional dataLayer hook (no PII)
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", payload);
  }
}

export { CONSENT_KEY };
