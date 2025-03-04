import type { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent animate-spin rounded-full" />
      <span>Cargando...</span>
    </div>
  );
};

export default Spinner;
