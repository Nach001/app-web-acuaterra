import type React from 'react';
import type { Bitacora } from '../../../common/types';

interface BitacoraTableProps {
    bitacoras: Array<Bitacora>;
    onDelete: (bitacoraId: number) => void;
    onEdit: (bitacora: Bitacora) => void;
}

const BitacoraTable: React.FC<BitacoraTableProps> = ({ bitacoras, onDelete, onEdit }) => {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2">ID</th>
                    <th className="py-2">Descripción</th>
                    <th className="py-2">Fecha</th>
                    <th className="py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {bitacoras.map((bitacora) => (
                    <tr key={bitacora.id_bitacora}>
                        <td className="py-2">{bitacora.id_bitacora}</td>
                        <td className="py-2">{bitacora.descripcion}</td>
                        <td className="py-2">{new Date(bitacora.fecha).toLocaleDateString()}</td>
                        <td className="py-2">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => { onEdit(bitacora); }}>
                                Editar
                            </button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={() => { onDelete(bitacora.id_bitacora); }}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BitacoraTable;