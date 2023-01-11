

export interface ShoppingListItems {
    id?: number | string;
    product?: string;
    quantity?: number
}

export interface ShoppingLists{
    heading: string
    items: ShoppingListItems[]
}
