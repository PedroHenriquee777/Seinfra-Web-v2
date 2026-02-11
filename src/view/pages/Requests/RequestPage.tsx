import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/head";
import { RequestCard } from "@/components/request";
import { cn } from "@/lib/utils";
import { listRequests } from "@/services/request";
import type { ListRequestPayload } from "@/services/types/request-types";
import { extractCategory } from "@/lib/constants";
import { formatCPF } from "@/utils/format-cpf";
import { LoaderDialog } from "@/components/loader-dialog";

export function RequestPage() {
  const [orders, setOrders] = useState<ListRequestPayload[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
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
      <LoaderDialog open={loading} />
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
                Category={extractCategory(order.problem)}
                Address={order.address}
                Reference={order.reference}
                Problem={order.problem.replace(/^\[.*?\]\s*/, "")}
                RequestDate={order.dateRequest}
                RequestDateConcluded={order.dateRequestConcluded}
                State={order.status}
                Time="—"
                Name={order.applicant?.name ?? ""}
                NumberHouse={order.applicant?.phone ?? ""}
                CPF={order.applicant?.cpf ? formatCPF(order.applicant.cpf) : ""}
                
              />
            ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
