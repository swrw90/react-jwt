import axios from 'axios';
const productsUrl = 'http://localhost:5000/products';

export const LoadingState = {
    pending: 0,
    loading: 1,
    finished: 2
}

let defaultState = {
    products: [{
        name: "",
        price: "",
    }],
    loadingMessage: '',
    loadingState: LoadingState.pending
};

let productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADING":
            return {
                ...state,
                loadingMessage: "Loading data",
                loadingState: LoadingState.loading
            }
        case "PRODUCTS_DATA_SUCCESS":
            return {
                ...state,
                products: action.data.products,
                loadingMessage: 'Data loaded successfully',
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
export default productReducer;