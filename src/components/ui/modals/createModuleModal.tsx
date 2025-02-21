import type { ChangeEvent } from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import InputCustomComponent from "../input/input";
import ButtonComponent from "../button/button";
import type { CreateModuleRequest } from "../../../common/types";

interface CreateModuleModalProps {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (module: CreateModuleRequest) => void;
}

const CreateModuleModal = ({
	isOpen,
	onClose,
	onCreate,
}: CreateModuleModalProps): JSX.Element | null => {
	const [formData, setFormData] = useState<CreateModuleRequest>({
		nombre: "",
		ubicacion: "",
		// eslint-disable-next-line camelcase
		especie_pescados: "",
		// eslint-disable-next-line camelcase
		cantidad_pescados: 0,
		// eslint-disable-next-line camelcase
		edad_pescados: 0,
		dimensiones: "",
		// eslint-disable-next-line camelcase
		id_persona: 0,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (): void => {
		onCreate(formData);
	};

	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Registrar Nuevo Módulo</h2>
				<InputCustomComponent
					name="nombre"
					placeholder="Nombre"
					value={formData.nombre}
					onChange={handleChange}
				/>
				{/* Agregar más campos según sea necesario */}
				<ButtonComponent onClick={handleSubmit}>Registrar</ButtonComponent>
				<ButtonComponent onClick={onClose}>Cancelar</ButtonComponent>
			</div>
		</div>
	);
};

export default CreateModuleModal;
