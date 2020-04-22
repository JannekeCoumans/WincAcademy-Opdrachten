import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component{
    render() {
        const { items, addGroceryToShoppingList, readonly } = this.props;
        const listItems = items.map(item => (
            <ListItem 
                key={item.id}
                item={item}
                readonly={readonly}
                addGroceryToShoppingList={addGroceryToShoppingList}
            />
        ))

        return(
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default List