const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

interface LoginResponse {
    message: string;
    token: string;
    user: {
        id: number;
        identificacion: string;
    };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/users/loginMVC`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json() as Promise<LoginResponse>;
};

export const logout = async (): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/users/cerrarSecionMVC`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${localStorage.getItem("token")}`,
        },
    });

    if (!response.ok) {
        throw new Error("Logout failed");
    }
};