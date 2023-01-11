import React, { useRef } from "react";


interface AddShoppingListItemProps {
    addToShoppingList: (item: string, anotherItem: number) => void;
}

export default function AddShoppingListItem(props: AddShoppingListItemProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)
    const productQuantityRef = useRef<HTMLInputElement>(null)


    const handleAddItem = (e: React.FormEvent) =>{
        e.preventDefault();

        console.log('Event submitted.....',  inputRef.current!.value)
        let newProduct = inputRef.current!.value;
        const productQuantity = productQuantityRef.current!.value
        props.addToShoppingList(newProduct, +productQuantity)
        inputRef.current!.value = ''
        productQuantityRef.current!.value = ''
    }


    return (
        <form onSubmit={handleAddItem}>
            <input type="text" placeholder="Enter your shopping items" ref={inputRef}/>
            <input type="number" min={0} ref={productQuantityRef}/>
            <button type="submit">Add to the list</button>
        </form>
    )
}