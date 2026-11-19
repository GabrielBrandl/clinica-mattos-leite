import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Reembolso",
};

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso">
      <p>Última atualização: novembro de 2026.</p>
      <p>
        O atendimento da {site.name} é particular. Emitimos recibo para que o paciente solicite reembolso ao convênio
        ou seguro, quando previsto em sua apólice.
      </p>
      <h2>1. Reembolso junto ao plano</h2>
      <p>
        A análise e o pagamento de reembolso são de responsabilidade exclusiva do plano de saúde/seguro do paciente.
        A clínica fornece a documentação fiscal/recibo correspondente ao serviço prestado.
      </p>
      <h2>2. Remarcações e cancelamentos</h2>
      <p>
        Pedimos aviso prévio para remarcação. Políticas específicas de cancelamento e eventuais taxas são informadas no
        momento da confirmação do agendamento.
      </p>
      <h2>3. Serviços não realizados</h2>
      <p>
        Valores eventualmente pagos antecipadamente por serviços não prestados por responsabilidade da clínica serão
        reembolsados conforme combinado no atendimento administrativo.
      </p>
      <h2>4. Contato</h2>
      <p>
        Dúvidas: {site.email} ou WhatsApp {site.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
