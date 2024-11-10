import { MapPin, Calendar, ExternalLink, Github } from 'lucide-react';

export default function Usercard({ data }) {

    function formatDate(dateString) {
        if (!dateString) {
            return "--"
        }
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }


    return (
        <>
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-32 bg-gradient-to-r from-purple-600 to-blue-600">
                    <div className="absolute -bottom-12 left-6">
                        <img
                            src={data.avatar_url}
                            alt={`${data.name}'s avatar`}
                            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </div>

                <div className="pt-16 px-6 pb-6">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-900">{data.name}</h2>
                        <div className="flex items-center text-gray-600 mt-1">
                            <Github className="w-4 h-4 mr-1" />
                            <span className="text-sm">@{data.login}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{data.public_repos || 0}</div>
                            <div className="text-sm text-gray-600">Repositories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{data.followers}</div>
                            <div className="text-sm text-gray-600">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{data.following}</div>
                            <div className="text-sm text-gray-600">Following</div>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{data.location || '--'}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">Joined {formatDate(data.created_at)}</span>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
            {/* <img src={data.avatar_url} alt={data.name || "--"} />
                <div>Name: {data.name || "--"}</div>
                <div>repository: {data.public_repos || "--"}</div>
                <div>location: {data.location || "--"}</div>
                <div>followers: {data.followers || "--"}</div>
                <div>following: {data.following || "--"}</div>
                <div>create date: {formatDate(data.created_at)}</div>
                <a href={data.html_url} target="_blank">go to github profile</a> */}
        </>
    )
}
