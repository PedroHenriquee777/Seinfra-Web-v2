import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { z } from "zod";
import { CreatedDialog } from "@/components/created-dialog";
import { Header } from "@/components/head";
import { LoaderDialog } from "@/components/loader-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { createRequest } from "@/services/request";
import { orderRegisterSchema } from "@/services/zodSchemas";
import LogoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/pinkLine.svg";
import yellowLine from "./../../../assets/yellowLine.svg";
import { ErrorDialog } from "@/components/error-dialog";

export function OrderRegisterPage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const categories = CATEGORIES;
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof orderRegisterSchema>>({
    defaultValues: {
      neighborhood: "",
      street: "",
      reference: "",
      description: "",
      category: undefined,
    },
    resolver: zodResolver(orderRegisterSchema),
  });

  async function onSubmit(data: z.infer<typeof orderRegisterSchema>) {
    try {
      setLoading(true);
      const payload = {
        address: `${data.street}, ${data.neighborhood}`,
        reference: data.reference,
        description: `[${data.category}] ${data.description}`,
      };
      await createRequest(payload);
      setSuccessOpen(true);
      form.reset();
    } catch {
      setOpenError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <LoaderDialog open={loading} />
      <ErrorDialog
        open={openError}
        onOpenChange={setOpenError}
      />
      <CreatedDialog
        open={successOpen}
        onOpenChange={(open) => {
          setSuccessOpen(open);
          if (!open) {
            navigate({ to: "/", replace: true });
          }
        }}
      />
      <div className="relative flex min-h-dvh h-auto flex-col z-0 bg-gray-100">
        <img
          src={pinkLine}
          alt="Linha Rosa Background"
          className="absolute -z-10"
        />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 flex-col justify-center items-center w-full mx-auto px-4"
        >
          <div className="text-center mt-6">
            <h1 className="hidden sm:block text-5xl max-w-[300px] sm:max-w-component-max-w font-semibold font-manrope text-seinfra-blue-light-400 mt-10">
              Registrar Ordem
            </h1>
          </div>
          <Header position="relative" />

          <FieldGroup className="gap-2 sm:gap-8">
            <div className="flex justify-center">
              <Controller
                control={form.control}
                name="category"
                render={({ field, fieldState }) => (
                  <Field
                    orientation={"seinfra"}
                    data-invalid={fieldState.invalid}
                  >
                    <DropdownMenu onOpenChange={setOpen} {...field}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="p-4 border-2 border-seinfra-blue-light-200 rounded-2xl py-3 bg-white text-seinfra-blue-light-400 font-bold text-left justify-start hover:bg-transparent focus:bg-transparent hover:text-seinfra-blue-light-400 focus:text-seinfra-blue-light-400 focus:border-seinfra-blue-light-200"
                        >
                          {field.value || "Categoria"}
                          <DropdownMenuShortcut>
                            <DropdownMenuShortcut>
                              {open ? (
                                <ChevronUp className="text-seinfra-blue-light-400" />
                              ) : (
                                <ChevronDown className="text-seinfra-blue-light-400" />
                              )}
                            </DropdownMenuShortcut>
                          </DropdownMenuShortcut>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className=" border-2 border-seinfra-blue-light-200 rounded-2xl max-w-component-max-w w-component-w"
                      >
                        <DropdownMenuGroup>
                          {categories.map((item) => (
                            <DropdownMenuItem
                              key={item}
                              onClick={() => field.onChange(item)}
                              className="text-2xs font-bold text-seinfra-blue-light-400 cursor-pointer hover:bg-white focus:bg-white hover:text-seinfra-blue-light-400 focus:text-seinfra-blue-light-700"
                            >
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              control={form.control}
              name="neighborhood"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"seinfra"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="font-semibold">
                    Bairro
                  </FieldLabel>
                  <Input {...field} id={field.name} maxLength={50} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="street"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"seinfra"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="font-semibold">
                    Rua
                  </FieldLabel>
                  <Input {...field} id={field.name} maxLength={100} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="reference"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"seinfra"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="font-semibold">
                    Ponto de referência
                  </FieldLabel>
                  <Input {...field} id={field.name} maxLength={50} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"seinfra"}
                  data-invalid={fieldState.invalid}
                >
                  <div className="relative max-w-component-max-w w-full">
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-semibold mb-3"
                    >
                      Descreva o ocorrido
                    </FieldLabel>

                    <Textarea
                      {...field}
                      maxLength={500}
                      className={cn(
                        "border-seinfra-blue-light-200 w-full min-w-0 rounded-3xl pb-34 overflow-y-hidden focus-visible:border-seinfra-blue-light-100",
                        "resize-none text-seinfra-blue-light-700 font-semibold border-2",
                      )}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <Button type="submit" className="px-4 py-3 mt-8 rounded-3xl">
                    Enviar
                  </Button>
                </Field>
              )}
            />
          </FieldGroup>
          <footer className="border-">
            <div className="flex flex-col items-center justify-center mt-10 gap-x-24 sm:flex-row">
              <img src={LogoPrefeitura} alt="Logo Prefeitura de NovaRussas" />
            </div>
          </footer>
          <img
            src={yellowLine}
            alt="Linha Amarela de Fundo"
            className="absolute -z-10 -right-2 sm:right-0 bottom-0 "
          />
        </form>
      </div>
    </div>
  );
}
