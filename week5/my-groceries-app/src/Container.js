import React, { Component } from "react"
import GroceryList from "./container/GroceryList"
import ShoppingCart from "./container/ShoppingCart"
import InputField from "./components/InputField"

class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Kaas" },
                { id: 3, title: "Eieren" },
                { id: 4, title: "Appels" },
                { id: 5, title: "Pindakaas"}
            ],
            
            shoppingListItems: [
            ]
        }  
    }  
    render() {
        const addGroceryToShoppingList = (event) => {
            const generateId = this.state.shoppingListItems.length + 1;
            const getGroceryListTitle = event.target.getAttribute("value");
            const item = {id: generateId, title: getGroceryListTitle, amount: 1};

            this.setState((prevstate) => {
                const updatedShoppingListItems = prevstate.shoppingListItems.concat(item);
                return {
                    shoppingListItems: updatedShoppingListItems
                }
            })
        }

        const emptyCart = () => {
            this.setState({
                shoppingListItems: []
            })
        }

        //voegt items toe via inputfield
        const handleSubmit = (inputValue) => {
            const generateId = this.state.groceryItems.length + 1;
            const newListItem = {id: generateId, title: inputValue};
            
            this.setState((prevstate) => {
                const updatedGroceryItems = prevstate.groceryItems.concat(newListItem);
                return {
                    groceryItems: updatedGroceryItems
                }
            })
        }

        const addAmountToItem = (itemTitle) => {
            const shoppingList = [...this.state.shoppingListItems];
            const newList = shoppingList.map(shoppingItem => {
                if (shoppingItem.title === itemTitle) {
                    shoppingItem.amount++;
                }
                return shoppingItem;
            });
            this.setState({
                shoppingListItems : newList
            });
        };

        const handleClickGroceryItem = (event) => {
                const clickedItem = event.target.getAttribute("value");
                const currentShoppingList = this.state.shoppingListItems;
                const shoppingListItem = currentShoppingList.filter(
                    item => item.title === clickedItem
                );

                shoppingListItem.length === 0 ?
                addGroceryToShoppingList(clickedItem)
                : addAmountToItem(clickedItem);
        };

        return(
            <div className="container">
                <div className="grocery-list">
                    <h1>Grocery List</h1>
                    <InputField handleSubmit={handleSubmit}/>
                    <GroceryList 
                        groceryItems={this.state.groceryItems}
                        addGroceryToShoppingList={addGroceryToShoppingList}
                        handleClickGroceryItem={handleClickGroceryItem}
                    />
                </div>
                <div className="shopping-cart">
                    <h1>Shopping Cart</h1>
                    <button onClick={emptyCart}>Empty Cart</button>
                    <ShoppingCart shoppingListItems={this.state.shoppingListItems}
                    />
                </div>
            </div>
        )
    }
}

export default Container