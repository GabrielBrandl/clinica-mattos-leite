/** Keep only digits from a phone-like string. */
export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Mask as (XX) XXXXX-XXXX or (XX) XXXX-XXXX while typing. */
export function maskPhoneBR(value: string) {
  const d = digitsOnly(value).slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Valid Brazilian landline (10) or mobile (11) digit counts. */
export function isValidPhoneBR(value: string) {
  const len = digitsOnly(value).length;
  return len === 10 || len === 11;
}
