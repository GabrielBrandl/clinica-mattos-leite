"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { clinic, waLink, type DoctorId } from "@/content/clinic";
import { isValidPhoneBR, maskPhoneBR } from "@/lib/phone";
import { track } from "@/lib/analytics";

export type BookingPrefill = {
  goal?: string;
  doctor?: DoctorId | "any";
};

type Props = {
  variant?: "section" | "modal";
  prefill?: BookingPrefill;
  onSubmitted?: () => void;
};

type Errors = Partial<Record<"name" | "phone" | "lgpd", string>>;

export function BookingForm({ variant = "section", prefill, onSubmitted }: Props) {
  const baseId = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const lgpdRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState<"any" | DoctorId>(prefill?.doctor || "any");
  const [goal, setGoal] = useState(prefill?.goal || "");
  const [lgpd, setLgpd] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = (next?: { name?: string; phone?: string; lgpd?: boolean }) => {
    const n = next?.name ?? name;
    const p = next?.phone ?? phone;
    const l = next?.lgpd ?? lgpd;
    const e: Errors = {};
    if (!n.trim() || n.trim().length < 2) e.name = "Informe seu nome completo.";
    if (!isValidPhoneBR(p)) e.phone = "Informe um WhatsApp válido com DDD (10 ou 11 dígitos).";
    if (!l) e.lgpd = "É necessário autorizar o uso dos dados para agendamento.";
    return e;
  };

  const focusFirstError = (e: Errors) => {
    if (e.name) nameRef.current?.focus();
    else if (e.phone) phoneRef.current?.focus();
    else if (e.lgpd) lgpdRef.current?.focus();
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      focusFirstError(e);
      return;
    }

    setLoading(true);
    const preference =
      doctor === "fabia"
        ? clinic.doctors.fabia.name
        : doctor === "felipe"
          ? clinic.doctors.felipe.name
          : "Primeiro horário disponível";

    const message = [
      "Olá! Gostaria de agendar uma avaliação na Clínica Mattos Leite.",
      `Nome: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Preferência: ${preference}`,
      goal.trim() ? `Objetivo: ${goal.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    track("form_submit", { source: variant });
    track("whatsapp_click", { source: "booking_form" });
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setLoading(false);
    setDone(true);
    onSubmitted?.();
  };

  const dark = variant === "section";
  const labelCls = dark ? "text-sm text-white/70" : "text-sm text-navy";
  const inputCls = dark
    ? "mt-1.5 w-full rounded-xl border border-white/15 bg-navy-deep/40 px-4 py-3 text-base text-white outline-none placeholder:text-white/35"
    : "mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none";

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div>
        <label className={labelCls} htmlFor={`${baseId}-name`}>
          Nome completo
        </label>
        <input
          ref={nameRef}
          id={`${baseId}-name`}
          name="nome"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setErrors((prev) => ({ ...prev, ...validate({ name }) }))}
          className={inputCls}
          placeholder="Seu nome"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${baseId}-name-err` : undefined}
        />
        {errors.name ? (
          <p id={`${baseId}-name-err`} className="field-error" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label className={labelCls} htmlFor={`${baseId}-phone`}>
          WhatsApp
        </label>
        <input
          ref={phoneRef}
          id={`${baseId}-phone`}
          name="whatsapp"
          autoComplete="tel"
          inputMode="numeric"
          required
          value={phone}
          onChange={(e) => setPhone(maskPhoneBR(e.target.value))}
          onKeyDown={(e) => {
            if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) e.preventDefault();
          }}
          onBlur={() => setErrors((prev) => ({ ...prev, ...validate({ phone }) }))}
          className={inputCls}
          placeholder="(92) 99999-9999"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${baseId}-phone-err` : undefined}
        />
        {errors.phone ? (
          <p id={`${baseId}-phone-err`} className="field-error" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className={labelCls}>Preferência de médico</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {(
            [
              { id: "any" as const, label: "Primeiro horário" },
              { id: "fabia" as const, label: "Dra. Fábia" },
              { id: "felipe" as const, label: "Dr. Felipe" },
            ] as const
          ).map((opt) => {
            const selected = doctor === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setDoctor(opt.id)}
                className={`min-h-12 rounded-2xl border px-3 py-3 text-sm font-medium transition ${
                  selected
                    ? dark
                      ? "border-teal bg-teal/15 text-teal"
                      : "border-navy bg-navy text-white"
                    : dark
                      ? "border-white/15 text-white/80 hover:border-white/35"
                      : "border-navy/15 text-navy hover:border-navy/35"
                }`}
                aria-pressed={selected}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className={labelCls}>Objetivo (opcional)</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {clinic.goalChips.map((chip) => {
            const selected = goal === chip;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setGoal(selected ? "" : chip)}
                className={`min-h-11 rounded-full border px-3 py-2 text-sm transition ${
                  selected
                    ? dark
                      ? "border-teal bg-teal text-navy-deep"
                      : "border-teal-deep bg-teal-deep text-white"
                    : dark
                      ? "border-white/15 text-white/75"
                      : "border-navy/15 text-muted"
                }`}
                aria-pressed={selected}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label
        className={`flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}
      >
        <input
          ref={lgpdRef}
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 accent-[var(--mint-300)]"
          checked={lgpd}
          onChange={(e) => {
            setLgpd(e.target.checked);
            setErrors((prev) => {
              const next = { ...prev };
              if (e.target.checked) delete next.lgpd;
              return next;
            });
          }}
          aria-invalid={Boolean(errors.lgpd)}
          aria-describedby={errors.lgpd ? `${baseId}-lgpd-err` : undefined}
        />
        <span>
          Autorizo o uso dos meus dados para contato sobre agendamento, conforme a{" "}
          <a
            href="/privacidade"
            className={dark ? "text-teal underline underline-offset-2" : "text-teal-deep underline underline-offset-2"}
          >
            Política de Privacidade
          </a>{" "}
          e a LGPD.
        </span>
      </label>
      {errors.lgpd ? (
        <p id={`${baseId}-lgpd-err`} className="field-error" role="alert">
          {errors.lgpd}
        </p>
      ) : null}

      <button type="submit" className={`btn-primary w-full ${dark ? "" : "!bg-navy !text-white"}`} disabled={loading}>
        {loading ? "Abrindo WhatsApp…" : "Continuar no WhatsApp"}
      </button>

      {done ? (
        <p className={`text-sm ${dark ? "text-teal" : "text-teal-deep"}`} role="status">
          Sua mensagem foi preparada. É só enviar no WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

/** Remount when prefill changes so initial state picks up goal/doctor. */
export function BookingFormWithPrefill(props: Props & { prefillKey?: string }) {
  return <BookingForm key={props.prefillKey || props.prefill?.goal || "default"} {...props} />;
}
