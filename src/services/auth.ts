import { api } from "./api";

export function login(data: {
  cpf?: string;
  telefone?: string;
  senha: string;
}) {
  return api.post("/login", data);
}
export function register(data: {
  cpf: string;
  nome: string;
  telefone: string;
  senha: string;
}) {
  return api.post("/registro", data);
}
