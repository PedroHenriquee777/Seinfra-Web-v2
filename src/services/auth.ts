import { api } from "./api";

export function login(data: {
  cpf?: string;
  phone?: string;
  password: string;
}) {
  return api.post("/login", data);
}
export function register(data: {
  cpf: string;
  name: string;
  phone: string;
  password: string;
}) {
  return api.post("/registro", data);
}
