import React from "react";

interface GreeterProps {
    message: string
}
const Greeter = ({message}: GreeterProps): JSX.Element => {
    return <h1>{message}</h1>
}


export default Greeter;