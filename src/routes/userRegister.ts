// userRegister.ts
import { createFileRoute } from "@tanstack/react-router";
import UserRegister from "../pages/UserRegister";

export const Route = createFileRoute("/userRegister")({
  component: UserRegister,
});
