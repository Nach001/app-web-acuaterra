import { useState } from "react";
import type { UserRequest } from "../common/types";
import { createUser } from "../services/userService";

const useRegisterUser = (): {
	registerUser: (user: UserRequest) => Promise<void>;
	loading: boolean
	error: string | null;
} => {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const registerUser = async (user: UserRequest): Promise<void> => {
		try {
			setLoading(true);
			await createUser(user);
		} catch (error) {
			console.error("Error creating user:", error);
			setLoading(false);
			setError("Error creating user");
		}
	};

	return { registerUser, loading, error };
};

export default useRegisterUser;
