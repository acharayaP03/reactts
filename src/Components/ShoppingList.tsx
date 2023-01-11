import React from "react";
import {ShoppingLists} from "../models/shoppingList";


/**
 * Annotate Component with React.FC type that accepts Generic type.
 */

interface GreeterProps {
    message: string
}
export const Greeter: React.FC<GreeterProps>  = ({message}: GreeterProps)=> {
    return <h1>{message}</h1>
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


export const ShoppingList: React.FC<ShoppingLists> = ({heading, items}: ShoppingLists) =>{
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
        </div>
    )
}
