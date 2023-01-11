import React, {useState} from 'react';
import './App.css';
import {Greeter, ShoppingList} from "./Components/ShoppingList";
import {ShoppingListItems} from "./models/shoppingList";
import AddShoppingListItem from "./Components/AddShoppingListItem";
import {v4 as generateRandomId } from "uuid";

/**
 * @App is a function parent component, where it contains couple of child component
 * @ShoppingList
 * @AddShoppingListItem which is contains form element
 *
 * notice each child component contains props and are annotated.
 * Note: tsconfig will thorw error if we do not annotate its type.
 * Type annotation is located under ./models dir.
 *
 */

function App() {

    const [shoppingItems, setShoppingItems] = useState<ShoppingListItems[]>([])

    const addToShoppingList = (product: string, quantity: number) => {
        setShoppingItems([...shoppingItems, {id: generateRandomId(), quantity, product}])
    }

  return (
    <div className="App">
        <Greeter message="Explore React with Typescript"/>
        <AddShoppingListItem addToShoppingList={addToShoppingList}/>
        <ShoppingList heading="My awesome shopping list" items={shoppingItems}/>
    </div>
  );
}

export default App;
