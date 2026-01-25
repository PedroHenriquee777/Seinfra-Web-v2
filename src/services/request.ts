import { api } from "./api";
import type { CreateRequestPayload } from "./types/request-types";

export function createOrders(data: CreateRequestPayload) {
  return api.post("/novaSolicitacao", data);
}

export function listOrders() {
    return api.get("/minhas-solicitacoes")
}