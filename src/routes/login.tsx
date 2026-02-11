import { LoginPage } from "@/view/pages/Login/LoginPage";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getMe } from "@/services/auth";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    try {
      await getMe();
      throw redirect({ to: "/" });
    } catch {
      return;
    }
  },
  component: LoginPage,
});
