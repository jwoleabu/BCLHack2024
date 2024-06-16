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
            <h1 className="self-center text-4xl">Ask Questions</h1>
            <div className="flex justify-center mb-5 pt-10 w-4/5">
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
                    <p>
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
