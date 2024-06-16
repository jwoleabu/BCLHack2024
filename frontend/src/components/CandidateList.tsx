import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card.tsx";

export default function CandidateList({ props }) {
    if (!props || !props.candidates) {
        return <div>Loading...</div>; // You can replace this with a custom loading indicator if you have one
    }

    return (
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
                        <img src={candidate.photo_url || "https://via.placeholder.com/150"} alt={candidate.name} className="w-40 h-auto mb-4" />
                        <p>test</p>
                    </CardContent>
                    <CardFooter>
                        <p>{candidate.email || "Email unavailable"}</p>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
