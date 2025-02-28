// src/components/ui/Toast.tsx
import type { FC } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center space-x-2 animate-fadeIn">
      <p>{message}</p>
      <button className="font-bold" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Toast;
