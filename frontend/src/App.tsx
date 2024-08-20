import React, { useEffect, useState } from "react";
import CandidateList from "./components/CandidateList";
import Search from './components/ui/search';
import Registration from './components/ui/registration';
import Graphs from './components/ui/graphs';
import Questions from './components/ui/questions';
import Mp from "./components/Mp";

const App: React.FC = () => {
    const [data, setData] = useState(null);
    const [mpdata, setMpData] = useState(null);
    const [postcode, setPostcode] = useState<string | null>(null);
    const [showCandidateList, setShowCandidateList] = useState(false);
    const [showGraphs, setShowGraphs] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    async function getData(postcode: string) {
        const response = await fetch(`http://127.0.0.1:5000/postcode/${postcode}`);
        const postData = await response.json();
        console.log(postData);
        return postData;
    }

    async function getMp(number: string) {
        const response = await fetch(`http://127.0.0.1:5000/mp/${number}`);
        const mpData = await response.json();
        console.log(mpData);
        return mpData;
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getData("SW15 3BZ");
            setData(result);
            const mpResult = await getMp("4788");
            setMpData(mpResult);
        }
        fetchData();
    }, []);

    const handleSearchButtonClick = (enteredPostcode: string) => {
        setPostcode(enteredPostcode);
    };

    const handleContinueToList = () => {
        setShowCandidateList(true);
    };

    const handleContinueToGraphs = () => {
        setShowGraphs(true);
        setShowCandidateList(false);
    };

    const handleContinueToQuestions = () => {
        setShowQuestions(true);
        setShowGraphs(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-6">
            {postcode === null ? (
                <div className="flex flex-col items-center justify-center w-full max-w-md">
                    <Search onSearchButtonClick={handleSearchButtonClick} />
                </div>
            ) : showQuestions ? (
                <Questions />
            ) : showGraphs ? (
                <Graphs onContinue={handleContinueToQuestions} />
            ) : showCandidateList ? (
                <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-center text-3xl font-semibold mb-8 text-white">Your Current MP</h1>
                    {mpdata && (
                        <>
                            <Mp props={mpdata} />
                            <div className="overflow-x-auto mt-6">
                                <table className="min-w-full bg-gray-700 shadow-md rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-600 text-gray-300">
                                            <th className="py-3 px-4 border-b">Bills</th>
                                            <th className="py-3 px-4 border-b">Vote</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            "Motion to appoint a Reasons Committee in respect of Lords Amendment 3J",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3J",
                                            "Economic Activity of Public Bodies Carry-Over",
                                            "Reasons Committee Rwanda Bill",
                                            "Rwanda Bill motion to disagree with Lords amendment 10F",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3G",
                                            "Safety of Rwanda Bill: That this House disagrees with the Lords in their Amendment 6D",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3E",
                                            "Safety of Rwanda Bill: motion to disagree with Lords  Amendment 1D",
                                            "Tobacco and Vapes Bill: Second Reading",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 3",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 2",
                                            "Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 1",
                                            "Motion under the Provisional Collection of Taxes Act 1968",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: Third reading",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: New Clause 8",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: Clauses 9 and 10 stand part",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: Amendment 36",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: Clauses 5, 6, 7 and 8 stand part",
                                            "Safety of Rwanda (Asylum and Immigration) Bill Committee: Amendment 23"
                    
                                        ].map((bill, index) => (
                                            <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                                                <td className="py-2 px-4 border-b">{bill}</td>
                                                <td className="py-2 px-4 border-b">Yes</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                    <h1 className="text-center text-3xl font-semibold mt-10 mb-8 text-white">Candidate List</h1>
                    <CandidateList props={data} onContinue={handleContinueToGraphs}/>
                </div>
            ) : (
                <Registration onContinue={handleContinueToList}/>
            )}
        </div>
    );
};

export default App;
