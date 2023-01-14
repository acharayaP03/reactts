import React, {useState} from "react";
import { useActions } from "../hooks/useActions";


const RepositoriesList = (): JSX.Element =>{
    const [term, setTerm] = useState('');
    const {searchRepositories } = useActions();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        searchRepositories(term);
    }
    return (
        <div>
            <h1>Repositories list</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                <button type="submit">Search Repo</button>
            </form>
        </div>
    )
}


export default RepositoriesList;