import { History } from "lucide-react";
import { FileText } from "lucide-react";
import { Phone } from "lucide-react";

export const CATEGORIES = [
  "Iluminação",
  "Pipa de Água",
  "Coleta de Entulho de obra",
  "Danificação da via",
  "Poda de Árvore",
  "Limpeza de Vegetação",
  "Coleta de Resíduos Urbanos",
  "Outro (Descreva o motivo na descrição)",
] as const;

export function extractCategory(descricao: string): string {
  const match = descricao.match(/^\[(.*?)\]/);
  return match ? match[1] : "Outro";
}

export const navItems = [
  {
    Page: "/orderRegister",
    Desc: "Informe uma nova Ordem de Serviço",
    Icon: FileText,
    Label: "Nova Ordem de Serviço",
    className:
      "aspect-[5/3] w-component-w sm:w-[40vw] lg:w-[30vw] h-48 lg:h-auto max-h-96",
  },
  {
    Page: "/request",
    Desc: "Veja o andamento das suas Ordens de Serviço",
    Icon: History,
    Label: "Minhas Solicitações",
    className:
      "aspect-[5/3] w-component-w sm:w-[40vw] lg:w-[30vw] h-48 lg:h-auto max-h-96",
  },
  {
    Page: "mailto:seinfra@novarussas.ce.gov.br?subject=Solicitação%20de%20Atendimento&body=Olá,%20gostaria%20de%20tirar%20uma%20dúvida: ",
    Desc: "Envie mensagens diretamente para a Secretaria de infraestrutura",
    Icon: Phone,
    Label: "Mensagem Direta",
    className:
      "aspect-[5/3] w-component-w sm:w-[40vw] lg:w-[30vw] h-48 lg:h-auto max-h-96",
  },
];