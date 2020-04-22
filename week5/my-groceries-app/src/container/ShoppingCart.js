import React from "react"
import List from "../components/List"

function ShoppingCart({shoppingListItems}) {
    return (
        <List items={shoppingListItems} readonly={true}/>
    )
}

export default ShoppingCart