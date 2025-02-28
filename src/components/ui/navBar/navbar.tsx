import type { FunctionComponent } from "react";
import LogoutButton from "../button/logoutButton";

const Navbar: FunctionComponent = () => {
    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white font-bold">My App</div>
            <LogoutButton />
        </nav>
    );
};

export default Navbar;