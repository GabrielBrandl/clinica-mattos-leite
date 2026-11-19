import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>Última atualização: novembro de 2026.</p>
      <p>
        Esta política descreve como a {site.legalName} (CNPJ {site.cnpj}) trata dados pessoais em conformidade com a Lei
        Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </p>
      <h2>1. Controladora</h2>
      <p>
        {site.legalName}, localizada em {site.address.full}. Contato: {site.email} · {site.phoneDisplay}.
      </p>
      <h2>2. Dados coletados</h2>
      <p>Coletamos apenas os dados necessários para atendimento e comunicação:</p>
      <ul>
        <li>Nome e telefone/WhatsApp informados em formulários de agendamento ou dúvidas</li>
        <li>Preferência de profissional e objetivo clínico descrito voluntariamente</li>
        <li>Dados técnicos mínimos de navegação (cookies essenciais)</li>
      </ul>
      <h2>3. Finalidades e bases legais</h2>
      <ul>
        <li>Execução de procedimentos preliminares ao atendimento médico (art. 7º, V e art. 11)</li>
        <li>Consentimento para contato via WhatsApp/e-mail (art. 7º, I)</li>
        <li>Cumprimento de obrigação legal e exercício regular de direitos</li>
      </ul>
      <h2>4. Compartilhamento</h2>
      <p>
        Não vendemos dados. Podemos utilizar ferramentas de comunicação (ex.: WhatsApp) sob responsabilidade do
        usuário ao redirecionar a mensagem. Prestadores de hospedagem podem processar dados técnicos sob contrato.
      </p>
      <h2>5. Direitos do titular</h2>
      <p>
        Você pode solicitar confirmação, acesso, correção, anonimização, portabilidade, eliminação e revogação do
        consentimento pelo e-mail {site.email}.
      </p>
      <h2>6. Retenção e segurança</h2>
      <p>
        Mantemos os dados pelo tempo necessário às finalidades informadas e adotamos medidas técnicas e
        administrativas razoáveis de proteção.
      </p>
      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre privacidade: {site.email}. Esta página pode ser atualizada; a versão vigente estará sempre
        publicada neste endereço.
      </p>
    </LegalPage>
  );
}
