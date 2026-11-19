import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Serviço",
};

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Serviço">
      <p>Última atualização: novembro de 2026.</p>
      <p>
        Ao utilizar o site da {site.name}, você concorda com estes termos. O conteúdo tem caráter informativo e não
        substitui consulta, diagnóstico ou tratamento médico presencial.
      </p>
      <h2>1. Serviços apresentados</h2>
      <p>
        As especialidades descritas (nutrologia, fisiologia hormonal, longevidade e correlatas) são oferecidas mediante
        agendamento e avaliação clínica individualizada. Resultados variam conforme o paciente.
      </p>
      <h2>2. Agendamento</h2>
      <p>
        Formulários e botões de WhatsApp apenas iniciam o contato. A confirmação de horário, valores e condutas ocorre
        diretamente com a equipe da clínica.
      </p>
      <h2>3. Conduta ética</h2>
      <p>
        Não publicamos avaliações falsas, promessas milagrosas ou garantias de resultado. Toda comunicação deve
        respeitar a ética médica e a legislação vigente.
      </p>
      <h2>4. Propriedade intelectual</h2>
      <p>
        Marca, textos, layout e fotos do site pertencem à {site.legalName} ou a licenciantes. É proibida a reprodução
        sem autorização.
      </p>
      <h2>5. Limitação</h2>
      <p>
        Empregamos esforços para manter informações atualizadas, sem garantir ausência de interrupções ou erros
        técnicos no site.
      </p>
      <h2>6. Contato</h2>
      <p>
        {site.email} · {site.phoneDisplay} · {site.address.full}
      </p>
    </LegalPage>
  );
}
