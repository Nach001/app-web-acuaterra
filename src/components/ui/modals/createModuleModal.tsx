import { useState } from "react";
import type { CreateModuleRequest } from "../../../common/types";

interface CreateModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (moduleData: CreateModuleRequest) => void;
}

const CreateModuleModal: React.FC<CreateModuleModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState<CreateModuleRequest>({
    nombre: "",
    ubicacion: "",
    // eslint-disable-next-line camelcase
    especie_pescados: "",
    // eslint-disable-next-line camelcase
    cantidad_pescados: 0,
    // eslint-disable-next-line camelcase
    edad_pescados: 0,
    dimensiones: "",
    // eslint-disable-next-line camelcase
    id_persona: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-primary">Registrar Nuevo Módulo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ubicacion">
              Ubicación
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ubicacion"
              name="ubicacion"
              placeholder="Ubicación"
              type="text"
              value={formData.ubicacion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="especie_pescados">
              Especie de Pescados
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="especie_pescados"
              name="especie_pescados"
              placeholder="Especie de Pescados"
              type="text"
              value={formData.especie_pescados}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad_pescados">
              Cantidad de Pescados
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cantidad_pescados"
              name="cantidad_pescados"
              placeholder="Cantidad de Pescados"
              type="number"
              value={formData.cantidad_pescados}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad_pescados">
              Edad de Pescados
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="edad_pescados"
              name="edad_pescados"
              placeholder="Edad de Pescados"
              type="number"
              value={formData.edad_pescados}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensiones">
              Dimensiones
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dimensiones"
              name="dimensiones"
              placeholder="Dimensiones"
              type="text"
              value={formData.dimensiones}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_persona">
              ID Persona
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id_persona"
              name="id_persona"
              placeholder="ID Persona"
              type="number"
              value={formData.id_persona}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModuleModal;