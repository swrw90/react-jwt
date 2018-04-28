let defaultState = {
    cart: []
};

export function add(cartItem) {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            count: 0,
            cartItem
        });
    };
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                message: "Item added to cart",
                cart: [...state.cart, action.cartItem]
            };
        case "REMOVE_ITEM":
            //splice item
            return {
                ...state.cart.splice(action.cartItem)
            };
        case "UPDATE_ITEM":
            //Edit Quantity
            return {
                ...state,
            };
        default:
            return state;
    }
}


export default cartReducer;