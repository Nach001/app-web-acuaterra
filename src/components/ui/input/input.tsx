import type { FC, ChangeEventHandler } from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";

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
		<div className="input-component">
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
					className="toggle-password"
					type="button"
					onClick={toggleShowPassword}
				>
					{showPassword ? "Ocultar" : "Mostar"}
				</button>
			)}
			{error && <span className="error">{error}</span>}
		</div>
	);
};

export default InputCustomComponent;
