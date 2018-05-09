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

export function del(item) {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            item,
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
            let filterCondition = element => element._id != action.item._id

            return {
                ...state,
                cart: state.cart.filter(filterCondition) 
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