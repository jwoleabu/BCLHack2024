import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card.tsx";
import React from 'react';

export default function Mp({ props, onContinue }) {
    if (!props || !props.value) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"flex flex-col"}>
            <section className={"flex flex-wrap justify-center gap-4"}>
                    <Card className={"w-64 bg-gradient-to-r from-slate-50 to-slate-200 mb-4"}>
                        <CardHeader>
                            <div className={"h-12"}>
                                <CardTitle className={"mb-1"}>{props.value.nameDisplayAs}</CardTitle>
                                <CardDescription className={"mb-1"}>{props.value.latestParty.name}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <img src={props.value.thumbnailUrl || "https://via.placeholder.com/150"} alt={props.value.nameDisplayAs}
                                 className="w-40 h-auto mb-4"/>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                    </Card>
            </section>
        </div>
    );
}
