import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { logout } from "../services/authService";

export const useLogout = (): {error: string, loading: boolean, handleLogout: () => Promise<void> } => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogout = async (): Promise<void> => {
        setLoading(true);
        try {
            await logout();
            localStorage.removeItem("token");
            await navigate({ to: "/auth" });
        } catch (error) {
            setError("Logout failed");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        error,
        loading,
        handleLogout,
    };
};