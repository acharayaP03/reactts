import React from "react";
import {ShoppingLists} from "../models/shoppingList";


/**
 * Annotate Component with React.FC type that accepts Generic type.
 * one important benefit of annotating component as React.FC is that it can return any children defined inside it
 * example of it is in app.tsx where we defined Greeter component as opening and closing tag and it returns a children
 * one thing to note is, we cannot receive children directly, we have to manually annotate it.
 */

interface GreeterProps {
    message: string;
    color?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const Greeter: React.FC<GreeterProps>  = ({message, onClick, color, children}: GreeterProps)=> {
    return (<div>
        <h1 onClick={onClick}>{message}</h1>
        {/*This will render the children component */}
        { children }
    </div>)
}

/**
 * Notice every component is annotated a JSX.Element since it returns a jsx element
 * not necessarily since it will be inferred at the compile time, but it good to do it rather than relying
 * on typescript compiler.
 *
 * @param heading
 * @param items
 * both are props that this child component receives from its parent App.
 */


export const ShoppingList = ({heading, items}: ShoppingLists): JSX.Element =>{
    return (
        <div>
            <h2>{heading}</h2>
            <ul>
                {
                    items && items.length > 0 ?
                        items.map(item => <li key={item.id}>{item.product} - Quantity needed {item.quantity}</li>)
                        : 'Your shopping list is empty'
                }
            </ul>
            <AnotherJSXComponent message="This is message">
                <span>Another children with JSX.Element</span>
            </AnotherJSXComponent>
        </div>
    )
}

export const AnotherJSXComponent = (props: GreeterProps): JSX.Element =>{
    return (
        <div>
            {props.message}
            {props.children}
        </div>
    )
}
