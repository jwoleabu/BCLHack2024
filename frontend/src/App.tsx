import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card.tsx";
import {useEffect} from "react";

export default function App() {
    // const [data, setData] = useState(null);

    async function getData(postcode: String) {
        const response = await fetch(`http://127.0.0.1:5000/postcode/${postcode}`)
        const postData = response.json()
        return postData;
    }
    useEffect(() => {
        const Data = getData("SK84HX");
        console.log(Data)
    }, []);
    return (
        <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
            <section className={"flex justify-center gap-5"}>
            <Card className={"w-64"}>
                <CardHeader>
                    <div>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>This is a description of the card.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <img src="https://via.placeholder.com/150" alt="Placeholder Image" className="w-40 h-auto mb-4"/>
                    <p>Here is some content for the card.</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Card className={"w-64"}>
                <CardHeader>
                    <div>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>This is a description of the card.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <img src="https://via.placeholder.com/150" alt="Placeholder Image" className="w-40 h-auto mb-4"/>
                    <p>Here is some content for the card.</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            </section>

        </>
    )
}