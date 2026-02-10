import { createFileRoute } from "@tanstack/react-router";
import { RequestPage } from "@/view/pages/Requests/RequestPage"

export const Route = createFileRoute("/request")({
  component: RequestPage,
});
