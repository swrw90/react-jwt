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
        productCounter: 0,
        cartItems: [],
    }],
    loadingMessage: "",
    loadingState: LoadingState.pending,
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
    console.log(cartItem + 'add action called');
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            cartItem
        })
    };
}


export let addItem = (state = defaultState, action) => {
    let newCartItems = [];
          console.log('addItem called');    
    switch (action.type) {
        case "ADD_ITEM":
            newCartItems.push(action.cartItem);
            return {
                ...state,
                productCounter: action.count,
                cartItems: newCartItems

            };
        default:
            return state + console.log('addItem called');
    }
}
export default productReducer;