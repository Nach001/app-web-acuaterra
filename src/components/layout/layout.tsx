import type { FunctionComponent } from "react";
//import Navbar from "../ui/navBar/navbar";

// eslint-disable-next-line no-duplicate-imports
import type { ReactNode } from "react";
//import Sidebar from "../ui/navBar/sidebar";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			 {/*<Sidebar /> */}
			 <div className="flex-1 flex flex-col">
				 {/*<Navbar />*/}
				 <main className="flex-1 p-4">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
