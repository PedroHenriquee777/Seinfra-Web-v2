import { EyeClosedIcon, EyeIcon } from "lucide-react";
import type * as React from "react";
import { forwardRef, useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PasswordInputProps = React.ComponentProps<"input">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ className, ...props }, ref) => {
		const [visible, setVisible] = useState(false);

		const toggleVisibility = useCallback(() => {
			setVisible((prev) => !prev);
		}, []);

		const Icon = visible ? EyeClosedIcon : EyeIcon;

		return (
			<div className="relative max-w-component-max-w">
				<Input
					ref={ref}
					type={visible ? "text" : "password"}
					className={cn("pr-9", className)}
					{...props}
				/>

				<button
					type="button"
					onClick={toggleVisibility}
					aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
					aria-pressed={visible}
					className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
				>
					<Icon className="size-5 text-seinfra-blue-light-300 transition:150 hover:text-seinfra-blue-light-400" />
				</button>
			</div>
		);
	},
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
