export default function Questions() {
    return (
        <div className="flex justify-center mt-10">
        <input 
            type="text" 
            placeholder="Search..." 
            className="border-4 rounded-lg border-black pl-10 pr-10 pt-2 pb-2 w-3/5"
        />
        <button 
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
        >
            Search
        </button>
        </div>
    );
}
