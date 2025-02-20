import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import UserTable from "../components/ui/table/table";
import useUsers from "../hooks/useUsers";
import { useState } from "react";

export const Users = (): FunctionComponent => {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useState(1);
	const pageSize = 10;
	const { users, loading, error } = useUsers(page, pageSize);

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">{t("home.greeting")}</p>
			<button type="submit" onClick={onTranslateButtonClick}>
				translate
			</button>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {String(error)}</p>}
			{!loading && !error && <UserTable users={users} />}
			<div className="flex justify-between mt-4">
				<button
					disabled={page === 1}
					onClick={() => {
						setPage(page - 1);
					}}
				>
					Previous
				</button>
				<button
					onClick={() => {
						setPage(page + 1);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};
