import { api } from "./api";
import type { CreateRequestPayload } from "./types/request-types";

export function createRequest(data: CreateRequestPayload) {
  return api.post("/novaSolicitacao", data);
}

export function listRequests() {
    return api.get("/minhas-solicitacoes")
}