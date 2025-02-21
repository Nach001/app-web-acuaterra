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
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-hidden">
                <h2 className="text-xl mb-4">Registrar Nuevo Módulo</h2>
                <form className="overflow-y-auto max-h-60 p-2 border rounded" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Nombre</label>
                        <input required className="border p-2 w-full" name="nombre" type="text" value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Ubicación</label>
                        <input required className="border p-2 w-full" name="ubicacion" type="text" value={formData.ubicacion} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Especie de Pescados</label>
                        <input required className="border p-2 w-full" name="especie_pescados" type="text" value={formData.especie_pescados} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Cantidad de Pescados</label>
                        <input required className="border p-2 w-full" name="cantidad_pescados" type="number" value={formData.cantidad_pescados} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Edad de Pescados</label>
                        <input required className="border p-2 w-full" name="edad_pescados" type="text" value={formData.edad_pescados} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Dimensiones</label>
                        <input required className="border p-2 w-full" name="dimensiones" type="text" value={formData.dimensiones} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">ID Persona</label>
                        <input required className="border p-2 w-full" name="id_persona" type="number" value={formData.id_persona} onChange={handleChange} />
                    </div>
                    <div className="flex justify-end">
                        <button className="mr-2 p-2 bg-gray-500 text-white" type="button" onClick={onClose}>
                            Cancelar
                        </button>
                        <button className="p-2 bg-blue-500 text-white" type="submit">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateModuleModal;
