import type { FunctionComponent } from "react";
import ButtonComponent from "./button";
import { useLogout } from "../../../hooks/useLogout";

const LogoutButton: FunctionComponent = () => {
    const { loading, handleLogout } = useLogout();

    return (
        <ButtonComponent disabled={loading} type="button" onClick={handleLogout}>
            {loading ? "Loading..." : "Logout"}
        </ButtonComponent>
    );
};

export default LogoutButton;