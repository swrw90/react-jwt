let defaultState = {
    cart: []
};

export function add(cartItem) {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            cartItem
        });
    };
};

export function del(cartItem) {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            cartItem
        });
    }
}


let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                message: "Item added to cart",
                cart: [...state.cart, action.cartItem]
            };
        case "REMOVE_ITEM":
            // 1. Splice.
            // 2. Functional. Filter(return a new array without the removed item.)

            return {
                ...state,
               // cart:  spliced array
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