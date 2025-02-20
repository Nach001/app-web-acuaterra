import type React from "react";

interface User {
    id_persona: number;
    nombre: string;
    email: string;
    n_documento_identidad: string;
    sede: string;
    rol: string;
    usuario_ficha: string | null;
    jornada: string | null;
    usuario_programa: string | null;
    instructor_ficha: string | null;
    instructor_programa: string | null;
}

interface UserTableProps {
    users: Array<User>;
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2">ID</th>
                    <th className="py-2">Nombre</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Documento</th>
                    <th className="py-2">Sede</th>
                    <th className="py-2">Rol</th>
                    <th className="py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id_persona}>
                        <td className="py-2">{user.id_persona}</td>
                        <td className="py-2">{user.nombre}</td>
                        <td className="py-2">{user.email}</td>
                        <td className="py-2">{user.n_documento_identidad}</td>
                        <td className="py-2">{user.sede}</td>
                        <td className="py-2">{user.rol}</td>
                        <td className="py-2">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded">Editar</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;