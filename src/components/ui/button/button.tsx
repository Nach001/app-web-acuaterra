import type { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  disabled?: boolean;
  className?: string; // Nueva propiedad para estilos personalizados
}

const ButtonComponent: FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      // Combina la clase por defecto con la que se le pase como prop
      className={`button-component ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
