import React, {useState} from 'react';
import './App.css';
import {Greeter, ShoppingList} from "./Components/ShoppingList";
import {ShoppingListItems} from "./models/shoppingList";
import AddShoppingListItem from "./Components/AddShoppingListItem";
import {v4 as generateRandomId } from "uuid";
import FindGuest from "./Components/FindGuest";
import UserSearchClass from "./Components/UserSearchClass";

import RepositoriesList from "./Components/RepositoriesList";


/**
 * import all redux stuff here
 */

import { Provider } from "react-redux";
import { store } from "./ReduxStore";

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

interface UsersList {
    name: string;
    age: number
}
const usersList: UsersList[] = [
    { name: "Trishten", age: 40},
    { name: "Lily", age: 40},
    { name: "Pratish", age: 40}
]

function App() {
    /**
     * if we do not provide any type annotations on state, typescript will return array of never.
     * in which case we will not be allowed setState or add item.
     */
    const [shoppingItems, setShoppingItems] = useState<ShoppingListItems[]>([])

    const addToShoppingList = (product: string, quantity: number) => {
        setShoppingItems([...shoppingItems, {id: generateRandomId(), quantity, product}])
    }

  return (
      <Provider store={store}>
        <div className="App">
            {/*<Greeter message="Explore React with Typescript" onClick={() => console.log('clicked header')}>*/}
            {/*    <span>Another child component returen by React.FC</span>*/}
            {/*</Greeter>*/}
            {/*<AddShoppingListItem addToShoppingList={addToShoppingList}/>*/}
            {/*<ShoppingList heading="My awesome shopping list" items={shoppingItems}/>*/}
            {/*<FindGuest />*/}
            {/*<UserSearchClass users={usersList}/>*/}

            <RepositoriesList/>
        </div>
      </Provider>
  );
}

export default App;
