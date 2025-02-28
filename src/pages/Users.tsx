import type { FunctionComponent, UserRequest, User } from "../common/types";
import UserTable from "../components/ui/table/table";
import useUsers from "../hooks/useUsers";
import { useState } from "react";
import RegisterUserModal from "../components/ui/modals/registerUserModal";
import UpdateUserModal from "../components/ui/modals/updateUserModalProps";
import useRegisterUser from "../hooks/useRegisterUser";
import { deleteUser, updateUser } from "../services/userService";
import Layout from "../components/layout/layout";

export const Users = (): FunctionComponent => {
	const [page, setPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [reload, setReload] = useState(false);
	const pageSize = 10;
	const { users, loading, error } = useUsers(page, pageSize, reload);
	const { registerUser } = useRegisterUser();

	const handleRegisterUser = async (userData: UserRequest): Promise<void> => {
		await registerUser(userData);
		setReload(!reload);
		setShowModal(false);
	};

	const handleDeleteUser = async (userId: number): Promise<void> => {
		await deleteUser(userId);
		setReload(!reload);
	};

	const handleUpdateUser = async (
		userId: number,
		userData: UserRequest
	): Promise<void> => {
		await updateUser(userId, userData);
		setReload(!reload);
	};

	const handleOpenUpdateModal = (user: User): void => {
		setSelectedUser(user);
		setShowUpdateModal(true);
	};

	return (
		<Layout>
			<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
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
						<UserTable
							users={users}
							onDeleteUser={handleDeleteUser}
							onUpdateUser={handleOpenUpdateModal}
						/>
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
					onRegister={handleRegisterUser}
				/>
				{selectedUser && (
					<UpdateUserModal
						setShowModal={setShowUpdateModal}
						showModal={showUpdateModal}
						user={selectedUser}
						onUpdate={handleUpdateUser}
					/>
				)}
			</div>
		</Layout>
	);
};
