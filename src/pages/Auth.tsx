import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "react";
import ButtonComponent from "../components/ui/button/Button";
import InputCustomComponent from "../components/ui/input/input";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";

export const Auth: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onTranslateButtonClick = async (): Promise<void> => {
    if (i18n.resolvedLanguage === "en") {
      await i18n.changeLanguage("es");
    } else {
      await i18n.changeLanguage("en");
    }
  };

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await fetch('https://backmejorado.onrender.com/api/users/loginMVC', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json() as { token: string };
      localStorage.setItem('token', data.token);
      // Redirigir o realizar alguna acción después del login exitoso
    } catch (error) {
      setError('Invalid email or password');
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-white text-6xl">{t("home.greeting")}</p>
      <ButtonComponent type="button" onClick={onTranslateButtonClick}>
        translate text button
      </ButtonComponent>
      <InputCustomComponent
        error={error}
        name="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(_) => { setEmail(_.target.value); }}
      />
      <InputCustomComponent
        error={error}
        name="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(_) => { setPassword(_.target.value); }}
      />
      <ButtonComponent type="button" onClick={handleLogin}>
        Login
      </ButtonComponent>
    </div>
  );
};