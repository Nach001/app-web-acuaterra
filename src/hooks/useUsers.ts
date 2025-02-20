import { useState, useEffect } from "react";

const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

interface User {
	id_persona: number;
	nombre: string;
	email: string;
	n_documento_identidad: string;
	sede: string;
	rol: string;
	usuario_ficha: string | null;
	jornada: string | null;
	usuario_programa: string | null;
	instructor_ficha: string | null;
	instructor_programa: string | null;
}

const useUsers = (
	page: number,
	pageSize: number
): { users: Array<User>; loading: boolean; error: string } => {
	const [users, setUsers] = useState<Array<User>>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const fetchUsers = async (): Promise<void> => {
			try {
				setLoading(true);
				const token = localStorage.getItem("token");
				const response = await fetch(
					`${API_BASE_URL}/users/listarpersonasMVC`,
					{
						method: "GET",
						headers: {
							Authorization: `${token}`,
							"Content-Type": "application/json",
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data: Array<Array<User>> = (await response.json()) as Array<
					Array<User>
				>;
				if (data[0]) {
					setUsers(data[0]);
				} else {
					setUsers([]);
				}
			} catch (error_) {
				console.log("Error fetching users:", error_);
				setError("Error fetching users");
			} finally {
				setLoading(false);
			}
		};

		fetchUsers().catch((error) => {
			console.error("Error fetching users:", error);
		});
	}, [page, pageSize]);

	return { users, loading, error };
};

export default useUsers;
