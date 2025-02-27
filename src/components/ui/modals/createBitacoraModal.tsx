import type React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import type { CreateBitacoraRequest } from '../../../common/types';

interface CreateBitacoraModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onCreate: (bitacoraData: CreateBitacoraRequest) => void;
}

const CreateBitacoraModal: React.FC<CreateBitacoraModalProps> = ({ isOpen, setIsOpen, onCreate }) => {
    const [idModulo, setIdModulo] = useState<number>(1); // Default value, adjust as needed
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const newBitacoraData: CreateBitacoraRequest = {
            // eslint-disable-next-line camelcase
            id_modulo: idModulo,
            descripcion,
            fecha,
        };
        onCreate(newBitacoraData);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
                <h2 className="text-xl mb-4">Registrar Nueva Bitácora</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">ID del Módulo</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="number"
                            value={idModulo}
                            onChange={(_) => { setIdModulo(Number(_.target.value)); }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Descripción</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="text"
                            value={descripcion}
                            onChange={(_) => { setDescripcion(_.target.value); }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Fecha</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="date"
                            value={fecha}
                            onChange={(_) => { setFecha(_.target.value); }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="mr-2 p-2 bg-gray-500 text-white" type="button" onClick={() => { setIsOpen(false); }}>
                            Cancelar
                        </button>
                        <button className="p-2 bg-blue-500 text-white" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBitacoraModal;