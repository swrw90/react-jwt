let defaultState = {
    cart: [],
    totalQuantity: 0,
    itemPrice: 0,
    totalPrice: 0,
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

export function calculateTotal(products) {
    function determineFinalTotal(accumulator, currentValue) {
        return accumulator + currentValue;
    }

    function calculateIndvidualTotalPrice(product) {
        return product.price * product.quantity;
    }

    return products.map(calculateIndvidualTotalPrice).reduce(determineFinalTotal);
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "ADD_ITEM":
            if (action.cartItem.quantity > 0) {
                return {
                    ...state,
                    quantity: action.cartItem.quantity++,
                    totalQuantity: state.totalQuantity + 1,
                    itemPrice: action.cartItem.price + action.cartItem.price,
                    totalPrice: calculateTotal(state.cart)
                }
            } else {
                return {
                    ...state,
                    message: "Item added to cart",
                    cart: [...state.cart, action.cartItem],
                    quantity: action.cartItem.quantity++,
                    totalQuantity: state.totalQuantity + 1,
                    itemPrice: action.cartItem.price,
                    totalPrice: calculateTotal([...state.cart, action.cartItem])
                }
            };
        case "REMOVE_ITEM":
            let filterCondition = element => element._id != action.item._id;
            return {
                ...state,
                cart: state.cart.filter(filterCondition),
                totalQuantity: state.totalQuantity - action.item.quantity,
                totalPrice: calculateTotal(state.cart.filter(filterCondition))
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                quantity: action.item.quantity--,
                totalQuantity: state.totalQuantity - 1,
                itemPrice: action.item.quantity * action.item.price,
                totalPrice: calculateTotal(state.cart)
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                quantity: action.item.quantity++,
                totalQuantity: state.totalQuantity + 1,
                itemPrice: action.item.price * action.item.quantity,
                totalPrice: calculateTotal(state.cart)
            };
        default:
            return state;
    }
}
export default cartReducer;