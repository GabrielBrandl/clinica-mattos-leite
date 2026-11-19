export type DoctorId = "fabia" | "felipe";

export type Doctor = {
  id: DoctorId;
  name: string;
  title: "MÉDICA" | "MÉDICO";
  crm: string;
  // TODO: validar RQE com o Conselho Regional / clínica
  rqe: string | null;
  // TODO: validar com o médico
  focus: string;
  // TODO: validar bio / registros de especialidade com a clínica
  bio: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export type CareArea = {
  id: string;
  needTitle: string;
  specialty: string;
  description: string;
  goalChip: string;
  image: string;
  imageAlt: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://clinicamattosleite.com.br";

export const clinic = {
  name: "Clínica Mattos Leite",
  legalName: "CLINICA MATTOS E LEITE LTDA",
  cnpj: "20.763.976/0001-23",
  tagline: "Medicina · Saúde e Longevidade",
  description:
    "Nutrologia e saúde hormonal em Manaus. Avaliação clínica completa e acompanhamento próximo com a Dra. Fábia Mattos e o Dr. Felipe Leite.",
  siteUrl,
  phoneDisplay: "(92) 99901-2210",
  phoneTel: "+5592999012210",
  whatsapp: "5592999012210",
  // TODO: e-mail profissional no domínio da clínica
  email: "nutrobodyperformance@gmail.com",
  instagram: "clinica.mattosleite",
  instagramUrl: "https://www.instagram.com/clinica.mattosleite/",
  hoursLabel: "Segunda a sexta, das 08h às 18h",
  hoursShort: "Seg a sex, 8h às 18h",
  openingHoursSpec: ["Mo-Fr 08:00-18:00"] as const,
  // TODO: duração média da primeira consulta (minutos ou texto)
  consultationDuration: null as string | null,
  // TODO: nome e CRM do(a) diretor(a) técnico(a)
  technicalDirector: null as { name: string; crm: string } | null,
  address: {
    street: "Av. Mário Ypiranga, nº 315, Sala 311",
    building: "Edifício The Office, Adrianópolis",
    city: "Manaus",
    region: "AM",
    postalCode: "69057-070",
    country: "BR",
    full: "Av. Mário Ypiranga, nº 315, Sala 311, Edifício The Office, Adrianópolis, Manaus - AM, CEP 69057-070",
    // TODO: confirmar coordenadas exatas da sala
    geo: null as { lat: number; lng: number } | null,
  },
  maps: {
    embed:
      "https://www.google.com/maps?q=Av.+M%C3%A1rio+Ypiranga,+315,+Edif%C3%ADcio+The+Office,+Adrian%C3%B3polis,+Manaus+-+AM&hl=pt-BR&z=17&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Av.+M%C3%A1rio+Ypiranga,+315,+Edif%C3%ADcio+The+Office,+Manaus",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Av.+M%C3%A1rio+Ypiranga,+315,+Edif%C3%ADcio+The+Office,+Manaus",
  },
  doctors: {
    fabia: {
      id: "fabia",
      name: "Dra. Fábia Mattos",
      title: "MÉDICA",
      crm: "CRM-AM 3468",
      rqe: null, // TODO: informar RQE se houver
      focus: "Nutrologia · Saúde da Mulher · Longevidade",
      bio: "Médica dedicada à Nutrologia, Saúde da Mulher, Equilíbrio Hormonal e Medicina Preventiva. Une ciência, acolhimento e mudanças reais de estilo de vida.",
      image: "/images/dra-fabia.jpg",
      imageWidth: 429,
      imageHeight: 651,
    } satisfies Doctor,
    felipe: {
      id: "felipe",
      name: "Dr. Felipe Leite",
      title: "MÉDICO",
      crm: "CRM-AM 4153",
      rqe: null, // TODO: informar RQE se houver
      // TODO: validar com o médico
      focus: "Saúde hormonal · Longevidade",
      // TODO: validar bio (ex.: Nutrologia Esportiva) com registro correspondente
      bio: "Médico com foco em saúde hormonal, otimização metabólica e longevidade. Estratégias clínicas individualizadas para vitalidade e composição corporal.",
      image: "/images/dr-felipe.jpg",
      imageWidth: 563,
      imageHeight: 715,
    } satisfies Doctor,
  },
  careAreas: [
    {
      id: "01",
      needTitle: "Exames alterados ou falta de energia?",
      specialty: "Nutrologia médica",
      description:
        "Investigação de carências nutricionais e distúrbios metabólicos, com plano alimentar e clínico individualizado.",
      goalChip: "Nutrologia médica",
      image: "/images/care-nutrologia.jpg",
      imageAlt: "Composição visual de nutrologia clínica com elementos naturais e laboratoriais",
    },
    {
      id: "02",
      needTitle: "Sente que algo mudou no seu corpo?",
      specialty: "Saúde hormonal",
      description:
        "Investigação e tratamento de alterações hormonais em homens e mulheres, com indicação baseada em diagnóstico e acompanhamento contínuo.",
      goalChip: "Saúde hormonal",
      image: "/images/care-hormonal.jpg",
      imageAlt: "Composição abstrata representando equilíbrio e saúde hormonal",
    },
    {
      id: "03",
      needTitle: "Quer envelhecer com mais saúde?",
      specialty: "Medicina preventiva",
      description:
        "Estratégias de cuidado contínuo com foco em massa muscular, saúde cognitiva, cardiovascular e prevenção de doenças crônicas.",
      goalChip: "Medicina preventiva",
      image: "/images/care-preventiva.jpg",
      imageAlt: "Paisagem serena evocando longevidade e medicina preventiva",
    },
    {
      id: "04",
      needTitle: "Dificuldade para cuidar do peso?",
      specialty: "Emagrecimento e composição corporal",
      description:
        "Acompanhamento médico do peso e da composição corporal, com plano individualizado e foco em hábitos sustentáveis.",
      goalChip: "Composição corporal",
      image: "/images/care-composicao.jpg",
      imageAlt: "Natureza-morta clínica sobre acompanhamento de composição corporal",
    },
    {
      id: "05",
      needTitle: "O intestino tem incomodado?",
      specialty: "Saúde intestinal e imunidade",
      description:
        "Avaliação e manejo da microbiota e do sistema imunológico, com atenção à absorção de nutrientes e ao bem-estar.",
      goalChip: "Saúde intestinal",
      image: "/images/care-intestinal.jpg",
      imageAlt: "Composição abstrata suave sobre saúde intestinal e imunidade",
    },
  ] as const satisfies readonly CareArea[],
  banners: {
    heroAtmosphere: "/images/hero-clinic-atmosphere.jpg",
    clinicSpace: "/images/banner-clinica.jpg",
    evaluation: "/images/banner-avaliacao.jpg",
  },
  philosophyQuote:
    "A Nutrologia ampliou a nossa forma de enxergar a saúde. Não tratamos apenas sintomas isolados — cuidamos do ser humano em sua totalidade.",
  // TODO: confirmar autoria da citação (Dra. Fábia / Dr. Felipe / clínica)
  philosophyQuoteAuthor: null as string | null,
  faqs: [
    {
      q: "Quais exames devo levar?",
      a: "Leve os exames recentes que tiver. Se não tiver nenhum, o médico indicará o que solicitar na consulta.",
    },
    {
      q: "O atendimento é feito por convênio?",
      a: "O atendimento é particular. Emitimos recibo para que você solicite reembolso ao seu plano, quando aplicável.",
    },
    {
      q: "Posso escolher entre a Dra. Fábia e o Dr. Felipe?",
      a: "Sim. Informe sua preferência no agendamento ou peça o primeiro horário disponível.",
    },
  ],
  goalChips: [
    "Nutrologia médica",
    "Saúde hormonal",
    "Medicina preventiva",
    "Composição corporal",
    "Saúde intestinal",
  ] as const,
};

export function getVisibleFaqs() {
  const items = clinic.faqs.map((f) => ({ q: f.q, a: f.a }));
  if (clinic.consultationDuration) {
    items.splice(2, 0, {
      q: "Quanto dura a consulta?",
      a: clinic.consultationDuration,
    });
  }
  return items;
}

export const doctorsList: Doctor[] = [clinic.doctors.fabia, clinic.doctors.felipe];

export function doctorCredentials(doctor: Doctor): string {
  const parts = [doctor.title, doctor.crm];
  if (doctor.rqe) parts.push(`RQE ${doctor.rqe}`);
  return parts.join(" · ");
}

export function waLink(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: clinic.name,
  legalName: clinic.legalName,
  cnpj: clinic.cnpj,
  tagline: clinic.tagline,
  description: clinic.description,
  phoneDisplay: clinic.phoneDisplay,
  phoneTel: clinic.phoneTel,
  whatsapp: clinic.whatsapp,
  email: clinic.email,
  instagram: clinic.instagram,
  instagramUrl: clinic.instagramUrl,
  hours: clinic.hoursLabel,
  address: {
    line1: clinic.address.street,
    line2: clinic.address.building,
    city: `${clinic.address.city} - ${clinic.address.region}`,
    cep: `CEP ${clinic.address.postalCode}`,
    full: clinic.address.full,
  },
  maps: clinic.maps,
} as const;
