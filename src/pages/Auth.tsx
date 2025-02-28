import type { FunctionComponent } from "react";
import ButtonComponent from "../components/ui/button/button";
import InputCustomComponent from "../components/ui/input/input";
import { useAuth } from "../hooks/useAuth";
import { useLogout } from "../hooks/useLogout";

export const Auth: FunctionComponent = () => {
    const { email, setEmail, password, setPassword, error, loading, handleLogin } = useAuth();
    const { handleLogout } = useLogout();

    return (
        <div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center transition-opacity duration-100 ease-in-out">
            <InputCustomComponent
                error={error}
                name="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(_) => {
                    setEmail(_.target.value);
                }}
            />
            <InputCustomComponent
                error={error}
                name="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(_) => {
                    setPassword(_.target.value);
                }}
            />
            <ButtonComponent disabled={loading} type="button" onClick={handleLogin}>
                {loading ? "Loading..." : "Login"}
            </ButtonComponent>
        </div>
    );
};