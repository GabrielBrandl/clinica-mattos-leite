import { clinic, doctorsList, doctorCredentials, getVisibleFaqs } from "@/content/clinic";

const DAY_MAP: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

const DAY_ORDER = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function expandDays(range: string) {
  const [start, end] = range.split("-");
  if (!end) return [DAY_MAP[start] || start];
  const i0 = DAY_ORDER.indexOf(start);
  const i1 = DAY_ORDER.indexOf(end);
  if (i0 < 0 || i1 < 0) return [DAY_MAP[start] || start];
  return DAY_ORDER.slice(i0, i1 + 1).map((d) => DAY_MAP[d]);
}

export function JsonLd() {
  const physicians = doctorsList.map((doc) => ({
    "@type": "Physician",
    name: doc.name,
    medicalSpecialty: doc.focus,
    identifier: doctorCredentials(doc),
    worksFor: {
      "@type": "MedicalClinic",
      name: clinic.name,
    },
  }));

  const medicalClinic: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    legalName: clinic.legalName,
    taxID: clinic.cnpj,
    url: clinic.siteUrl,
    telephone: clinic.phoneTel,
    email: clinic.email,
    image: `${clinic.siteUrl}/images/recepcao.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.street}, ${clinic.address.building}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    openingHoursSpecification: clinic.openingHoursSpec.map((spec) => {
      const [days, hours] = spec.split(" ");
      const [opens, closes] = hours.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: expandDays(days),
        opens,
        closes,
      };
    }),
    employee: physicians,
  };

  if (clinic.address.geo) {
    medicalClinic.geo = {
      "@type": "GeoCoordinates",
      latitude: clinic.address.geo.lat,
      longitude: clinic.address.geo.lng,
    };
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getVisibleFaqs().map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinic) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicians) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
