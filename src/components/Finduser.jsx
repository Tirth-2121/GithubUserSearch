import { useState } from "react";
import Github from "./Github";

export default function Finduser() {
    const [username, setUsername] = useState("");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">GitHub User Search</h1>
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mt-6">
                {username ? (
                    <Github username={username} />
                ) : (
                    <p className="text-gray-600">Please search to continue...</p>
                )}
            </div>
        </div>
    );
}
