
import React, { useState } from "react";


interface UsersList {
    name: string;
    age: number
}
const usersList: UsersList[] = [
    { name: "Trishten", age: 40},
    { name: "Lily", age: 40},
    { name: "Pratish", age: 40}
]

const FindGuest: React.FC = () =>{
    const [name, setName] = useState(''); // initial state of empty string. Ts will infer it as string
    /**
     * however, if we leave const [user, setUser] = useState([]) and allow typescript to infer,
     * we will get error on setUser since the state of that would never[].
     * inorder to resolve this issue, we need to annotate it as array[].
     * in our case, UsersList[]
     */
    const [user, setUser] = useState<UsersList>();

    const findUsers = () =>{
        const foundUsers = usersList.find(user => user.name === name)

        console.log('Found users: ', foundUsers)
        setUser(foundUsers);
    }

    /**
     * one other thing about type inference to Event is inline events.
     * Ts will infer automatically infer Event object to inline event however,
     * if the function is called form out side then, se need to annotate its appropriate type.
     */


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
        console.log(name)
    }
    return (
        <div className="mt-5 find-guest">
            <h2>Find Guest</h2>
            {/* Ts inference to event object in  inline function.*/}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={findUsers}>Find Guest</button>

            <div>
                <p>Found user</p>
                <p>{user && user.name} - {user && user.age}</p>
            </div>
        </div>
    )
}

export default FindGuest;