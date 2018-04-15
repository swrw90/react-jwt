import axios from 'axios';
const productsUrl = 'http://localhost:5000/products';

let defaultState = {
    products: [{
        name: "",
        price: "",
    }]
};

let productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADING":
            console.log("loading");
            return {
                ...state
            }
        case "PRODUCTS_DATA_SUCCESS":
            return {
                ...state,
                products: action.data.products
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