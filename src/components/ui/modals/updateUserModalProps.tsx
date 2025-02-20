import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import type { UserRequest, User } from "../../../common/types";

interface UpdateUserModalProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    user: User;
    onUpdate: (userId: number, userData: UserRequest) => void;
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({ showModal, setShowModal, user, onUpdate }) => {
    const [nombre, setNombre] = useState(user.nombre);
    const [password, setPassword] = useState("");
    const [sede, setSede] = useState(user.sede);
    const [idRol, setIdRol] = useState<number>(Number(user.rol));

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const updatedUserData: UserRequest = {
            nombre,
            email: user.email, // Email should not be modified
            password,
            // eslint-disable-next-line camelcase
            n_documento_identidad: user.n_documento_identidad, // Identity should not be modified
            sede,
            // eslint-disable-next-line camelcase
            n_ficha: user.usuario_ficha || "",
            jornada: user.jornada || "",
            // eslint-disable-next-line camelcase
            nombre_del_programa: user.usuario_programa || "Test",
            // eslint-disable-next-line camelcase
            id_rol: idRol,
        };
        onUpdate(user.id_persona, updatedUserData);
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded">
                <h2 className="text-xl mb-4">Update User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="text"
                            value={nombre}
                            onChange={(_) => { setNombre(_.target.value); }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            readOnly
                            className="border p-2 w-full bg-gray-200"
                            type="email"
                            value={user.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="password"
                            value={password}
                            onChange={(_) => { setPassword(_.target.value); }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Document ID</label>
                        <input
                            readOnly
                            className="border p-2 w-full bg-gray-200"
                            type="text"
                            value={user.n_documento_identidad}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Sede</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="text"
                            value={sede}
                            onChange={(_) => { setSede(_.target.value); }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Role ID</label>
                        <input
                            required
                            className="border p-2 w-full"
                            type="number"
                            value={idRol}
                            onChange={(_) => { setIdRol(Number(_.target.value)); }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="mr-2 p-2 bg-gray-500 text-white" type="button" onClick={() => { setShowModal(false); }}>
                            Cancel
                        </button>
                        <button className="p-2 bg-blue-500 text-white" type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserModal;