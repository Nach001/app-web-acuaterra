const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;
import type { User, UserRequest } from "../common/types";

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
    return await response.json() as Array<User>;
};

interface ModuleResponse {
	message: string;
}

export const createUser = async (userData: UserRequest): Promise<ModuleResponse> => {
    const response = await fetch(`${API_BASE_URL}/users/registerMVC`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<ModuleResponse>;
}

export const deleteUser = async (userId: number): Promise<void> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "DELETE",
        headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
};

export const updateUser = async (userId: number, userData: UserRequest): Promise<void> => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
};