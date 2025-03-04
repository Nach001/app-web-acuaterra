/**
 * Página de Modulos - Acuaterra (Module).
 * Visual: Formulario basado en el Figma.
 */

import type { FunctionComponent } from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import useModules from "../hooks/useModules";
import ModuleTable from "../components/ui/table/moduleTable";
import EditModuleModal from "../components/ui/modals/editModuleModalProps";
import CreateModuleModal from "../components/ui/modals/createModuleModal";
import SearchModuleInput from "../components/ui/searchBar/searchBar";
import { useNavigate } from "@tanstack/react-router";
import { updateModule, createModule, deleteModule } from "../services/moduleService";
import type {
  Module as ModuleType,
  UpdateModuleRequest,
  CreateModuleRequest,
} from "../common/types";
import Layout from "../components/layout/layout";
import Toast from "../components/ui/Toast";
import Spinner from "../components/ui/Spinner";

import closeSessionIcon from "../assets/images/cerrar-sesion.png";
import userIcon from "../assets/images/userlogo.png";
import moduleIcon from "../assets/images/module.png";
import homeIcon from "../assets/images/home.png";
import acuaterraLogo from "../assets/images/logo.png";
import reportIcon from "../assets/images/reporte.png";


export const Module: FunctionComponent = () => {
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const { modules, loading, error } = useModules(reload);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleType>({} as ModuleType);
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleEdit = (module: ModuleType): void => {
    setSelectedModule(module);
    setEditModalOpen(true);
    setReload(!reload);
  };

  const handleDelete = async (moduleId: number): Promise<void> => {
    await deleteModule(moduleId);
    setReload(!reload);
  };

  const handleSave = async (moduleData: UpdateModuleRequest): Promise<void> => {
    if (selectedModule) {
      await updateModule(selectedModule.id_modulo, moduleData);
      setEditModalOpen(false);
      setReload(!reload);
    }
  };

  const handleCreate = async (moduleData: CreateModuleRequest): Promise<void> => {
    await createModule(moduleData);
    setCreateModalOpen(false);
    setReload(!reload);
    setShowToast(true); // Mostramos la notificación
  };

  const handleSearchChange = (term: string): void => {
    setSearchTerm(term);
  };

  const filteredModules = modules.filter((module) =>
    module.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans">
        {/* Sidebar con fondo gris (bg-gray-300) */}
        <aside className="w-full md:w-64 bg-gray-300 border-r border-gray-400 flex flex-col shadow-lg">
          <div className="p-4 flex flex-col items-center">
            <img alt="Acuaterra Logo" className="h-16 mb-2" src={acuaterraLogo} />
            <p className="text-gray-800 font-semibold">Bienvenido, usuario!</p>
          </div>
          <nav className="flex-1">
            {/* Grupo 1: "Inicio", "Usuarios" y "Módulos" */}
            <ul className="space-y-4 mt-4 md:space-y-20 md:mt-20">
              <li
                className="flex items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                onClick={() => navigate({ to: "/newHome" })}
              >
                <img alt="Inicio" className="h-6 w-6 mr-2" src={homeIcon} />
                <span className="font-bold">Inicio</span>
              </li>
              <li
                className="flex items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                onClick={() => navigate({ to: "/users" })}
              >
                <img alt="Usuarios" className="h-6 w-6 mr-2" src={userIcon} />
                <span className="font-bold">Usuarios</span>
              </li>
              <li
                className="flex items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                onClick={() => navigate({ to: "/module" })}
              >
                <img alt="Módulos" className="h-6 w-6 mr-2" src={moduleIcon} />
                <span className="font-bold">Módulos</span>
              </li>
              <li
                className="flex items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-300 hover:scale-105"
                onClick={() => navigate({ to: "/report" })}
              >
                <img alt="Reporte" className="h-6 w-6 mr-2" src={reportIcon} />
                <span className="font-bold">Reporte</span>
              </li>
              
            </ul>

            {/* Grupo 2: "Cerrar Sesión" en bloque separado */}
            <div className="mt-40 md:mt-20 lg:mt-40">
              <ul className="space-y-10">
                <li
                  className="flex items-center p-2 cursor-pointer transition-all duration-300 hover:bg-gray-400 hover:scale-105"
                  onClick={() => navigate({ to: "/auth" })}
                >
                  <img alt="Cerrar Sesión" className="h-6 w-6 mr-2" src={closeSessionIcon} />
                  <span className="font-bold">Cerrar Sesión</span>
                </li>
              </ul>
            </div>
          </nav>


          {/* Footer: Texto del footer subido un poco */}
          <div className="p-0 mt-4 md:mt-2">
            <p className="text-center text-xs">
              versión 1.0 <br /> Advanced Aquaponics Monitoring System
            </p>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-4 md:p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Lista de Módulos</h1>
          <SearchModuleInput onSearchChange={handleSearchChange} />
          <br />
          <button
            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition w-full md:w-auto"
            onClick={() => { setCreateModalOpen(true); }}
          >
            Registrar Nuevo Módulo
          </button>
          {loading && (
            <div className="mt-4">
              <Spinner />
            </div>
          )}
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
          <div className="mt-4 overflow-x-auto">
            <ModuleTable modules={filteredModules} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
          <EditModuleModal
            isOpen={isEditModalOpen}
            module={selectedModule}
            setIsOpen={setEditModalOpen}
            onSave={handleSave}
          />
          <CreateModuleModal
            isOpen={isCreateModalOpen}
            onClose={() => { setCreateModalOpen(false); }}
            onCreate={handleCreate}
          />
          {/* Toast de confirmación */}
          {showToast && (
            <Toast
              message="Módulo registrado exitosamente"
              onClose={() => { setShowToast(false); }}
            />
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Module;