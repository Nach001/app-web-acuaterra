interface SearchUserInputProps {
	onSearchChange: (value: string) => void;
}

const SearchUserInput = ({
	onSearchChange,
}: SearchUserInputProps): JSX.Element | null => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onSearchChange(event.target.value);
	};

	return (
		<input
			className="search-input"
			placeholder="Buscar usuario por nombre"
			type="text"
			onChange={handleChange}
		/>
	);
};


export default SearchUserInput;
