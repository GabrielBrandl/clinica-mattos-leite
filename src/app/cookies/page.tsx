import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de Cookies",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Aviso de Cookies">
      <p>Última atualização: novembro de 2026.</p>
      <p>
        Este site utiliza cookies e tecnologias semelhantes para garantir funcionamento básico e, quando autorizado,
        compreender o uso das páginas.
      </p>
      <h2>Cookies essenciais</h2>
      <p>
        Necessários para segurança, preferência de consentimento e navegação. Não exigem consentimento adicional além
        do aviso.
      </p>
      <h2>Cookies de medição (opcionais)</h2>
      <p>
        Somente ativados se você escolher “Aceitar” no banner. Servem para estatísticas agregadas de audiência. Você
        pode permanecer apenas com cookies essenciais.
      </p>
      <h2>Gestão</h2>
      <p>
        Você pode limpar o armazenamento local do navegador para rever o banner, ou ajustar bloqueio de cookies nas
        configurações do próprio navegador.
      </p>
      <h2>Mais informações</h2>
      <p>
        Consulte também a <a href="/privacidade">Política de Privacidade</a>. Contato: {site.email}.
      </p>
    </LegalPage>
  );
}
