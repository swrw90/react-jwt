let defaultState = {
    cartItems: []
};

let productReducer = (state = defaultState, action) => {
    let newCartItems = [...state.cartItems];
    switch (action.type) {
        case "ADD_ITEM":
            newCartItems.push(action.cartItem);
            return {
                ...state,
                cartItems: newCartItems
            };
        case "REMOVE_ITEM":
            newCartItems.splice(action.index, 1);
            return {
                ...state,
                cartItems: newCartItems
            };
        case "UPDATE_ITEM":
            newCartItems[action.index] = action.updatedCartItem;
            return {
                ...state,
                cartItems: newCartItems
            };
        default:
            return state;
    }
}


export default productReducer;