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

    if(action.type === 'addItemstoCart'){ 
        const itemIndex = state.cartItems.findIndex(item => item.key === action.item.key)
        
        if(itemIndex !== -1){
            let cartItems = state.cartItems
            cartItems[itemIndex].ItemQuantity += action.item.ItemQuantity 
            cartItems[itemIndex].totalPrice += action.item.totalPrice
            return {
                ...state,
                numberOfItemsInCart: state.numberOfItemsInCart + action.item.ItemQuantity,
                totalPrice: state.totalPrice + action.item.totalPrice,
                cartItems
            }
        }

        return { 
            ...state,
            numberOfItemsInCart: state.numberOfItemsInCart + action.item.ItemQuantity,
            totalPrice: state.totalPrice + action.item.totalPrice,
            cartItems: [...state.cartItems, action.item]
        }    
    }

    if(action.type === 'incrementCartItemQuantity'){   
        const itemIndex = state.cartItems.findIndex(item => item.key === action.key)
        
        let cartItems = state.cartItems
        cartItems[itemIndex].ItemQuantity++
        cartItems[itemIndex].totalPrice += cartItems[itemIndex].pricePerQuantity

        return { 
            ...state,
            numberOfItemsInCart: state.numberOfItemsInCart + 1,
            totalPrice: state.totalPrice + cartItems[itemIndex].pricePerQuantity,
            cartItems
        }    
    }

    if(action.type === 'decrementCartItemQuantity'){   
        const itemIndex = state.cartItems.findIndex(item => item.key === action.key)

        let cartItems = state.cartItems

        if(state.cartItems[itemIndex].ItemQuantity === 1){
            return { 
                ...state,
                numberOfItemsInCart: state.numberOfItemsInCart - 1,
                totalPrice: state.totalPrice - cartItems[itemIndex].pricePerQuantity,
                cartItems: state.cartItems.filter(item => item.key !== action.key),

            }
        }     

        cartItems[itemIndex].ItemQuantity--
        cartItems[itemIndex].totalPrice -= cartItems[itemIndex].pricePerQuantity
        return { 
            ...state,
            numberOfItemsInCart: state.numberOfItemsInCart - 1,
            totalPrice: state.totalPrice - cartItems[itemIndex].pricePerQuantity,
            cartItems
        }    
    }

    if(action.type === 'removeItemsFromCart'){   
        const itemIndex = state.cartItems.findIndex(item => item.key === action.key)

        return { 
            ...state,
            numberOfItemsInCart: state.numberOfItemsInCart - state.item[itemIndex].ItemQuantity,
            totalPrice: state.totalPrice - state.item[itemIndex].ItemQuantity * state.item[itemIndex].price,
            cartItems: state.cartItems.filter(item => item.key !== action.key)
        }    
    }

    return state
}

const store = createStore(counterReducer)

export default store;