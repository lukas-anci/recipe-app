import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '1vh',
        width: '80%',
        zIndex: 1,
        padding: '0 2.5%',
      }}
      className="input-group mb-3"
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search for a recipe"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleClearSearch}
        >
          X
        </button>
      )}
    </div>
  );
}

export default SearchBar;
