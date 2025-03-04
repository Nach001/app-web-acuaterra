import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import type { UserRequest } from "../../../common/types";

interface RegisterUserModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  onRegister: (user: UserRequest) => void;
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
    // eslint-disable-next-line camelcase
    id_rol: 3,
    // eslint-disable-next-line camelcase
    n_ficha: "",
    jornada: "",
    // eslint-disable-next-line camelcase
    nombre_del_programa: "",
  });

  const handleRegister = (): void => {
    onRegister({ ...newUser, rol: newUser.id_rol });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-primary">Registrar Nuevo Usuario</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre de Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              placeholder="Nombre de Usuario"
              type="text"
              value={newUser.nombre}
              // eslint-disable-next-line unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, nombre: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Correo Electrónico"
              type="email"
              value={newUser.email}
              // eslint-disable-next-line unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, email: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Contraseña"
              type="password"
              value={newUser.password}
              // eslint-disable-next-line unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, password: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="n_documento_identidad">
              Documento de Identidad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="n_documento_identidad"
              placeholder="Documento de Identidad"
              type="text"
              value={newUser.n_documento_identidad}
              // eslint-disable-next-line camelcase, unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, n_documento_identidad: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sede">
              Sede
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sede"
              placeholder="Sede"
              type="text"
              value={newUser.sede}
              // eslint-disable-next-line unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, sede: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="n_ficha">
              Ficha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="n_ficha"
              placeholder="Ficha"
              type="text"
              value={newUser.n_ficha}
              // eslint-disable-next-line unicorn/prevent-abbreviations, camelcase
              onChange={(e) => { setNewUser({ ...newUser, n_ficha: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jornada">
              Jornada
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jornada"
              placeholder="Jornada"
              type="text"
              value={newUser.jornada}
              // eslint-disable-next-line unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, jornada: e.target.value }); }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_del_programa">
              Nombre del Programa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre_del_programa"
              placeholder="Nombre del Programa"
              type="text"
              value={newUser.nombre_del_programa}
              // eslint-disable-next-line camelcase, unicorn/prevent-abbreviations
              onChange={(e) => { setNewUser({ ...newUser, nombre_del_programa: e.target.value }); }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => { setShowModal(false); }}
            >
              Cancelar
            </button>
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserModal;