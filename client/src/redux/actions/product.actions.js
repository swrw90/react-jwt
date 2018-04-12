import axios from 'axios';

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