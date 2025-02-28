import type { FunctionComponent } from "react";
import Navbar from "../ui/navBar/navbar";

// eslint-disable-next-line no-duplicate-imports
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;