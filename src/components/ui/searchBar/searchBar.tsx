interface SearchModuleInputProps {
	onSearchChange: (value: string) => void;
}

const SearchModuleInput = ({
	onSearchChange,
}: SearchModuleInputProps): JSX.Element | null => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onSearchChange(event.target.value);
	};

	return (
		<input
			className="search-input"
			placeholder="Buscar módulo por nombre"
			type="text"
			onChange={handleChange}
		/>
	);
};

export default SearchModuleInput;
