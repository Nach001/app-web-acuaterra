import { useState } from 'react';
import useBitacoras from '../hooks/useBitacoras';
import BitacoraTable from '../components/ui/table/bitacoraTable';
import EditBitacoraModal from '../components/ui/modals/editBitacoraModal';
import CreateBitacoraModal from '../components/ui/modals/createBitacoraModal';
import { updateBitacora, createBitacora, deleteBitacora } from '../services/bitacoraService';
import type {
    Bitacora as BitacoraType,
    UpdateBitacoraRequest,
    CreateBitacoraRequest,
    FunctionComponent,
} from '../common/types';

export const Bitacoras = (): FunctionComponent => {
    const [reload, setReload] = useState(false);
    const { bitacoras, loading, error } = useBitacoras(reload);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [selectedBitacora, setSelectedBitacora] = useState<BitacoraType>({} as BitacoraType);

    const handleEdit = (bitacora: BitacoraType): void => {
        setSelectedBitacora(bitacora);
        setEditModalOpen(true);
    };

    const handleDelete = async (bitacoraId: number): Promise<void> => {
        await deleteBitacora(bitacoraId);
        setReload(!reload); // Recargar la lista de bitácoras
    };

    const handleSave = async (bitacoraData: UpdateBitacoraRequest): Promise<void> => {
        if (selectedBitacora) {
            await updateBitacora(selectedBitacora.id_bitacora, bitacoraData);
            setEditModalOpen(false);
            setReload(!reload); // Recargar la lista de bitácoras
        }
    };

    const handleCreate = async (
        bitacoraData: CreateBitacoraRequest
    ): Promise<void> => {
        await createBitacora(bitacoraData);
        setCreateModalOpen(false);
        setReload(!reload); // Recargar la lista de bitácoras
    };

    return (
        <div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mt-4">Lista de Bitácoras</h1>
            <button
                className="mt-4 bg-green-500 text-white p-2 rounded"
                onClick={() => {
                    setCreateModalOpen(true);
                }}
            >
                Registrar Nueva Bitácora
            </button>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <div className="overflow-y-auto max-h-96 w-full mt-4">
                <BitacoraTable
                    bitacoras={bitacoras}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
            <EditBitacoraModal
                bitacora={selectedBitacora}
                isOpen={isEditModalOpen}
                setIsOpen={setEditModalOpen}
                onSave={handleSave}
            />
            <CreateBitacoraModal
                isOpen={isCreateModalOpen}
                setIsOpen ={() => { setCreateModalOpen(false); }}
                onCreate={handleCreate}
            />
        </div>
    );
};