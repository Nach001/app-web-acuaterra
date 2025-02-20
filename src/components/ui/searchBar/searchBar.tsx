import type React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="mb-4 p-2"
      placeholder="Search by name"
      type="text"
      value={searchTerm}
      onChange={(_) => { setSearchTerm(_.target.value); }}
    />
  );
};

export default SearchBar;