import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RequestCard } from "@/components/request";
import { cn } from "@/lib/utils";
import { listRequests } from "@/services/request";
import type { ListRequestPayload } from "@/services/types/request-types";
import { extrairCategoria } from "@/lib/constants";

export function RequestPage() {
	const [orders, setOrders] = useState<ListRequestPayload[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchOrders() {
			try {
				const response = await listRequests();
				setOrders(response.data);
			} catch (error) {
				console.error("Erro ao buscar solicitações", error);
			} finally {
				setLoading(false);
			}
		}

		fetchOrders();
	}, []);

	return (
		<div>
			<Header Title="Minhas Solicitações" />
			<main
				className={cn(
					"bg-gray-100 text-seinfra-blue-light-400 font-semibold",
					"flex flex-col items-center justify-center gap-8",
					"min-h-dvh h-auto w-full overflow-hidden",
				)}
			>
				<div className="flex flex-col justify-center items-center gap-8 mt-28 mb-20 lg:mt-4">
					{!loading &&
						orders.map((order) => (
							<RequestCard
								key={order.id}
								Category={extrairCategoria(order.problem)}
								Local={order.address}
								Landmark={order.landmark}
								Problem={order.problem.replace(/^\[.*?\]\s*/, "")}
								RequestDate={order.dateRequest ?? undefined}
								ConclusionDate={order.dateRequestConcluded ?? undefined}
								State={order.status}
								Time="—"
								Name={order.solicitante?.name ?? ""}
								NumberHouse={order.solicitante?.phone ?? ""}
								CPF={order.solicitante?.cpf ?? ""}
								ImgURL={order.imagemUrl}
							/>
						))}
				</div>
				<Footer />
			</main>
		</div>
	);
}
