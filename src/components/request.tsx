import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface Props {
	Category: string;
	Address: string;
	Reference: string;
	Problem: string;
	RequestDate?: string;
	ConclusionDate?: string;
	State: string;
	Time: string;
	CPF: string;
	Name: string;
	NumberHouse: string;
	ImgURL?: string | undefined;
}

export function RequestCard({
	Category,
	Address,
	Reference,
	Problem,
	RequestDate,
	State,
	Time,
	CPF,
	Name,
	NumberHouse,
}: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className={cn("bg-background rounded-3xl", "flex w-component-w")}>
					<div
						className={cn(
							"bg-gray-500",
							`${State === "Finalizada" && "bg-seinfra-green-500"}`,
							`${State === "Em execução" && "bg-seinfra-yellow-500"}`,
							`${State === "Excluída" && "bg-red-500"}`,
							"text-transparent rounded-tl-3xl rounded-bl-3xl",
							"w-4 shrink-0",
						)}
					/>
					<div
						className={cn(
							"px-3 py-4",
							"flex grow text-sm text-seinfra-blue-light-700-50",
						)}
					>
						<div className="flex flex-col flex-1 gap-2 break-all">
							<div>
								<h1 className="font-bold line-clamp-1 text-md md:text-lg text-seinfra-blue-light-700-70">
									Categoria: {Category}
								</h1>
							</div>
							<div className="flex flex-col gap-2 text-xs md:text-sm">
								<h3 className="line-clamp-1">Local: {Address}</h3>
								<h3 className="line-clamp-1">Problema: {Problem}</h3>
							</div>
							<div className="flex flex-col gap-2 text-[0.525rem] md:text-[0.625rem]">
								<p>Data de solicitação: {RequestDate}</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 justify-between items-end">
							<div
								className={cn(
									"bg-gray-500 py-2 px-4",
									`${State === "Finalizada" && "bg-seinfra-green-500"}`,
									`${State === "Excluída" && "bg-red-500"}`,
									`${State === "Em execução" && "bg-seinfra-yellow-500 px-2"}`,
									"text-background text-xs rounded-sm",
								)}
							>
								{State}
							</div>
							<p>{Time}</p>
						</div>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent
				className={cn(
					"overflow-x-hidden flex p-0 max-h-[80dvh] lg:max-h-[95dvh]",
					"text-seinfra-blue-light-700 bg-transparent rounded-tl-xl rounded-bl-xl outline-none shadow-sm border-transparent",
				)}
				showCloseButton={false}
			>
				<div className="flex w-full h-full overflow-hidden bg-white gap-2">
					<div
						className={cn(
							"bg-gray-500",
							`${State === "Finalizada" && "bg-seinfra-green-500"}`,
							`${State === "Em execução" && "bg-seinfra-yellow-500"}`,
							`${State === "Excluída" && "bg-red-500"}`,
							"text-transparent",
							"w-4 shrink-0",
						)}
					/>
					<div className="w-full">
						<div
							className={cn(
								"px-3 py-4 font-semibold",
								"flex gap-2 flex-col grow text-sm text-seinfra-blue-light-700-50",
							)}
						>
							<div className="flex justify-center items-center">
								<div className="absolute right-5 self-start">
									<div
										className={cn(
											"bg-gray-500 py-2 px-2 lg:px-4",
											`${State === "Finalizada" && "bg-seinfra-green-500"}`,
											`${State === "Excluída" && "bg-red-500"}`,
											`${State === "Em execução" && "bg-seinfra-yellow-500 px-1 lg:px-2"}`,
											"text-background text-xs rounded-sm",
										)}
									>
										{State}
									</div>
								</div>
							</div>
							<div className="flex flex-col flex-1 gap-8 break-all">
								<div className="flex flex-col gap-2 text-sm md:text-md xl:text-lg">
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											Nome:{" "}
										</span>
										{Name}
									</h3>
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											Número:{" "}
										</span>
										{NumberHouse}
									</h3>
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											CPF:{" "}
										</span>
										{CPF}
									</h3>
								</div>
								<div className="flex flex-col gap-2 text-sm md:text-md xl:text-lg">
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											Categoria:{" "}
										</span>
										{Category}
									</h3>
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											Endereço:{" "}
										</span>
										{Address}
									</h3>
									<h3>
										<span className="text-seinfra-blue-light-700-70">
											Ponto de referência:{" "}
										</span>
										{Reference}
									</h3>
								</div>
								<div className="flex flex-col gap-2 text-sm">
									<p>
										<span className="text-seinfra-blue-light-700-70">
											Descrição:{" "}
										</span>
										{Problem}
									</p>
								</div>

								<div className="flex flex-col gap-2 text-sm">
									<p>
										<span className="text-seinfra-blue-light-700-70">
											Data de solicitação:{" "}
										</span>
										{RequestDate}
									</p>
									<p></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
