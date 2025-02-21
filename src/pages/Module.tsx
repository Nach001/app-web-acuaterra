import { useState } from "react";
import useModules from "../hooks/useModules";
import ModuleTable from "../components/ui/table/moduleTable";
import EditModuleModal from "../components/ui/modals/editModuleModalProps";
import CreateModuleModal from "../components/ui/modals/createModuleModal";
import SearchModuleInput from "../components/ui/searchBar/searchBar";
import { updateModule, createModule, deleteModule } from "../services/moduleService";
import type {
    Module as ModuleType,
    UpdateModuleRequest,
    CreateModuleRequest,
    FunctionComponent,
} from "../common/types";

export const Module = (): FunctionComponent => {
	const [reload, setReload] = useState(false);
    const { modules, loading, error } = useModules(reload);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [selectedModule, setSelectedModule] = useState<ModuleType>({} as ModuleType);
    const [searchTerm, setSearchTerm] = useState("");

    const handleEdit = (module: ModuleType): void => {
        setSelectedModule(module);
        setEditModalOpen(true);
		setReload(!reload); //
    };

    const handleDelete = async (moduleId: number): Promise<void> => {
        await deleteModule(moduleId);
		setReload(!reload); //
    };

    const handleSave = async (moduleData: UpdateModuleRequest): Promise<void> => {
        if (selectedModule) {
            await updateModule(selectedModule.id_modulo, moduleData);
            setEditModalOpen(false);
			setReload(!reload); //
        }
    };

    const handleCreate = async (
        moduleData: CreateModuleRequest
    ): Promise<void> => {
        await createModule(moduleData);
        setCreateModalOpen(false);
		setReload(!reload); //
    };

    const handleSearchChange = (term: string): void => {
        setSearchTerm(term);
    };

    const filteredModules = modules.filter((module) =>
        module.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mt-4">Lista de Módulos</h1>
            <SearchModuleInput onSearchChange={handleSearchChange} />
            <button
                className="mt-4 bg-green-500 text-white p-2 rounded"
                onClick={() => {
                    setCreateModalOpen(true);
                }}
            >
                Registrar Nuevo Módulo
            </button>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <div className="overflow-y-auto max-h-96 w-full mt-4">
                <ModuleTable
                    modules={filteredModules}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
            <EditModuleModal
                isOpen={isEditModalOpen}
                module={selectedModule}
                setIsOpen={setEditModalOpen}
                onSave={handleSave}
            />
            <CreateModuleModal
                isOpen={isCreateModalOpen}
                onCreate={handleCreate}
                onClose={() => {
                    setCreateModalOpen(false);
                }}
            />
        </div>
    );
};