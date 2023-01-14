import React, {useState} from "react";
import { useActions } from "../hooks/useActions";
import {useSelector} from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepositoriesList = (): JSX.Element =>{
    const [term, setTerm] = useState('');
    const {searchRepositories } = useActions();
    const {loading, error, data } = useTypedSelector((state) => state.repositories)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        searchRepositories(term);
        console.log(data)
    }
    return (
        <div>
            <h1>Repositories list</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                <button type="submit">Search Repo</button>
                { error && <h3>{ error }</h3>}
                {loading && <h3>Loading....</h3>}
                {!error && !loading &&
                    data.map(name => <div key={name} className="list-items">{ name }</div>) }
            </form>
        </div>
    )
}


export default RepositoriesList;