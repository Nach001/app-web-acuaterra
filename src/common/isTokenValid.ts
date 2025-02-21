export const isTokenValid = (): boolean => {
	const token = localStorage.getItem("token");
	// Aquí puedes agregar la lógica para verificar si el token ha expirado
	return !!token;
};

/**
 * Auth guard function to check if the token is valid.
 * If the token is not valid, it redirects to the authentication page.
 *
 * @returns An object containing the redirect path if the token is invalid, otherwise an empty object.
 */
export const authGuard = (): { redirect?: string } => {
	if (!isTokenValid()) {
		return {
			redirect: "/auth",
		};
	}
	return {};
};
