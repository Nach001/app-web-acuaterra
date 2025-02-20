import { useState } from "react";

const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

interface User {
	nombre: string;
	email: string;
	password: string;
	n_documento_identidad: string;
	sede: string;
	rol: number;
	n_ficha: string;
	jornada: string;
	nombre_del_programa: string;
}

const useRegisterUser = (): {
	registerUser: (user: User) => Promise<void>;
	error: string | null;
} => {
	const [error, setError] = useState<string | null>(null);

	const registerUser = async (user: User): Promise<void> => {
		try {
			const response = await fetch(`${API_BASE_URL}/users/registerMVC`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			if (!response.ok) {
				const errorData: { message?: string } = (await response.json()) as {
					message?: string;
				};
				throw new Error(
					typeof errorData.message === "string"
						? errorData.message
						: "Network response was not ok"
				);
			}

			setError(null);
			alert("User registered successfully");
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
				alert("Error registering user: " + error.message);
			} else {
				setError(String(error));
				alert("Error registering user");
			}
		}
	};

	return { registerUser, error };
};

export default useRegisterUser;
