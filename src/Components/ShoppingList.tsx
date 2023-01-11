import React from "react";
import {ShoppingLists} from "../models/shoppingList";


export default function ShoppingList ({heading, items}: ShoppingLists): JSX.Element {
    return (
        <div>
            <h1>{heading}</h1>
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