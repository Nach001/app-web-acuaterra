import type { Bitacora, CreateBitacoraRequest, UpdateBitacoraRequest } from "../common/types";

const API_BASE_URL: string = import.meta.env["VITE_API_BASE_URL"] as string;

export const fetchBitacoras = async (): Promise<Array<Bitacora>> => {
    const response = await fetch(`${API_BASE_URL}/bitacora/listarBitacora`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data: Array<Bitacora> = (await response.json()) as Array<Bitacora>;
    return data;
};

interface BitacoraResponse {
    message: string;
}

export const updateBitacora = async (
    id: number,
    bitacoraData: UpdateBitacoraRequest
): Promise<BitacoraResponse> => {
    const response = await fetch(`${API_BASE_URL}/bitacora/editar/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bitacoraData),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<BitacoraResponse>;
};

export const createBitacora = async (
    bitacoraData: CreateBitacoraRequest
): Promise<BitacoraResponse> => {
    const response = await fetch(`${API_BASE_URL}/bitacora/registrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bitacoraData),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<BitacoraResponse>;
};

export const deleteBitacora = async (bitacoraId: number): Promise<BitacoraResponse> => {
    const response = await fetch(`${API_BASE_URL}/bitacora/borrar/${bitacoraId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<BitacoraResponse>;
};