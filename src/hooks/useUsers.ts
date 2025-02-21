import { useState, useEffect } from "react";
import { fetchUsers } from "../services/userService";
import type { User } from "../common/types";

const useUsers = (
	page: number,
	pageSize: number,
	reload: boolean
): { users: Array<User>; loading: boolean; error: string } => {
	const [users, setUsers] = useState<Array<User>>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const fetchUsersData = async (): Promise<void> => {
			try {
				setLoading(true);
				const data = await fetchUsers();
				setUsers(data);
			} catch (error_) {
				console.log("Error fetching users:", error_);
				setError("Error fetching users");
			} finally {
				setLoading(false);
			}
		};

		fetchUsersData().catch((error) => {
			console.error("Error fetching users:", error);
		});
	}, [page, pageSize, reload]);

	return { users, loading, error };
};

export default useUsers;
