// App.tsx

import { useEffect, useState } from "react";
import CandidateList from "./components/CandidateList.tsx";
import Search from './components/ui/search';
import Registration from './components/ui/registration';
import Graphs from './components/ui/graphs'; // Import your Graphs component

const App: React.FC = () => {
    const [data, setData] = useState(null);
    const [postcode, setPostcode] = useState<string | null>(null);
    const [showCandidateList, setShowCandidateList] = useState(false);
    const [showGraphs, setShowGraphs] = useState(false); // State to control displaying graphs

    async function getData(postcode: string) {
        const response = await fetch(`http://127.0.0.1:5000/postcode/${postcode}`);
        const postData = await response.json();
        console.log(postData);
        return postData;
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getData("SW15 3BZ");
            setData(result);
        }
        fetchData();
    }, []);

    const handleSearchButtonClick = (enteredPostcode: string) => {
        setPostcode(enteredPostcode);
    };

    const handleContinue = () => {
        setShowCandidateList(true);
    };

    const handleShowGraphs = () => {
        setShowGraphs(true);
        setShowCandidateList(false); // Hide CandidateList when showing graphs
    };

    return (
        <div className="App">
            {postcode === null ? (
                <Search onSearchButtonClick={handleSearchButtonClick} />
            ) : showGraphs ? (
                <Graphs /> // Display Graphs component if showGraphs is true
            ) : showCandidateList ? (
                <>
                    <h1 className="text-center mb-10 text-2xl">Candidate List</h1>
                    <CandidateList props={data} onContinue={handleShowGraphs} /> {/* Pass onContinue handler */}
                </>
            ) : (
                <Registration onContinue={handleContinue} />
            )}
        </div>
    );
};

export default App;
