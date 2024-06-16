import { useEffect, useState } from "react";

interface PostData {
    email: string;
    phone: string;
    address: string;
    postcode: string;
    website: string;
}

export default function Registration() {
    const [data, setData] = useState<PostData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:5000/postcode/sw153bz`);
            const jsonData = await response.json();
            const postData: PostData = {
                email: jsonData.registration.email,
                phone: jsonData.registration.phone,
                address: jsonData.registration.address,
                postcode: jsonData.registration.postcode,
                website: jsonData.registration.website,
            };
            setData(postData);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            <h1 className="self-center text-4xl">Registration Information</h1>
            <p className="self-center text-lg pt-5">Here is some information about your local area.</p>
            <p className="self-center text-sm pb-5">Click the link to find out more.</p>
            {loading ? (
                <p>Loading...</p>
            ) : (
                data && (
                    <div className="border-8 rounded-lg border-blue-300 flex flex-col">
                        <p className="self-center"><b>Address</b>: {data.address}</p>
                        <p className="self-center"><b>Postcode</b>: {data.postcode}</p>
                        <p className="self-center"><b>Email</b>: {data.email}</p>
                        <p className="self-center"><b>Phone</b>: {data.phone}</p>
                        <p className="self-center"><b>Website</b>: <a target="_blank" href={data.website}>{data.website}</a></p>
                    </div>
                )
            )}
            <button className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Continue</button>
        </div>
    );
}
