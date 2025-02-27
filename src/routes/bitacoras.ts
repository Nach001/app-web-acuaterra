import { createFileRoute } from "@tanstack/react-router";
import { Bitacoras } from '../pages/Bitacoras';


export const Route = createFileRoute("/bitacoras")({
    component: Bitacoras,
});