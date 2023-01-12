


import React, { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

const usersList: User[] = [
    { name: "Trishten", age: 40},
    { name: "Lily", age: 40},
    { name: "Pratish", age: 40}
]

export default class UserSearchClass extends Component<UserSearchProps>{


    state: UserSearchState = {
        name: '',
        user: undefined
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({ name: e.target.value})
    console.log(this.state.name)
}

    findUsers = () =>{
        const foundUsers = usersList.find(user => user.name === this.state.name)

        console.log('Found users: ', foundUsers)
        this.setState({user: foundUsers});
    }

    render() {

        const { name, user } = this.state;
        return (
            <div className="mt-5 find-guest">
                <h2>Find Guest</h2>
                {/* Ts inference to event object in  inline function.*/}
                <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                <input type="text" value={name} onChange={this.handleChange}/>
                <button onClick={this.findUsers}>Find Guest</button>

                <div>
                    <p>Found user</p>
                    <p>{user && user.name} - {user && user.age}</p>
                </div>
            </div>
        );
    }
}