import { createStore } from "redux";

const initialState = {
    cartIsShown: false,
    numberOfItemsInCart: 0,
    cartItems: [],
    totalPrice: 0
};

const counterReducer = (state = initialState, action) => {
    if(action.type === 'onClickCartButton'){    return { ...state,cartIsShown: true }    }
    if(action.type === 'closeCART'){    return { ...state,cartIsShown: false }    }
    if(action.type === 'removeItemsFromCart'){    
        return { 
            ...state,
            numberOfItemsInCart: action.item.ItemQuantity
        }    
    }

    if(action.type === 'addItemstoCart'){ 
        const itemIndex = state.cartItems.findIndex(item => item.key === action.item.key)
        
        if(itemIndex !== -1){
            let cartItems = state.cartItems
            cartItems[itemIndex].ItemQuantity += action.item.ItemQuantity 
            cartItems[itemIndex].price += action.item.price * action.item.ItemQuantity
            return {
                ...state,
                numberOfItemsInCart: state.numberOfItemsInCart + action.item.ItemQuantity,
                totalPrice: state.totalPrice + action.item.price * action.item.ItemQuantity,
                cartItems
            }
        }
        return { 
            ...state,
            numberOfItemsInCart: state.numberOfItemsInCart + action.item.ItemQuantity,
            totalPrice: state.totalPrice + action.item.price * action.item.ItemQuantity,
            cartItems: [...state.cartItems, action.item]
        }    
    }

    return state
}

const store = createStore(counterReducer)

export default store;