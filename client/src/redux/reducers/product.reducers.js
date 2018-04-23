import axios from 'axios';
const productsUrl = 'http://localhost:5000/products';

export const LoadingState = {
    pending: 0,
    loading: 1,
    finished: 2
};

let defaultState = {
    products: [{
        name: "",
        price: "",
    }],
    loadingMessage: "",
    loadingState: LoadingState.pending,
    cart: {
    cartItems: [],
    itemCounter: 0    
}
};

let productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADING":
            console.log("loading");
            return {
                ...state,
                loadingMessage: "Loading data",
                loadingState: LoadingState.loading
            }
        case "PRODUCTS_DATA_SUCCESS":
            console.log("Successful data retrieval after network call");
            return {
                ...state,
                products: action.data.products,
                loadingMessage: "Data succesfully loaded",
                loadingState: LoadingState.finished
            };
        default:
            return state;
    }
}

export function getProductsData() {
    return dispatch => {
        dispatch({
            type: "PRODUCTS_LOADING",
        })
        axios.get(productsUrl)
            .then(response => {
                dispatch({
                    type: 'PRODUCTS_DATA_SUCCESS',
                    data: response.data,
                });
            })
            .catch(function (error) {
                return error
            });
    }
}

export function add(cartItem) {
    return {
        type: "ADD_ITEM",
        cartItem
    }
}

let  addItem = (state = defaultState, action) => {
    let newCartItems = [...state.cartItems];
    switch (action.type) {
        case "ADD_ITEM":
        newCartItems.push(action.cartItem);
            return {
                ...state,
                cartItems: newCartItems
            };
        default:
            return state;
    }
}
export default productReducer;