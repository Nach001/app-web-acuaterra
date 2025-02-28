/**
 * Página de Modulos - Acuaterra (Module).
 * Visual: Formulario basado en el Figma.
 */


// src/pages/Module.tsx
import type { FunctionComponent} from "react";
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

//Importacion de imagenes del proyecto

import closeSessionIcon from "../assets/images/cerrar-sesion.png";
import userIcon from "../assets/images/userlogo.png";
import moduleIcon from "../assets/images/module.png";
import homeIcon from "../assets/images/home.png";
import acuaterraLogo from "../assets/images/logo.png";
import reportIcon from "../assets/images/reporte.png";


/**
 * Página de módulos, se cambia la parte visual (sidebar, layout, colores).
 * La lógica de CRUD se mantiene intacta.
 */
export const Module: FunctionComponent = () => {
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const { modules, loading, error } = useModules(reload);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ModuleType>({} as ModuleType);
  const [searchTerm, setSearchTerm] = useState("");

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
    await 
    createModule(moduleData);
    setCreateModalOpen(false);
    setReload(!reload);
  };

  const handleSearchChange = (term: string): void => {
    setSearchTerm(term);
  };

  const filteredModules = modules.filter((module) =>
    module.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar con fondo gris (bg-gray-300) */}
      <aside className="w-64 bg-gray-300 border-r border-gray-400 flex flex-col">
        <div className="p-4 flex flex-col items-center">
          <img alt="Acuaterra Logo" className="h-16 mb-2" src={acuaterraLogo} />
          <p className="text-gray-800 font-semibold">Bienvenido, usuario!</p>
        </div>
        <nav className="flex-1">
          {/* Grupo 1: "Inicio", "Usuarios" y "Módulos" */}
          <ul className="space-y-20 mt-20">
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
              
              <img alt="Módulos" className="h-6 w-6 mr-2" src={reportIcon} />
              <span className="font-bold">Reporte</span>
            </li>
          </ul>
          {/* Grupo 2: "Cerrar Sesión" en bloque separado */}
          <div className="mt-60">
            <ul className="space-y-4">
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
        <div className="p-0">
          <p className="text-center text-xs mt-2">
            versión 1.0 <br /> Advanced Aquaponics Monitoring System
          </p>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Lista de Módulos</h1>
        <SearchModuleInput onSearchChange={handleSearchChange} />
        <br />
        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
          onClick={() => { setCreateModalOpen(true); }}
        >
          Registrar Nuevo Módulo
        </button>
        {loading && <p className="mt-4 text-gray-600">Cargando...</p>}
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
      </main>
    </div>
  );
};
