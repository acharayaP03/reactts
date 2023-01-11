import React, {useState} from 'react';
import './App.css';
import ShoppingList from "./Components/ShoppingList";
import {ShoppingListItems} from "./models/shoppingList";
import AddShoppingListItem from "./Components/AddShoppingListItem";
import {v4 as generateRandomId } from "uuid";

function App() {

    const [shoppingItems, setShoppingItems] = useState<ShoppingListItems[]>([])

    const addToShoppingList = (product: string, quantity: number) => {
        setShoppingItems([...shoppingItems, {id: generateRandomId(), quantity, product}])
    }

  return (
    <div>
        <AddShoppingListItem addToShoppingList={addToShoppingList}/>
        <ShoppingList heading="My awesome shopping list" items={shoppingItems}/>
    </div>
  );
}

export default App;
