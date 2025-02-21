import type { FunctionComponent } from "react";
import ButtonComponent from "../components/ui/button/button";
import InputCustomComponent from "../components/ui/input/input";
import { useNavigate } from "@tanstack/react-router";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";

const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

export const Auth: FunctionComponent = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);



	const handleLogin = async (): Promise<void> => {
		setLoading(true);
		try {
			const response = await fetch(`${API_BASE_URL}/users/loginMVC`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			const data = (await response.json()) as { token: string };
			localStorage.setItem("token", data.token);
			await navigate({ to: "/users" });
		} catch (error) {
			setError("Invalid email or password");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

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
