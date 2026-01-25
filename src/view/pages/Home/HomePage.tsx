import ConectaSeinfraIcon from "@/assets/ConectaSeinfraLight.svg";
import LogoPrefeitura from "@/assets/LogoPrefeitura.svg";
import pinkLine from "@/assets/pinkLine.svg";
import yellowLine from "@/assets/yellowLine.svg";
import NavButton from "@/components/nav-button";
import { navItems } from "@/lib/constants";

export function HomePage() {
	return (
		<div className="relative flex flex-col min-h-dvh h-auto overflow-hidden">
			<img
				src={pinkLine}
				alt="Linha Rosa de fundo"
				className="absolute left-0 top-0"
			/>
			<main className="flex-1 flex bg-gray-100 justify-center items-center">
				<div className="flex flex-col items-center justify-center min-h-full">
					<img
						src={ConectaSeinfraIcon}
						alt="Logo Conecta Seinfra"
						className="size-44 sm:size-58 lg:size-70"
					/>
					<div className="flex flex-col items-center justify-center gap-12 ">
						<div className="flex flex-wrap gap-12 justify-center items-center">
							{navItems.slice(0, 2).map((item) => (
								<NavButton key={item.Page} {...item} />
							))}
						</div>
						<div className="flex gap-12 justify-center items-center">
							{navItems.slice(2, 3).map((item) => (
								<NavButton key={item.Page} {...item} />
							))}
						</div>
					</div>
					<img
						src={LogoPrefeitura}
						alt="Logo Prefeitura"
						className="size-54 sm:size-64 lg:size-74"
					/>
				</div>
			</main>
			<img
				src={yellowLine}
				alt="Linha Amarela de fundo"
				className="absolute translate-x-5 sm:translate-x-0 right-0 bottom-0"
			/>
		</div>
	);
}
