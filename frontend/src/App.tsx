import { useEffect, useState } from "react";
import CandidateList from "@/components/CandidateList.tsx";
import dataJson from '@/data.json'
import Search from './components/ui/search';
import Registration from './components/ui/registration';

const App: React.FC = () => {
    const [data, setData] = useState(null);
    const [postcode, setPostcode] = useState<string | null>(null);
    const [showCandidateList, setShowCandidateList] = useState(false);

    async function getData(postcode: String) {
        const response = await fetch(`http://127.0.0.1:5000/postcode/${postcode}`)
        const postData = await response.json()
        // const postData = dataJson;
        console.log(postData)
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

    return (
        <div className="App">
            {postcode === null ? (
                <Search onSearchButtonClick={handleSearchButtonClick} />
            ) : showCandidateList ? (
                <>
                    <h1 className={"text-center mb-10 text-2xl"}>Candidate List</h1>
                <CandidateList props={data} />
                </>
            ) : (
                <Registration onContinue={handleContinue} />
            )}
        </div>
    );
};

export default App;
