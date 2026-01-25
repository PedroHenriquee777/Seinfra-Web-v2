import { z } from "zod";
import { CATEGORIES } from "../lib/constants";
export const userLoginSchema = z.object({
  cpf: z
    .string()
    .max(14, { message: "CPF invalido" })
    .min(1, { message: "O campo precisa ser preenchido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  senha: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
});
export const orderRegisterSchema = z.object({
  neighborhood: z
    .string()
    .min(1, { message: "O campo deve ser preenchido" })
    .max(49, { message: "Digite no máximo 50 caracteres." }),

  street: z
    .string()
    .min(1, { message: "O campo deve ser preenchido" })
    .max(99, { message: "Digite no máximo 100 caracteres." }),
  reference: z
    .string()
    .min(1, { message: "O campo deve ser preenchido" })
    .max(49, { message: "Digite no máximo 50 caracteres." }),
  desc: z
    .string()
    .min(1, { message: "O campo deve ser preenchido" })
    .max(499, { message: "Digite no máximo 500 caracteres." }),
  category: z.enum(CATEGORIES, {
    message: "Selecione uma categoria",
  }),
});
export const registerSchema = z
  .object({
    senha: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
    confirmPassword: z.string(),
    nome: z.string().min(1, { message: "O campo deve ser preenchido" }),
    telefone: z
      .string()
      .regex(/^[0-9]{2}\s[0-9]{5}-[0-9]{4}$/, { message: "Numero invalido" }),
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  })
  .superRefine(({ confirmPassword, senha }, ctx) => {
    if (confirmPassword !== senha) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
      });
    }
  });
