import { useState } from "react";
import useModules from "../hooks/useModules";
import ModuleTable from "../components/ui/table/moduleTable";
import EditModuleModal from "../components/ui/modals/editModuleModalProps";
import CreateModuleModal from "../components/ui/modals/createModuleModal";
import SearchModuleInput from "../components/ui/searchBar/searchBar";
import { updateModule, createModule } from "../services/moduleService";
import type {
	Module as ModuleType,
	UpdateModuleRequest,
	CreateModuleRequest,
	FunctionComponent,
} from "../common/types";

export const Module = (): FunctionComponent => {
	const { modules, loading, error } = useModules();
	const [isEditModalOpen, setEditModalOpen] = useState(false);
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);
	const [selectedModule, setSelectedModule] = useState<ModuleType>({} as ModuleType);
	const [searchTerm, setSearchTerm] = useState("");

	const handleEdit = (module: ModuleType): void => {
		setSelectedModule(module);
		setEditModalOpen(true);
	};

	const handleDelete = async (): Promise<void> => {
		// Implementar lógica de eliminación
	};

	const handleSave = async (moduleData: UpdateModuleRequest): Promise<void> => {
		if (selectedModule) {
			await updateModule(selectedModule.id_modulo, moduleData);
			setEditModalOpen(false);
			// Refrescar la lista de módulos
		}
	};

	const handleCreate = async (
		moduleData: CreateModuleRequest
	): Promise<void> => {
		await createModule(moduleData);
		setCreateModalOpen(false);
		// Refrescar la lista de módulos
	};

	const handleSearchChange = (term: string): void => {
		setSearchTerm(term);
	};

	const filteredModules = modules.filter((module) =>
		module.nombre.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="module-list-page">
			<h1 className="text-2xl font-bold">Lista de Módulos</h1>
			<SearchModuleInput onSearchChange={handleSearchChange} />
			<button
				className="mt-4 bg-blue-500 text-white p-2 rounded"
				onClick={() => {
					setCreateModalOpen(true);
				}}
			>
				Registrar Nuevo Módulo
			</button>
			{loading && <p>Cargando...</p>}
			{error && <p>Error: {error}</p>}
			<ModuleTable
				modules={filteredModules}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<EditModuleModal
				isOpen={isEditModalOpen}
				module={selectedModule}
				onSave={handleSave}
				onClose={() => {
					setEditModalOpen(false);
				}}
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