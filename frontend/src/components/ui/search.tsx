import React, { useState } from 'react';

interface SearchProps {
  onSearchButtonClick: (postcode: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchButtonClick }) => {
  const [postcode, setPostcode] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  const handleButtonClick = () => {
    onSearchButtonClick(postcode);
  };

  return (
    <div className="flex justify-center mt-10">
      <input 
        type="text" 
        placeholder="Search for a postcode..." 
        className="border-4 rounded-lg border-black pl-10 pr-10 pt-2 pb-2 w-1/5"
        value={postcode}
        onChange={handleInputChange}
      />
      <button 
        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
