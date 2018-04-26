let defaultState = {
    cart: []
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            //splice item
            return {
                ...state,
                todoItems: newTodoItems
            };
        case "UPDATE_ITEM":
            //Edit Quantity
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default cartReducer;