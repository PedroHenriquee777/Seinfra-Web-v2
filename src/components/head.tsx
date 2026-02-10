import { Link } from "@tanstack/react-router";
import { ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
	Title: string;
	position?: "fixed" | "relative" | "static";
}

export function Header({ Title, position = "fixed" }: HeaderProps) {
	const isRelative = position === "relative";

	
	return (
		<div
			className={cn(
				position === "fixed" && "fixed top-0",
				position === "relative" && "relative",
				position === "static" && "static",
				"flex items-center w-full font-semibold text-[#3ab0b8] z-50",

				!isRelative &&
					"justify-center lg:justify-start lg:gap-12 pt-14 pb-4 lg:px-12",

				isRelative && "justify-start sm:mt-4 gap-4 px-10 py-3 mt-12",
			)}
		>
			<Link
				to="/"
				className={cn(
					"flex items-center",
					!isRelative && "absolute left-4 lg:static",
				)}
			>
				<ChevronLeftIcon className="size-6 lg:size-10 text-seinfra-yellow-600" />
			</Link>

			<h1
				className={cn(
					"truncate",
					isRelative ? "text-xl" : "text-2xl lg:text-3xl",
				)}
			>
				{Title}
			</h1>
		</div>
	);
}
