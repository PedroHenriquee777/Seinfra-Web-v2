import { FileText, History, Phone } from "lucide-react";

export const CATEGORIES = [
	"Iluminação",
	"Poda de árvore",
	"Buraco na pista",
	"Asfaltar",
	"Outro",
] as const;

export function extrairCategoria(descricao: string): string {
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
		Page: "/solicitacoes",
		Desc: "Veja o andamento das suas Ordens de Serviço",
		Icon: History,
		Label: "Minhas Solicitações",
		className:
			"aspect-[5/3] w-component-w sm:w-[40vw] lg:w-[30vw] h-48 lg:h-auto max-h-96",
	},
	{
		Page: "https://api.whatsapp.com/send?phone=558881677413",
		Desc: "Envie mensagens diretamente para a Secretaria de infraestrutura",
		Icon: Phone,
		Label: "Mensagem Direta",
		className:
			"aspect-[5/3] w-component-w sm:w-[40vw] lg:w-[30vw] h-48 lg:h-auto max-h-96",
	},
];
