import type { FunctionComponent } from "react";
// eslint-disable-next-line no-duplicate-imports
import type { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			{/* Si decides volver a usar el Sidebar, descomenta la línea siguiente */}
			{/* <Sidebar /> */}

			<div className="flex flex-col flex-1">
				{/* Si decides volver a usar el Navbar, descomenta la línea siguiente */}
				{/* <Navbar /> */}

				<main className="flex-1 p-4">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
