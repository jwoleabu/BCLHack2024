import { useState } from 'react';

const Questions = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const handleSearchClick = () => {
        setTimeout(() => {
            setShowParagraph(true);
        }, 7000);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h1>Ask Questions</h1>
            <div className="flex justify-center mb-5">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="border-4 rounded-lg border-black pl-10 pr-10 pt-2 pb-2 w-3/5"
                />
                <button 
                    className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>
            {showParagraph && (
                <div className="w-3/5">
                    <p>Analyzing the potential impact of a shift from a Labour government to a Liberal Democrat (LibDem) Member of Parliament (MP) on local unemployment rates requires a nuanced understanding of both parties' policy priorities and broader economic strategies. Under the current Labour government, economic strategies revolve around 'securonomics,' aiming for economic stability and sustainable growth through substantial investment in infrastructure and housing, and reforming partnerships with industries. Labour's focus is on creating a broad-based economic uplift that promises job creation through industrial development and public sector investments. Specific attention towards devolving power and fostering economic opportunities regionally can potentially lead to reduced unemployment rates by stimulating local economies. The Labour government's initiative for a National Wealth Fund dedicated to fuelling jobs and growth could directly combat unemployment by channeling funds into job-creating projects and sectors. Moreover, Labour's emphasis on improving education aligns with equipping the workforce with necessary skills, potentially enhancing employability and thus impacting the unemployment rate positively.</p>
                </div>
            )}
        </div>
    );
}

export default Questions;
