import type { FC, ChangeEventHandler } from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import showIcon from "../../../assets/images/showIconB.png";
import hideIcon from "../../../assets/images/hideIconB.png";

interface InputProps {
	name: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	error?: string;
	type?: string;
}

const InputCustomComponent: FC<InputProps> = ({
	name,
	value,
	onChange,
	placeholder,
	error,
	type = "text",
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="input-component relative">
			<input
				className="input-field"
				name={name}
				placeholder={placeholder}
				type={type === "password" && showPassword ? "text" : type}
				value={value}
				onChange={onChange}
			/>
			{type === "password" && (
				<button
				className="toggle-password absolute right-2 top-1/2 transform -translate-y-1/2"
				type="button"
				onClick={toggleShowPassword}
			  >
				<img
				  alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
				  className="h-6 w-6"
				  src={showPassword ? hideIcon : showIcon}
				/>
			  </button>
			)}
			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default InputCustomComponent;
