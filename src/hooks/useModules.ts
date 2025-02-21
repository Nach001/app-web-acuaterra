import { useState, useEffect } from "react";
import { fetchModules } from "../services/moduleService";

interface Module {
	id_modulo: number;
	nombre: string;
	ubicacion: string;
	especie_pescados: string;
	cantidad_pescados: string;
	edad_pescados: string;
	dimensiones: string;
	id_persona_modulo: number;
	nombre_persona_modulo: string;
	id_persona_asignada: number | null;
	nombre_persona_asignada: string | null;
}

const useModules = (reload: boolean): {
	modules: Array<Module>;
	loading: boolean;
	error: string;
} => {
	const [modules, setModules] = useState<Array<Module>>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const fetchModulesData = async (): Promise<void> => {
			try {
				setLoading(true);
				const data = await fetchModules();
				setModules(data);
			} catch (error_) {
				console.log("Error fetching modules:", error_);
				setError("Error fetching modules");
			} finally {
				setLoading(false);
			}
		};

		fetchModulesData().catch((error) => {
			console.error("Error fetching modules:", error);
		});
	}, [reload]);

	return { modules, loading, error };
};

export default useModules;
