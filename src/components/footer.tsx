import logoPrefeitura from "@/assets/LogoPrefeitura.svg";
import { cn } from "@/lib/utils";

export function Footer() {
	return (
		<div
			className={cn(
				"flex justify-center items-center fixed lg:static bottom-0",
				"w-full max-h-20 lg:mb-8",
				"bg-gray-100",
			)}
		>
			<img
				src={logoPrefeitura}
				aria-label="Logo prefeitura"
				className="size-44 sm:size-52"
			/>
		</div>
	);
}
