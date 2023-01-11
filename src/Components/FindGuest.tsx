
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
    const [name, setName] = useState('');
    const [user, setUser] = useState<UsersList>();

    const findUsers = () =>{
        const foundUsers = usersList.find(user => user.name === name)

        console.log('Found users: ', foundUsers)
        setUser(foundUsers);
    }
    return (
        <div className="mt-5 find-guest">
            <h2>Find Guest</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={findUsers}>Find Guest</button>

            <div>
                <p>Found user</p>
                <p>{user && user.name} - {user && user.age}</p>
            </div>
        </div>
    )
}

export default FindGuest;