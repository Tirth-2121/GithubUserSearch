import { useEffect, useState } from "react"

export default function useGithub({username}) {
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(
        () =>{
            const fetchdata = async()=>{
                try{
                    setLoading(true);
                    const fetchdata = await fetch(`https://api.github.com/users/${username}`,{
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                        }
                    });
                    const data = await fetchdata.json();
                    setData(data);
                    if(data && data.status == "404")
                        {
                            setError("user not found");
                            setData(null);
                        }
                        else{
                            setError(null);
                        }
                    setLoading(false);
                }
                catch(error)
                {
                    setError(error.message);
                    setLoading(false);
                }  
            }

            fetchdata();
        },
        [username]
    )
    return {data,error,loading}
}
