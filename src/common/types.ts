export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;
export interface Module {
	id_modulo: number;
	nombre: string;
	ubicacion: string;
	especie_pescados: string;
	cantidad_pescados: string;
	edad_pescados: string;
	dimensiones: string;
	id_persona_modulo: number;
	nombre_persona_modulo: string;
	id_persona_asignada: number | null;
	nombre_persona_asignada: string | null;
}

export interface CreateModuleRequest {
	nombre: string;
	ubicacion: string;
	especie_pescados: string;
	cantidad_pescados: number;
	edad_pescados: number;
	dimensiones: string;
	id_persona: number;
}

export interface UpdateModuleRequest {
	nombre: string;
	ubicacion: string;
	especie_pescados: string;
	cantidad_pescados: string;
	edad_pescados: string;
	dimensiones: string;
	id_persona: number;
}
