
let defaultState = {
    cart: [],
    totalQuantity: 0,
    itemPrice: 0,
    totalPrice: 0
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


export function calculateTotal(products) {
    // 1. for each item in prodcuts array

    // 2. get the total of each product by doing ... prce * quantity

    // 3. add all the total of each up 

    // 4 return ^ value



    let individualProductsTotal = products.map(function (product) {
        return (product.price * product.quantity);
    })
    function determineFinalTotal(total, num) {
        let finalPrice = total + num
        return console.log(finalPrice)
    }
    if (individualProductsTotal.length > 0) {
         individualProductsTotal.reduce(determineFinalTotal)
    }

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
                itemPrice: action.item.price * action.item.quantity
            };
        case "UPDATE_TOTAL_PRICE":
            return {
                ...state
            }
        default:
            return state;
    }
}
export default cartReducer;


// totalQuantity
// individualQuantity = action.item.quantity (current quantity before decrement)
// itemPrice 
// individualItemPrice = action.item.price

// totalItemPriceOfAProduct = individualQuantity * individualItemPrice

// totalItemPriceOfAProduct - idenvidualItemPrice 




// 2 cool shades $20 each

// 3 bracelet $2 each


// result of doing totalItemPriceOfAProduct - individualItemPrice
// 1. push + on brancelet 
// 2. quantity of bracelet = 4
// 3. cart.itemPrice = $8 bracelets 
// 4. push - on coolShades  /// coolshades total price should be $40 so whne you push - it should be $20
// 5. cart.itemprice 
//         $8 - $20 /// -$12

// totalItemPriceOfAProduct = 

// 4. push - on coolShades 
//                         2 * 20 = $40



// Cart Object
// TotalPriceOfIndividualItem (Only current product object) 
// TotalQuantityOfAllproducts
// each product quantity ??? 
// cart array = [Product]




// Equation to find out the Total Price of all items

// individualPriceOfProduct
// QuantityOfIndividualproduct
// AllTheProducts

// TotalPriceOfAllItem = ForEach item (individualPriceOfProduct * QuantityOfIndividualproduct) add them all up.
//                         [Product]       product.price               product.quantity ? 
