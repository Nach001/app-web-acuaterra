import type { ChangeEvent } from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import InputCustomComponent from "../input/input";
import ButtonComponent from "../button/button";
import type { Module, UpdateModuleRequest } from "../../../common/types";

interface EditModuleModalProps {
	isOpen: boolean;
	module: Module;
	onClose: () => void;
	onSave: (module: UpdateModuleRequest) => void;
}

const EditModuleModal = ({
	isOpen,
	module,
	onClose,
	onSave,
}: EditModuleModalProps): JSX.Element | null => {
	const [formData, setFormData] = useState<UpdateModuleRequest>({
		nombre: module?.nombre,
		ubicacion: module.ubicacion,

		// eslint-disable-next-line camelcase
		especie_pescados: module.especie_pescados,

		// eslint-disable-next-line camelcase
		cantidad_pescados: module.cantidad_pescados,

		// eslint-disable-next-line camelcase
		edad_pescados: module.edad_pescados,

		dimensiones: module.dimensiones,

		// eslint-disable-next-line camelcase
		id_persona: module.id_persona_modulo,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (): void => {
		onSave(formData);
	};

	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Editar Módulo</h2>
				<InputCustomComponent
					name="nombre"
					placeholder="Nombre"
					value={formData.nombre}
					onChange={handleChange}
				/>
				{/* Agregar más campos según sea necesario */}
				<ButtonComponent onClick={handleSubmit}>Guardar</ButtonComponent>
				<ButtonComponent onClick={onClose}>Cancelar</ButtonComponent>
			</div>
		</div>
	);
};

export default EditModuleModal;
