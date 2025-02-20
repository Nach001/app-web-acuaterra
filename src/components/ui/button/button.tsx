import type { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const ButtonComponent: FC<ButtonProps> = ({ type = 'button', onClick, children }) => {
  return (
    <button className="button-component" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;