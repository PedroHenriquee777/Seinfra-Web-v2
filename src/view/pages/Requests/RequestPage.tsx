import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { RequestCard } from "@/components/request";
import { cn } from "@/lib/utils";
import { listRequests } from "@/services/request";
import type { ListRequestPayload } from "@/services/types/request-types";
import { extractCategory } from "@/lib/constants";
import { formatCPF } from "@/utils/format-cpf";
import { LoaderDialog } from "@/components/loader-dialog";
import { Link } from "@tanstack/react-router";
import { ChevronLeftIcon } from "lucide-react";

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
    <div className="min-h-dvh flex flex-col">
      <LoaderDialog open={loading} />

      <div
        className={cn(
          "fixed top-0",
          "flex items-center w-full font-semibold text-[#3ab0b8] z-50",
          "justify-center py-4",
          "lg:justify-start lg:gap-12 pt-15 lg:pb-4 lg:px-12",
          "bg-gray-100",
        )}
      >
        <Link to="/" className="absolute left-3 lg:static flex items-center">
          <ChevronLeftIcon className="size-8 lg:size-10 text-seinfra-yellow-600" />
        </Link>

        <h1 className="text-xl lg:text-3xl truncate">Minhas Solicitações</h1>
      </div>

      <main
        className={cn(
          "bg-gray-100 text-seinfra-blue-light-400 font-semibold",
          "flex flex-col items-center gap-8",
          "w-full flex-1",
          "pt-30 lg:pt-32",
        )}
      >
        <div className="flex flex-col justify-center items-center gap-8 mb-20">
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
