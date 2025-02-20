import { createFileRoute } from "@tanstack/react-router";
import { About } from "../pages/About";

export const AboutRoute = createFileRoute("/about")({
	component: About,
});

