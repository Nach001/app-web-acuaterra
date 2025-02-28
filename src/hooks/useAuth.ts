import type { Dispatch, SetStateAction} from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { login } from "../services/authService";

export const useAuth = (): {
email: string,
setEmail: Dispatch<SetStateAction<string>>,
password: string,
setPassword: Dispatch<SetStateAction<string>>,
error: string,
loading: boolean,
handleLogin: () => Promise<void>
}=>  {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (): Promise<void> => {
        setLoading(true);
        try {
            const data = await login(email, password);
            localStorage.setItem("token", data.token);
            await navigate({ to: "/users" });
        } catch (error) {
            setError("Invalid email or password");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loading,
        handleLogin,
    };
};