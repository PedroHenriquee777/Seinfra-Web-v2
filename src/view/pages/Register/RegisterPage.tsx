import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { z } from "zod";
import ConectaSeinfraIcon from "@/assets/ConectaSeinfra.svg";
import LogoPrefeitura from "@/assets/LogoPrefeitura.svg";
import pinkLine from "@/assets/pinkLine.svg";
import yellowLine from "@/assets/yellowLine.svg";
import { CreatedRegisterDialog } from "@/components/created-register";
import { ErrorRegisterDialog } from "@/components/error-register";
import { LoaderDialog } from "@/components/loader-dialog";
import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { register } from "@/services/auth";
import { registerSchema } from "@/services/zodSchemas";
import { formatCPF } from "@/utils/format-cpf";
import { formatPhone } from "@/utils/format-phone";
import { Checkbox } from "@/components/ui/checkbox";
import { TermsDialog } from "@/components/terms-of-privacy";

export function RegisterPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      cpf: "",
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    try {
      setLoading(true);

      if (step === 1) {
        await register({
          cpf: data.cpf.replace(/\D/g, ""),
          name: data.name,
          phone: data.phone,
          password: data.password,
        });
        setSuccessOpen(true);
        navigate({ to: "/login", replace: true });
      }
    } catch (err: any) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Erro ao fazer registro";

      setErrorMessage(msg);
      setOpenError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <LoaderDialog open={loading} />
      <ErrorRegisterDialog
        open={openError}
        onOpenChange={setOpenError}
        message={errorMessage}
      />
      <CreatedRegisterDialog open={successOpen} onOpenChange={setSuccessOpen} />
      <div className="relative flex justify-center items-center flex-col min-h-dvh h-auto font-semibold">
        <img
          src={pinkLine}
          alt="Linha Rosa Background"
          className="absolute left-0 -top-20 sm:-top-10"
        />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-8 justify-center items-center flex-col"
        >
          <div className="flex flex-col gap-8 text-center mt-20 w-screen">
            {step === 0 ? (
              <Link to="/login" className="z-1 hover:cursor-pointer lg:hidden">
                <ChevronLeftIcon className="text-seinfra-yellow-400 mx-2 sm:mx-4 size-8" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setStep(0)}
                className="z-1 hover:cursor-pointer lg:hidden"
              >
                <ChevronLeftIcon className="text-seinfra-yellow-400 mx-2 sm:mx-4 size-8" />
              </button>
            )}

            <div className="flex flex-col gap-8">
              <h1 className="text-5xl text-seinfra-blue-light-700 px-4">
                Criar conta
              </h1>
              <p className="text-seinfra-blue-light-500 font-normal px-4">
                Preencha as informações obrigatórias para criar a sua conta
              </p>
            </div>
          </div>
          {step === 0 && (
            <FieldGroup>
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={field.name}>Nome</FieldLabel>
                    <Input {...field} id={field.name} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={field.name}>Telefone</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      inputMode="numeric"
                      onChange={(e) => {
                        field.onChange(formatPhone(e.target.value));
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="cpf"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={field.name}>CPF</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      inputMode="numeric"
                      onChange={(e) => {
                        field.onChange(formatCPF(e.target.value));
                      }}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                    <Button
                      className="px-4 py-3 mt-14 rounded-3xl"
                      onClick={async () => {
                        const ok = await form.trigger(["name", "phone", "cpf"]);
                        if (ok) setStep(1);
                      }}
                    >
                      Continuar
                    </Button>
                  </Field>
                )}
              />
            </FieldGroup>
          )}
          {step === 1 && (
            <FieldGroup>
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
                    <PasswordInput {...field} id={field.name} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="confirmPassword"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor={field.name}>
                      Confirmar senha
                    </FieldLabel>
                    <PasswordInput {...field} id={field.name} />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}

                    <Controller
                      control={form.control}
                      name="acceptTerms"
                      render={({ field, fieldState }) => (
                        <div className="mt-6">
                          <div className="flex items-center justify-center space-x-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) =>
                                field.onChange(checked === true)
                              }
                            />

                            <div className="text-sm font-normal text-seinfra-blue-light-500 leading-tight">
                              Ao registrar-se, você concorda com os <br />
                              <TermsDialog />
                            </div>
                          </div>

                          {fieldState.error && (
                            <p className="text-red-500 text-xs mt-3">
                              {fieldState.error.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                    <Button
                      type="submit"
                      className="px-4 py-3 mt-8 rounded-3xl disabled:opacity-50"
                    >
                      Registrar-se
                    </Button>
                  </Field>
                )}
              />
            </FieldGroup>
          )}
          <footer className="flex items-center justify-center mt-14 mb-14 gap-y-12 gap-x-10 sm:gap-x-24">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="Logo Prefeitura de Nova Russas" />
          </footer>
          <img
            src={yellowLine}
            alt="Linha Amarela de Fundo"
            className="absolute -right-4 sm:right-0 -bottom-10"
          />
        </form>
      </div>
    </div>
  );
}
