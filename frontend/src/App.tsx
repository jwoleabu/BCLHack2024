import {useEffect, useState} from "react";
import CandidateList from "@/components/CandidateList.tsx";
import dataJson from '@/data.json'

export default function App() {
    const [data, setData] = useState(null);

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
    return (
        <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
            <CandidateList props={data}/>
        </>
    )
}
