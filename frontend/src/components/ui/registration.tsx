import React, { useEffect, useState } from "react";

interface PostData {
    email: string;
    phone: string;
    address: string;
    postcode: string;
    website: string;
}

export default function Registration() {
    const [data, setData] = useState<PostData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:5000/postcode/sw153bz`);
            const postData = await response.json();
            setData(postData);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Registration Information</h1>
            <p>Here is some information about the registration.</p>
            {data ? (
                <div>
                    <p>Name: {data.email}</p>
                    <p>Address: {data.address}</p>
                    <p>Postcode: {data.postcode}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Website: {data.website}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
