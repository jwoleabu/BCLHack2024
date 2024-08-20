import React, { useState } from 'react';

interface SearchProps {
    onSearchButtonClick: (postcode: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchButtonClick }) => {
    const [postcode, setPostcode] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostcode(e.target.value);
    };

    const handleButtonClick = () => {
        if (postcode) {
            onSearchButtonClick(postcode);
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-700 p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
            <h1 className="text-3xl text-white font-bold mb-6">Search Postcode</h1>
            <div className="w-full flex items-center border-none rounded-lg bg-gray-800 shadow-inner">
                <input
                    type="text"
                    value={postcode}
                    onChange={handleInputChange}
                    placeholder="Enter postcode"
                    className="w-full p-4 border-none rounded-l-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    onClick={handleButtonClick}
                    className="bg-purple-600 text-white p-4 rounded-r-lg hover:bg-purple-500 transition duration-300 ease-in-out"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
