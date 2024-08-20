import { useState } from 'react';

const Questions = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const handleSearchClick = () => {
        setTimeout(() => {
            setShowParagraph(true);
        }, 7000);
    };

    return (
        <div className="flex flex-col items-center mt-10 text-gray-100">
            <h1 className="text-4xl font-bold mb-8">Ask Questions</h1>
            <div className="flex justify-center mb-8 w-4/5">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="border-2 border-gray-600 bg-gray-800 rounded-lg py-2 px-4 w-3/5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner transition duration-300 ease-in-out"
                />
                <button 
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg ml-4 transition-transform transform hover:scale-105 shadow-lg"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>
            {showParagraph && (
                <div className="w-3/5 bg-gray-800 p-6 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-100">
                    <p className="text-lg leading-relaxed">
                        The potential shift from a Labour government to a Liberal Democrat (LibDem) MP in your local area could significantly shape local policies, particularly regarding unemployment rates. The Labour Party and the LibDems have distinct approaches to economic policies which could implicitly influence unemployment dynamics.
                        <br /><br />
                        <strong>Labour Government's Current Approach:</strong><br />
                        Under the current Labour government, economic policies are typically characterized by an emphasis on social welfare, public sector investment, and redistributive measures aimed at reducing inequality. Labour tends to support increased government spending on public services and infrastructure, which can stimulate job creation directly and indirectly. For instance, large-scale infrastructure projects not only provide immediate jobs but also improve the economic environment in a way that can foster job creation in the private sector.
                        <br /><br />
                        Labour's focus on enhancing workers' rights and benefits might also lead to a more stable employment environment. However, critics sometimes argue that excessive regulation can burden businesses, potentially stifling entrepreneurship and job creation, particularly in small and medium-sized enterprises (SMEs).
                        <br /><br />
                        In contrast, a Liberal Democrat MP might pursue slightly different strategies based on their manifesto commitments. The Liberal Democrats' explicit intention to boost economic growth through investments in green infrastructure, innovation, and skills could also influence local employment rates positively. Their focus on repairing the relationship with Europe might enhance economic opportunities, especially in areas with strong trade ties to European markets. Additionally, the Liberal Democrats' plan to enhance the educational landscape with Lifelong Skills Grants and support for teacher recruitment could gradually improve workforce capabilities, potentially making local industries more competitive and attractive to investors.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Questions;
