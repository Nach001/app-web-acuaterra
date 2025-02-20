import type React from "react";
import ButtonComponent from "../button/button";
import type { Module } from "../../../common/types";

interface ModuleTableProps {
	modules: Array<Module>;
	onEdit: (module: Module) => void;
	onDelete: (id: number) => void;
}

const ModuleTable: React.FC<ModuleTableProps> = ({
	modules,
	onEdit,
	onDelete,
}) => {
	return (
		<table className="module-table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Ubicación</th>
					<th>Especie</th>
					<th>Cantidad</th>
					<th>Edad</th>
					<th>Dimensiones</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{modules.map((module) => (
					<tr key={module.id_modulo}>
						<td>{module.nombre}</td>
						<td>{module.ubicacion}</td>
						<td>{module.especie_pescados}</td>
						<td>{module.cantidad_pescados}</td>
						<td>{module.edad_pescados}</td>
						<td>{module.dimensiones}</td>
						<td>
							<ButtonComponent
								onClick={() => {
									onEdit(module);
								}}
							>
								Editar
							</ButtonComponent>
							<ButtonComponent
								onClick={() => {
									onDelete(module.id_modulo);
								}}
							>
								Eliminar
							</ButtonComponent>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ModuleTable;
