import React from "react"

function ListItem({item, addGroceryToShoppingList, readonly}) {
    return(
        <li
            key={item.id}
            className="list-item"
            onClick={addGroceryToShoppingList}
            value={item.title}
        >
            <span>{item.title}</span>
            <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
        </li>
    )
}

export default ListItem