let defaultState = {
    cart: [],
    totalQuantity: 0,
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


function filterCondition(productToCompare) {
    return function (element) {
        return element._id != productToCompare.item._id
    }
}

export function calculateTotal(products) {
    function determineFinalTotal(accumulator, currentValue) {
        return accumulator + currentValue;
    }

    function calculateIndvidualTotalPrice(product) {
        return product.price * product.quantity;
    }

    return products.map(calculateIndvidualTotalPrice).reduce(determineFinalTotal, 0);
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "ADD_ITEM":
            if (state.cart.includes(action.cartItem)) {
                return {
                    ...state,
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: calculateTotal([...state.cart, action.cartItem])
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.cartItem],
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: calculateTotal([...state.cart, action.cartItem])
                }
            }
        case "REMOVE_ITEM":

            return {
                ...state,
                cart: state.cart.filter(filterCondition(action)),
                totalQuantity: state.totalQuantity - action.item.quantity,
                totalPrice: calculateTotal(state.cart.filter(filterCondition(action)))
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: calculateTotal(state.cart)
            };
        case "INCREMENT_QUANTITY":
            action.item.quantity++;
            return {
                ...state,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: calculateTotal(state.cart)
            };
        default:
            return state;
    }
}
export default cartReducer;