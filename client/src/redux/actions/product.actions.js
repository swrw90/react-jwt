import axios from 'axios';
import thunk from "redux-thunk";
const productsUrl = 'http://localhost:5000/products';

export function add(cartItem) {
    return {
        type: "ADD_ITEM",
        cartItem
    }
}

export function del(index) {
    return {
        type: "REMOVE_ITEM",
        index
    }
}

export function update(index, updatedCartItem) {
    return {
        type: "UPDATE_ITEM",
        index,
        updatedCartItem
    }
}

// export function getProductsData() {

//     return dispatch => {
//         axios.get('productsUrl')
//             .then(response => {
//                 console.log(response.data);
//             })
//             .then(response => {
//                 dispatch({
//                     type: 'PRODUCTS_DATA_SUCCESS',
//                     data: response.data,
//                 });
//             })
//             .catch(function (error) {
//                 return error
//             });
//     }
// }

// export function dispatchProducts() {
//     return function (dispatch) {
//         return getProductsData().then(
//             data => dispatch({ type: "PRODUCTS_DATA_SUCCESS", data: data.url }),
//             error => dispatch({ type: "FAIL", error: error })
//         )
//     }
// }