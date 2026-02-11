import { Link } from "@tanstack/react-router";
import { ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  Title?: string;
  position?: "fixed" | "relative" | "static";
}

export function Header({ Title, position = "fixed" }: HeaderProps) {
  const displayTitle = Title ?? "Registrar Ordem";

  return (
    <div
      className={cn(
        position === "fixed" && "fixed top-0",
        position === "relative" && "relative",
        position === "static" && "static",
        "flex items-center w-full font-semibold text-[#3ab0b8] z-50",

        "justify-center py-4",

        Title
          ? "lg:justify-start lg:gap-12 lg:pt-14 lg:pb-4 lg:px-12"
          : "lg:justify-start lg:px-12",
      )}
    >
      <Link to="/" className="absolute left-3 lg:static flex items-center">
        <ChevronLeftIcon className="size-8 lg:size-10 text-seinfra-yellow-600" />
      </Link>

      <h1
        className={cn(
          "text-xl lg:text-3xl truncate",
          !Title && "lg:hidden", 
        )}
      >
        {displayTitle}
      </h1>
    </div>
  );
}
