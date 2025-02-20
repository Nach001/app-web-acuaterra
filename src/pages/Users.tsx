import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import UserTable from "../components/ui/table/table";
import useUsers from "../hooks/useUsers";
import { useState } from "react";
import RegisterUserModal from "../components/ui/modals/registerUserModal";

export const Users = (): FunctionComponent => {
	const { t, i18n } = useTranslation();
	const [page, setPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
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
			<div className="flex flex-col items-center mt-4">
				<button
					className="mb-4 p-2 bg-green-500 text-white"
					onClick={() => {
						setShowModal(true);
					}}
				>
					Register User
				</button>
			</div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {String(error)}</p>}
			{!loading && !error && (
				<div className="overflow-y-auto max-h-96 w-full">
					<UserTable users={users} />
				</div>
			)}
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
			<RegisterUserModal
				setShowModal={setShowModal}
				showModal={showModal}
				onRegister={() => {}}
			/>
		</div>
	);
};
