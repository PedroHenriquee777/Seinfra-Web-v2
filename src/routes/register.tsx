import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "@/view/pages/Register/RegisterPage";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});
