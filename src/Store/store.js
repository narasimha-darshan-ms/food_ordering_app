import { createStore } from "redux";

const initialState = {
    cartIsShown: false
};

const counterReducer = (state = initialState, action) => {
    if(action.type === 'onClickCartButton'){    return { cartIsShown: true }    }
    if(action.type === 'closeCART'){    return { cartIsShown: false }    }

    return state
}

const store = createStore(counterReducer)

export default store;