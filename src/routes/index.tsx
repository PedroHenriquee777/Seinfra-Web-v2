import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../view/pages/Home/HomePage";
import Cookie from "@/lib/cookie";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const login = Cookie.getCookie("login");
    if (!login) {
      throw redirect({ to: "/login" });
    }
  },
  component: HomePage,
});
