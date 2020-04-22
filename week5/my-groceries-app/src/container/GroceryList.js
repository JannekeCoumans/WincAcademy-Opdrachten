import React from "react"
import List from "../components/List"

function GroceryList({groceryItems, addGroceryToShoppingList}) {
    return (
        <List items={groceryItems} addGroceryToShoppingList={addGroceryToShoppingList}/>
    )
}

export default GroceryList