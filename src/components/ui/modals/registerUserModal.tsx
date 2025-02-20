import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";

interface RegisterUserModalProps {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	onRegister: (user: { nombre: string; email: string; password: string; n_documento_identidad: string; sede: string; rol: number; n_ficha: string; jornada: string; nombre_del_programa: string; }) => void;
}

const RegisterUserModal: React.FC<RegisterUserModalProps> = ({
	showModal,
	setShowModal,
	onRegister,
}) => {
	const [newUser, setNewUser] = useState({
		nombre: "",
		email: "",
		password: "",
		// eslint-disable-next-line camelcase
		n_documento_identidad: "",
		sede: "",
		rol: 3,
		// eslint-disable-next-line camelcase
		n_ficha: "",
		jornada: "",
		// eslint-disable-next-line camelcase
		nombre_del_programa: "",
	});

	const handleRegister = (): void => {
		onRegister(newUser);
		setShowModal(false);
	};

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-4 rounded">
				<h2>Register User</h2>
				<input
					className="mb-2 p-2"
					placeholder="Name"
					type="text"
					value={newUser.nombre}
					onChange={(_) => {
						setNewUser({ ...newUser, nombre: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Email"
					type="email"
					value={newUser.email}
					onChange={(_) => {
						setNewUser({ ...newUser, email: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Password"
					type="password"
					value={newUser.password}
					onChange={(_) => {
						setNewUser({ ...newUser, password: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Document ID"
					type="text"
					value={newUser.n_documento_identidad}
					onChange={(_) => {
						// eslint-disable-next-line camelcase
						setNewUser({ ...newUser, n_documento_identidad: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Sede"
					type="text"
					value={newUser.sede}
					onChange={(_) => {
						setNewUser({ ...newUser, sede: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Ficha"
					type="text"
					value={newUser.n_ficha}
					onChange={(_) => {
						// eslint-disable-next-line camelcase
						setNewUser({ ...newUser, n_ficha: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Jornada"
					type="text"
					value={newUser.jornada}
					onChange={(_) => {
						setNewUser({ ...newUser, jornada: _.target.value });
					}}
				/>
				<input
					className="mb-2 p-2"
					placeholder="Program Name"
					type="text"
					value={newUser.nombre_del_programa}
					onChange={(_) => {
						// eslint-disable-next-line camelcase
						setNewUser({ ...newUser, nombre_del_programa: _.target.value });
					}}
				/>
				<button className="bg-blue-500 text-white p-2" onClick={handleRegister}>
					Register
				</button>
				<button
					className="bg-red-500 text-white p-2 ml-2"
					onClick={() => {
						setShowModal(false);
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default RegisterUserModal;
