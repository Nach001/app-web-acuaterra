/**
 * Página de Login - Acuaterra (Auth).
 * Visual: Formulario basado en el Figma.
 */

import type { FunctionComponent } from "react";
import ButtonComponent from "../components/ui/button/button";
import InputCustomComponent from "../components/ui/input/input";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import acuaterraLogo from "../assets/images/logo.png";

// URL base de la API
const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

export const Auth: FunctionComponent = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, error, loading } = useAuth();
  const [localError, setLocalError] = useState("");
  const [localLoading, setLocalLoading] = useState(false);

  // Función para manejar el login
  const handleLocalLogin = async (): Promise<void> => {
    setLocalLoading(true);
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
      await navigate({ to: "/newHome" });
    } catch (error) {
      setLocalError("Invalid email or password");
      console.error(error);
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Logos */}
      <div className="mb-6 flex flex-col items-center">
        <img alt="Acuaterra Logo" className="h-[250px] mb-2" src={acuaterraLogo} />
      </div>
      <h1 className="text-7xl font-bold mb-9">Login</h1>
      <div className="w-full max-w-sm space-y-8">
        <InputCustomComponent
          error={localError || error}
          name="email"
          placeholder="Ingrese Correo Electrónico"
          type="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <InputCustomComponent
          error={localError || error}
          name="password"
          placeholder="Ingrese Contraseña"
          type="password"
          value={password}
          onChange={(event) => { setPassword(event.target.value); }}
        />
        <ButtonComponent
          className="bg-[#44cbd3] hover:bg-[#3cacac] text-white px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-[#44cbd3] focus:ring-offset-2"
          disabled={localLoading || loading}
          type="button"
          onClick={handleLocalLogin}
        >
          {localLoading || loading ? "Cargando..." : "Comenzar!"}
        </ButtonComponent>
      </div>
      {(localError || error) && <p className="text-red-500 mt-2">{localError || error}</p>}
      <p className="text-gray-500 text-sm mt-20">versión 1.0 - Advanced Aquaponics Monitoring System</p>
    </div>
  );
};

export default Auth;