import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card.tsx";
import React from 'react';

export default function CandidateList({ props, onContinue }) {
    if (!props || !props.candidates) {
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <section className="flex flex-wrap justify-center gap-6">
                {props.candidates.map((candidate, index) => (
                    <Card key={index} className="w-72 bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white mb-1">{candidate.name}</CardTitle>
                            <CardDescription className="text-gray-400 mb-2">{candidate.party}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <img
                                src={candidate.photo_url || "https://via.placeholder.com/150"}
                                alt={candidate.name}
                                className="w-40 h-40 rounded-full mb-4"
                            />
                            <p className="flex items-center space-x-2">
                                <i className="fas fa-globe text-purple-400" />
                                <a
                                    className="text-purple-400 hover:text-purple-300 transition-colors w-full break-words text-center"
                                    target="_blank"
                                    href={candidate.absolute_url}
                                >
                                    {candidate.absolute_url}
                                </a>
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <p className="flex items-center space-x-2">
                                <i className="fas fa-envelope text-purple-400" />
                                <a className="text-gray-300 break-words text-center">
                                    {candidate.email || "Email unavailable"}
                                </a>
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </section>
            <button
                onClick={onContinue}
                className="mt-8 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
                Continue
            </button>
        </div>
    );
}
