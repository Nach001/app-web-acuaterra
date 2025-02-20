import type { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
	disabled?: boolean;
}

const ButtonComponent: FC<ButtonProps> = ({
	type = "button",
	onClick,
	children,
	disabled = false,
}) => {
	return (
		<button
			className="button-component"
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default ButtonComponent;
