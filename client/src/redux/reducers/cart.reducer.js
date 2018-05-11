
let defaultState = {
    cart: [],
    totalQuantity: 0
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

export function reduceQuantity(item) {
    return dispatch => {
        dispatch({
            type: "DECREMENT_QUANTITY",
            item
        })
    }
}

export function incrementQuantity(item) {
    return dispatch => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            item
        })
    }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (action.cartItem.quantity > 0) {
                return {
                    ...state,
                    quantity: action.cartItem.quantity++,
                    totalQuantity: state.totalQuantity + 1
                }
            } else {
                return {
                    ...state,
                    message: "Item added to cart",
                    cart: [...state.cart, action.cartItem],
                    quantity: action.cartItem.quantity++,
                    totalQuantity: state.totalQuantity + 1
                }
            };
        case "REMOVE_ITEM":
            let filterCondition = element => element._id != action.item._id

            return {
                ...state,
                cart: state.cart.filter(filterCondition),
                totalQuantity: state.totalQuantity - action.item.quantity
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                quantity: action.item.quantity--,
                totalQuantity: state.totalQuantity - 1
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                quantity: action.item.quantity++,
                totalQuantity: state.totalQuantity + 1
            };
        default:
            return state;
    }
}
export default cartReducer;