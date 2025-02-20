const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;
import type { User } from "../common/types";

export const fetchUsers = async (): Promise<Array<User>> => {
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
    return data[0] as Array<User>;
};

