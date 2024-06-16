import { useEffect, useState } from "react";
import CandidateList from "./components/CandidateList.tsx";
import Search from './components/ui/search';
import Registration from './components/ui/registration';
import Graphs from './components/ui/graphs';
import Questions from './components/ui/questions';
import Mp from "@/components/Mp.tsx";


const App: React.FC = () => {
    const [data, setData] = useState(null);
    const [mpdata, setmpData] = useState(null);
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
            setmpData(mpResult);
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
                    <Mp props={mpdata}/>
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
