import { createFileRoute } from "@tanstack/react-router";
import { OrderRegisterPage } from "@/view/pages/OrderRegister/OrderRegisterPage";

export const Route = createFileRoute("/orderRegister")({
  component: OrderRegisterPage,
});

