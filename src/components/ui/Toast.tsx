import type { FC } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button className="ml-4" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;