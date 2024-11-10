import useGithub from "../hooks/useGithub"
import Usercard from "./Usercard";
import {Spinner} from "@nextui-org/spinner";

export default function Github({ username }) {

    const {data,error,loading} = useGithub({username});

    return (
        <>
            {loading && <Spinner />}
            {data && <Usercard data={data} />}
            {error && error}
        </>
    )
}
