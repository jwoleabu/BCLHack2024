// CandidateList.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card.tsx";
import React from 'react';

export default function CandidateList({ props, onContinue }) {
    if (!props || !props.candidates) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"flex flex-col"}>
            <section className={"flex flex-wrap justify-center gap-4"}>
                {props.candidates.map((candidate, index) => (
                    <Card key={index} className={"w-64 bg-gradient-to-r from-slate-50 to-slate-200"}>
                        <CardHeader>
                            <div className={"h-12"}>
                                <CardTitle className={"mb-1"}>{candidate.name}</CardTitle>
                                <CardDescription className={"mb-1"}>{candidate.party}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <img src={candidate.photo_url || "https://via.placeholder.com/150"} alt={candidate.name}
                                 className="w-40 h-auto mb-4"/>
                            <p className={"flex items-center"}><i className={"fas fa-globe"}/><a
                                className={"text-blue-400 w-full break-words"} target="_blank"
                                href={candidate.absolute_url}>{candidate.absolute_url}</a></p>
                        </CardContent>
                        <CardFooter>
                            <p className={"flex items-center"}><i className="fas fa-envelope"/><a
                                className={"break-words w-44"}>{candidate.email || "Email unavailable"}</a></p>
                        </CardFooter>
                    </Card>
                ))}
            </section>
            <button
                onClick={onContinue}
                className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Continue
            </button>
        </div>
    );
}
