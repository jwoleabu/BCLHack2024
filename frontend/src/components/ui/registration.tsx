import { useEffect, useState } from "react";

interface PostData {
    email: string;
    phone: string;
    address: string;
    postcode: string;
    website: string;
}

interface RegistrationProps {
    onContinue: () => void;
}

export default function Registration({ onContinue }: RegistrationProps) {
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
        <div className="flex flex-col items-center bg-gray-700 p-8 rounded-xl shadow-lg w-2/3 mx-auto mt-10">
            <h1 className="text-4xl text-white font-bold mb-6">Registration Information</h1>
            <p className="text-lg text-gray-300 mb-2">Here is some information about your local area.</p>
            <p className="text-sm text-gray-400 mb-6">Click the link to find out more.</p>
            {loading ? (
                <p className="text-white">Loading...</p>
            ) : (
                data && (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-inner w-full">
                        <p className="text-white mb-3"><b>Address:</b> {data.address}</p>
                        <p className="text-white mb-3"><b>Postcode:</b> {data.postcode}</p>
                        <p className="text-white mb-3"><b>Email:</b> {data.email}</p>
                        <p className="text-white mb-3"><b>Phone:</b> {data.phone}</p>
                        <p className="text-white"><b>Website:</b> <a className="text-purple-400 hover:underline" target="_blank" href={data.website}>{data.website}</a></p>
                    </div>
                )
            )}
            <button onClick={onContinue} className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg mt-6 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Continue
            </button>
        </div>
    );
}
