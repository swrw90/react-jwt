let defaultState = {
    cart: [],
    totalQuantity: 0,
    itemPrice: 0,
    totalPrice: 0,
    checkoutClicked: false
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

export function updateTotal(item) {
    return dispatch => {
        dispatch({
            type: "UPDATE_TOTAL_PRICE",
            item
        })
    }
}

export function checkout() {
    return dispatch => {
        dispatch({
            type: "CHECKOUT_CLICKED"
        })
    }
}

export function calculateTotal(products) {
    //1. array of cart products passed in
    let finalPrice;

    //2. new array of total price for each individual product
    let individualProductsTotal = products.map(function (product) {
        return (product.price * product.quantity);
    })

    //4. called by reduce, returns the total of all items price
    function determineFinalTotal(total, num) {
        finalPrice = total + num
        return finalPrice
    }

    //3. conditional to confirm array isn't empty before reduce 
    if (individualProductsTotal.length > 0) {
        individualProductsTotal.reduce(determineFinalTotal)
    }
    //5. final total price of all items is returned to totalPrice prop on state
    console.log(finalPrice)
    return finalPrice
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
                    totalPrice: calculateTotal(state.cart)
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
                totalQuantity: state.totalQuantity - 1,
                itemPrice: action.item.quantity * action.item.price
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                quantity: action.item.quantity++,
                totalQuantity: state.totalQuantity + 1,
                itemPrice: action.item.price * action.item.quantity,
                totalPrice: calculateTotal(state.cart)
            };
        case "CHECKOUT_CLICKED":
            return {
                ...state,
                checkoutClicked: true
            }
        default:
            return state;
    }
}
export default cartReducer;