import type React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState, useEffect } from 'react';
import type { UpdateBitacoraRequest, Bitacora } from '../../../common/types';

interface EditBitacoraModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    bitacora: Bitacora;
    onSave: (bitacoraData: UpdateBitacoraRequest) => void;
}

const EditBitacoraModal: React.FC<EditBitacoraModalProps> = ({ isOpen, setIsOpen, bitacora, onSave }) => {
    const [descripcion, setDescripcion] = useState(bitacora.descripcion || '');
    const [fecha, setFecha] = useState(bitacora.fecha || '');

    useEffect(() => {
        setDescripcion(bitacora.descripcion || '');
        setFecha(bitacora.fecha || '');
    }, [bitacora]);

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const updatedBitacoraData: UpdateBitacoraRequest = {
            descripcion,
            fecha,
            // eslint-disable-next-line camelcase
            id_modulo: bitacora.id_modulo,
        };
        onSave(updatedBitacoraData);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
                <h2 className="text-xl mb-4">Editar Bitácora</h2>
                <form onSubmit={handleSubmit}>
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

export default EditBitacoraModal;