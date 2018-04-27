import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import employeeReducer from './employee.reducers';
import productReducer from './product.reducers';
import loginReducer from './login.reducers';
import cartReducer from './cart.reducer';


let rootReducer = combineReducers({
    login: loginReducer,
    products: productReducer,
    employees: employeeReducer,
    cart: cartReducer
});

const store = createStore(rootReducer,
    {},
    applyMiddleware(thunk, logger)
);
export default store;