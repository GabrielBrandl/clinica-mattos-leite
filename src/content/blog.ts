export type BlogCategory =
  | "Nutrologia"
  | "Saúde hormonal"
  | "Prevenção"
  | "Composição corporal"
  | "Intestino e imunidade"
  | "Consulta";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO
  readMinutes: number;
  cover: string;
  coverAlt: string;
  tags: string[];
  blocks: BlogBlock[];
};

const disclaimer =
  "Conteúdo educativo. Não substitui consulta, diagnóstico ou tratamento médico. Em caso de sintomas, procure avaliação presencial.";

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-nutrologia-e-quando-procurar",
    title: "O que é nutrologia e quando faz sentido procurar",
    excerpt:
      "Entenda o papel da nutrologia no cuidado metabólico e em quais situações uma avaliação médica pode ajudar.",
    category: "Nutrologia",
    date: "2026-10-02",
    readMinutes: 6,
    cover: "/images/care-nutrologia.jpg",
    coverAlt: "Elementos de avaliação nutricional e clínica",
    tags: ["nutrologia", "consulta", "metabolismo"],
    blocks: [
      {
        type: "p",
        text: "A nutrologia é a área da medicina que estuda a relação entre alimentação, nutrientes e o funcionamento do organismo. Diferente de orientações genéricas de dieta, a avaliação médica busca compreender o contexto clínico de cada pessoa.",
      },
      { type: "h2", text: "O que costuma ser avaliado" },
      {
        type: "ul",
        items: [
          "Histórico de saúde, hábitos e sintomas",
          "Exames laboratoriais quando indicados",
          "Composição corporal e padrões alimentares",
          "Possíveis carências ou excessos nutricionais",
        ],
      },
      { type: "h2", text: "Quando procurar" },
      {
        type: "p",
        text: "Muitas pessoas buscam nutrologia diante de cansaço persistente, alterações de peso de difícil compreensão, exames alterados, interesse em prevenção ou necessidade de acompanhamento mais estruturado da alimentação sob olhar médico.",
      },
      {
        type: "callout",
        text: disclaimer,
      },
    ],
  },
  {
    slug: "nutricionista-e-nutrologo-quais-as-diferencas",
    title: "Nutricionista e nutrólogo: quais as diferenças?",
    excerpt:
      "Os dois profissionais cuidam de alimentação e saúde, mas com formações e atribuições distintas. Veja como se complementam.",
    category: "Nutrologia",
    date: "2026-10-06",
    readMinutes: 5,
    cover: "/images/banner-avaliacao.jpg",
    coverAlt: "Preparação para avaliação de saúde",
    tags: ["nutrologia", "nutrição", "equipe"],
    blocks: [
      {
        type: "p",
        text: "É comum haver confusão entre nutricionista e médico nutrólogo. Ambos podem contribuir para uma alimentação mais adequada, porém atuam a partir de formações diferentes.",
      },
      { type: "h2", text: "Em resumo" },
      {
        type: "ul",
        items: [
          "O nutricionista é o profissional de nutrição responsável por planos alimentares e educação nutricional.",
          "O nutrólogo é médico e avalia o paciente sob perspectiva clínica, incluindo investigação de causas metabólicas e indicação de condutas médicas quando pertinente.",
          "Em muitos casos, o trabalho conjunto oferece uma visão mais completa.",
        ],
      },
      {
        type: "p",
        text: "A escolha do profissional depende da sua necessidade. Se há sintomas, exames alterados ou doenças associadas, a avaliação médica ajuda a organizar o raciocínio diagnóstico antes de mudanças isoladas na dieta.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "exames-na-avaliacao-metabolica",
    title: "Exames na avaliação metabólica: o que costuma importar",
    excerpt:
      "Nem todo exame serve para todo mundo. Entenda a lógica de investigar com critério e individualização.",
    category: "Nutrologia",
    date: "2026-10-10",
    readMinutes: 7,
    cover: "/images/care-nutrologia.jpg",
    coverAlt: "Avaliação clínica e laboratorial",
    tags: ["exames", "metabolismo", "consulta"],
    blocks: [
      {
        type: "p",
        text: "Exames laboratoriais são ferramentas — não um fim em si. Em uma avaliação metabólica, o médico interpreta números à luz da história clínica, dos sintomas e do contexto de vida do paciente.",
      },
      { type: "h2", text: "Boas práticas" },
      {
        type: "ul",
        items: [
          "Leve exames recentes que já tiver; se não houver, o médico pode orientar a solicitação.",
          "Evite comparar seu resultado apenas com posts genéricos da internet.",
          "Valores “no limite” podem ter significados diferentes conforme idade, sexo e quadro clínico.",
          "Repetir exames sem indicação raramente resolve a dúvida principal.",
        ],
      },
      {
        type: "p",
        text: "O objetivo é compreender padrões: metabolismo energético, nutrientes, função tireoidiana quando pertinente, marcadores inflamatórios e outros dados selecionados caso a caso.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "fadiga-persistente-o-que-investigar",
    title: "Fadiga persistente: o que vale investigar com o médico",
    excerpt:
      "Cansaço que não melhora com descanso merece atenção. Veja caminhos de investigação sem automedicação.",
    category: "Saúde hormonal",
    date: "2026-10-14",
    readMinutes: 6,
    cover: "/images/care-composicao.jpg",
    coverAlt: "Cuidado clínico diante de fadiga e rotina",
    tags: ["fadiga", "hormônios", "avaliação"],
    blocks: [
      {
        type: "p",
        text: "Todo mundo se cansa. O ponto de atenção é a fadiga que se prolonga, interfere no dia a dia e não melhora com sono e pausas habituais. Nesse cenário, a avaliação médica busca causas possíveis — e não um “suplemento milagroso”.",
      },
      { type: "h2", text: "O que pode entrar na conversa" },
      {
        type: "ul",
        items: [
          "Qualidade do sono e rotina",
          "Alimentação, hidratação e nível de atividade",
          "Exames conforme hipótese clínica",
          "Saúde emocional e sobrecarga",
          "Condições clínicas que cursam com cansaço",
        ],
      },
      {
        type: "p",
        text: "Automedicação hormonal ou uso de fórmulas sem indicação pode atrasar o diagnóstico e gerar riscos. O caminho mais seguro é investigar com critério.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "menopausa-acompanhamento-medico",
    title: "Menopausa: por que o acompanhamento médico importa",
    excerpt:
      "A transição menopausal é individual. Entenda o papel da escuta clínica e da conduta personalizada.",
    category: "Saúde hormonal",
    date: "2026-10-18",
    readMinutes: 7,
    cover: "/images/care-hormonal.jpg",
    coverAlt: "Saúde hormonal feminina sob olhar clínico",
    tags: ["menopausa", "saúde da mulher", "hormônios"],
    blocks: [
      {
        type: "p",
        text: "A menopausa marca uma transição natural, mas os sintomas e o impacto na qualidade de vida variam bastante entre mulheres. Por isso, protocolos “iguais para todas” raramente fazem sentido.",
      },
      { type: "h2", text: "O que a consulta pode organizar" },
      {
        type: "ul",
        items: [
          "Mapeamento de sintomas e histórico",
          "Avaliação de riscos e benefícios de cada conduta",
          "Discussão sobre estilo de vida, sono e composição corporal",
          "Acompanhamento longitudinal, com ajustes quando necessário",
        ],
      },
      {
        type: "p",
        text: "Decisões sobre terapia hormonal — quando indicada — dependem de avaliação médica individualizada. Informação de qualidade ajuda; automedicação, não.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "saude-hormonal-masculina-o-que-avaliar",
    title: "Saúde hormonal masculina: o que avaliar com cuidado",
    excerpt:
      "Queda de energia, alterações de humor ou mudanças corporais merecem investigação clínica — sem fórmulas prontas.",
    category: "Saúde hormonal",
    date: "2026-10-22",
    readMinutes: 6,
    cover: "/images/banner-clinica.jpg",
    coverAlt: "Ambiente clínico para avaliação hormonal masculina",
    tags: ["saúde do homem", "hormônios", "consulta"],
    blocks: [
      {
        type: "p",
        text: "Alterações hormonais no homem adulto podem se apresentar de forma sutil: menos disposição, mudanças no sono, variação de composição corporal ou humor. Nada disso, isoladamente, “fecha diagnóstico”.",
      },
      { type: "h2", text: "Princípios importantes" },
      {
        type: "ul",
        items: [
          "Sintomas orientam a investigação; exames complementam.",
          "Um único valor laboratorial raramente define conduta.",
          "Estilo de vida, sono e doenças associadas influenciam o quadro.",
          "Tratamentos só devem ser considerados após avaliação médica.",
        ],
      },
      {
        type: "p",
        text: "O acompanhamento ético prioriza segurança, indicação clara e reavaliação. Promessas de transformação rápida não fazem parte de uma boa prática clínica.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "sono-e-metabolismo",
    title: "Sono e metabolismo: uma relação que a clínica leva a sério",
    excerpt:
      "Dormir mal afeta fome, energia e regulação do organismo. Veja por que o sono entra na avaliação.",
    category: "Prevenção",
    date: "2026-10-26",
    readMinutes: 5,
    cover: "/images/hero-clinic-atmosphere.jpg",
    coverAlt: "Ambiente calmo associado a descanso e recuperação",
    tags: ["sono", "metabolismo", "prevenção"],
    blocks: [
      {
        type: "p",
        text: "O sono não é um detalhe opcional do plano de saúde. Ele participa da regulação hormonal, do controle de apetite, da recuperação e da disposição diária.",
      },
      { type: "h2", text: "Perguntas úteis na consulta" },
      {
        type: "ul",
        items: [
          "Quantas horas você dorme de fato?",
          "O sono é reparador ou fragmentado?",
          "Há sonolência diurna importante?",
          "Café, telas e horários irregulares fazem parte da rotina?",
        ],
      },
      {
        type: "p",
        text: "Ajustes de higiene do sono, investigação de distúrbios e alinhamento com o restante do cuidado metabólico podem ser caminhos — sempre a partir da avaliação individual.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "microbiota-intestinal-e-bem-estar",
    title: "Microbiota intestinal e bem-estar: o que já dá para afirmar",
    excerpt:
      "O intestino dialoga com imunidade e metabolismo. Separe o que é evidência do que é modismo.",
    category: "Intestino e imunidade",
    date: "2026-10-30",
    readMinutes: 7,
    cover: "/images/care-intestinal.jpg",
    coverAlt: "Representação visual suave da saúde intestinal",
    tags: ["intestino", "microbiota", "imunidade"],
    blocks: [
      {
        type: "p",
        text: "A microbiota intestinal — o conjunto de microrganismos que vive no trato digestivo — tem sido bastante estudada. Há relações promissoras com digestão, imunidade e metabolismo, mas também muito marketing exagerado.",
      },
      { type: "h2", text: "Abordagem sensata" },
      {
        type: "ul",
        items: [
          "Sintomas digestivos persistentes merecem avaliação.",
          "Alimentação variada e rica em fibras costuma ser um alicerce.",
          "Probióticos e condutas específicas dependem de indicação.",
          "Nem todo desconforto intestinal se resolve com um único suplemento.",
        ],
      },
      {
        type: "p",
        text: "Na prática clínica, o intestino entra no raciocínio completo do paciente — junto com história, exames quando necessários e hábitos sustentáveis.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "composicao-corporal-alem-da-balanca",
    title: "Composição corporal: por que a balança conta só uma parte",
    excerpt:
      "Peso corporal não diferencia músculo, gordura e água. Entenda o valor da avaliação mais completa.",
    category: "Composição corporal",
    date: "2026-11-03",
    readMinutes: 6,
    cover: "/images/care-composicao.jpg",
    coverAlt: "Avaliação de composição corporal",
    tags: ["composição corporal", "bioimpedância", "hábitos"],
    blocks: [
      {
        type: "p",
        text: "Duas pessoas com o mesmo peso podem ter realidades metabólicas muito diferentes. Por isso, olhar apenas o número da balança limita a compreensão do progresso e da saúde.",
      },
      { type: "h2", text: "O que a composição corporal ajuda a mostrar" },
      {
        type: "ul",
        items: [
          "Proporção entre massa magra e massa gorda (conforme método utilizado)",
          "Tendências ao longo do tempo, não apenas um dia isolado",
          "Base para metas realistas e acompanháveis",
        ],
      },
      {
        type: "p",
        text: "Métodos como a bioimpedância têm utilidade clínica quando interpretados corretamente e repetidos sob condições semelhantes. Eles não substituem o exame físico nem o julgamento médico.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "como-se-preparar-para-a-primeira-consulta",
    title: "Como se preparar para a primeira consulta",
    excerpt:
      "Um roteiro simples para aproveitar melhor o tempo com o médico e organizar suas dúvidas.",
    category: "Consulta",
    date: "2026-11-05",
    readMinutes: 4,
    cover: "/images/banner-avaliacao.jpg",
    coverAlt: "Preparação para consulta médica",
    tags: ["consulta", "primeira vez", "dicas"],
    blocks: [
      {
        type: "p",
        text: "A primeira consulta costuma ser mais detalhada. Quanto melhor for a informação que você leva, mais produtiva tende a ser a conversa.",
      },
      { type: "h2", text: "Checklist prático" },
      {
        type: "ul",
        items: [
          "Lista de sintomas e há quanto tempo existem",
          "Medicamentos, vitaminas e suplementos em uso",
          "Exames recentes (mesmo que incompletos)",
          "Histórico familiar relevante",
          "Objetivos realistas para o acompanhamento",
        ],
      },
      {
        type: "p",
        text: "Na Clínica Mattos Leite, o atendimento é particular e a equipe ajuda a confirmar o melhor horário — inclusive com preferência entre a Dra. Fábia Mattos e o Dr. Felipe Leite.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "consulta-particular-e-reembolso",
    title: "Consulta particular e reembolso: o que você precisa saber",
    excerpt:
      "Atendimento particular não impede, em muitos casos, solicitar reembolso ao plano. Entenda o fluxo geral.",
    category: "Consulta",
    date: "2026-11-07",
    readMinutes: 4,
    cover: "/images/banner-clinica.jpg",
    coverAlt: "Ambiente de clínica para atendimento particular",
    tags: ["reembolso", "particular", "organização"],
    blocks: [
      {
        type: "p",
        text: "O atendimento da Clínica Mattos Leite é particular. Isso significa que o agendamento e o pagamento ocorrem diretamente com a clínica. Em paralelo, muitos planos permitem solicitar reembolso conforme a apólice do beneficiário.",
      },
      { type: "h2", text: "Pontos importantes" },
      {
        type: "ul",
        items: [
          "A clínica pode emitir recibo do serviço prestado.",
          "A análise do reembolso é feita pelo plano/seguro do paciente.",
          "Prazos, percentuais e documentos variam conforme o contrato.",
          "Vale confirmar regras com sua operadora antes ou após a consulta.",
        ],
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "prevencao-e-envelhecimento-saudavel",
    title: "Prevenção e envelhecimento saudável: um olhar contínuo",
    excerpt:
      "Envelhecer com mais saúde envolve hábitos, rastreio e acompanhamento — sem promessas milagrosas.",
    category: "Prevenção",
    date: "2026-11-09",
    readMinutes: 6,
    cover: "/images/care-preventiva.jpg",
    coverAlt: "Visual sereno de prevenção e longevidade",
    tags: ["prevenção", "longevidade", "hábitos"],
    blocks: [
      {
        type: "p",
        text: "Medicina preventiva não é a busca por juventude eterna. É a organização de cuidados que preservam função, autonomia e qualidade de vida ao longo dos anos.",
      },
      { type: "h2", text: "Pilares frequentes" },
      {
        type: "ul",
        items: [
          "Alimentação adequada ao indivíduo",
          "Atividade física regular e sustentável",
          "Sono e manejo de estresse",
          "Acompanhamento de fatores de risco",
          "Reavaliações periódicas com o médico",
        ],
      },
      {
        type: "p",
        text: "Resultados variam de pessoa para pessoa. O valor do acompanhamento está na continuidade e no ajuste fino — não em transformações garantidas.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "alimentacao-e-inflamacao-visao-clinica",
    title: "Alimentação e inflamação: uma visão clínica equilibrada",
    excerpt:
      "Padrões alimentares influenciam processos inflamatórios. Veja como abordar o tema sem radicalismos.",
    category: "Nutrologia",
    date: "2026-11-11",
    readMinutes: 6,
    cover: "/images/care-nutrologia.jpg",
    coverAlt: "Alimentos e cuidado clínico",
    tags: ["inflamação", "alimentação", "nutrologia"],
    blocks: [
      {
        type: "p",
        text: "A relação entre dieta e inflamação é real, mas complexa. Reduzir o tema a “alimentos vilões” costuma gerar ansiedade e condutas pouco sustentáveis.",
      },
      { type: "h2", text: "O que costuma ajudar na prática" },
      {
        type: "ul",
        items: [
          "Padrão alimentar predominantemente in natura e minimamente processado",
          "Adequação de proteínas, fibras e micronutrientes às necessidades individuais",
          "Atenção a intolerâncias e sintomas digestivos com critérios clínicos",
          "Evitar restrições extremas sem acompanhamento",
        ],
      },
      {
        type: "p",
        text: "Quando há suspeita de processo inflamatório clinicamente relevante, a investigação médica orienta o que medir e o que mudar — com prioridade para segurança e adesão.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "vitamina-d-avaliacao-individualizada",
    title: "Vitamina D: por que a reposição precisa de critério",
    excerpt:
      "É um tema popular — e justamente por isso precisa de avaliação individualizada, não de dose padronizada.",
    category: "Nutrologia",
    date: "2026-11-13",
    readMinutes: 5,
    cover: "/images/banner-avaliacao.jpg",
    coverAlt: "Avaliação clínica e micronutrientes",
    tags: ["vitamina D", "micronutrientes", "exames"],
    blocks: [
      {
        type: "p",
        text: "A vitamina D participa de funções importantes no organismo e sua dosagem laboratorial é comum. Ainda assim, reposição sem indicação ou em doses inadequadas pode ser desnecessária ou arriscada.",
      },
      { type: "h2", text: "Cuidados essenciais" },
      {
        type: "ul",
        items: [
          "Interprete o exame com o médico, considerando o contexto clínico.",
          "A meta de reposição e a dose variam conforme o caso.",
          "Exposição solar, alimentação e condições de saúde influenciam os níveis.",
          "Evite copiar a dose de outra pessoa.",
        ],
      },
      { type: "callout", text: disclaimer },
    ],
  },
  {
    slug: "habitos-que-sustentam-a-longevidade",
    title: "Hábitos que sustentam a longevidade (sem fórmulas mágicas)",
    excerpt:
      "Longevidade saudável nasce de consistência. Um guia objetivo do que a ciência reforça — e do que exagera.",
    category: "Prevenção",
    date: "2026-11-15",
    readMinutes: 7,
    cover: "/images/care-preventiva.jpg",
    coverAlt: "Hábitos e longevidade sob olhar preventivo",
    tags: ["longevidade", "hábitos", "prevenção"],
    blocks: [
      {
        type: "p",
        text: "Se existe um “segredo” da longevidade, ele é pouco glamouroso: hábitos consistentes, vínculos, prevenção e cuidado médico quando necessário. Atalhos costumam prometer demais.",
      },
      { type: "h2", text: "Investimentos com bom retorno" },
      {
        type: "ul",
        items: [
          "Movimento regular ao longo da vida",
          "Alimentação adequada e sustentável",
          "Sono suficiente e rotina mais estável",
          "Não fumar e uso moderado/consciente de álcool",
          "Acompanhamento de pressão, glicemia, lipídios e outros fatores de risco",
        ],
      },
      {
        type: "p",
        text: "Na Clínica Mattos Leite, a proposta é construir um plano individualizado — com escuta, exames quando indicados e acompanhamento próximo — para que as escolhas do dia a dia façam sentido para a sua história.",
      },
      { type: "callout", text: disclaimer },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return getAllPosts().slice(0, limit);
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const score = (p: BlogPost) =>
        (p.category === current.category ? 2 : 0) + p.tags.filter((t) => current.tags.includes(t)).length;
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export function formatPostDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export const blogCategories: BlogCategory[] = [
  "Nutrologia",
  "Saúde hormonal",
  "Prevenção",
  "Composição corporal",
  "Intestino e imunidade",
  "Consulta",
];
