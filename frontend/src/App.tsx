import React, { useEffect, useState } from "react";
import CandidateList from "./components/CandidateList.tsx";
import Search from './components/ui/search';
import Registration from './components/ui/registration';
import Graphs from './components/ui/graphs';
import Questions from './components/ui/questions';
import Mp from "@/components/Mp.tsx";

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
        <div className="App">
            {postcode === null ? (
                <Search onSearchButtonClick={handleSearchButtonClick} />
            ) : showQuestions ? (
                <Questions />
            ) : showGraphs ? (
                <Graphs onContinue={handleContinueToQuestions} />
            ) : showCandidateList ? (
                <>
                    <h1 className="text-center mb-10 text-2xl">Your current MP</h1>
                    {mpdata && (
                        <>
                            <Mp props={mpdata} />
                            <table className="motion-table">
                                <thead>
                                    <tr>
                                        <th>Bills</th>
                                        <th>Vote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Motion to appoint a Reasons Committee in respect of Lords Amendment 3J</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3J</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Economic Activity of Public Bodies Carry-Over</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Reasons Committee Rwanda Bill</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Rwanda Bill motion to disagree with Lords amendment 10F</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3G</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda Bill: That this House disagrees with the Lords in their Amendment 6D</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: motion to disagree with Lords Amendment 3E</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda Bill: motion to disagree with Lords  Amendment 1D</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Tobacco and Vapes Bill: Second Reading</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 3</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 2</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill: Motion to disagree with Lords Amendment 1</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Motion under the Provisional Collection of Taxes Act 1968</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: Third reading</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: New Clause 8</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: Clauses 9 and 10 stand part</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: Amendment 36</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: Clauses 5, 6, 7 and 8 stand part</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>Safety of Rwanda (Asylum and Immigration) Bill Committee: Amendment 23</td>
                                        <td>No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                    <h1 className="text-center mb-10 text-2xl">Candidate List</h1>
                    <CandidateList props={data} onContinue={handleContinueToGraphs}/>
                </>
            ) : (
                <Registration onContinue={handleContinueToList}/>
            )}
        </div>
    );
};

export default App;
