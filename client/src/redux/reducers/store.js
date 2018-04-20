import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productReducer from './product.reducers';
import loginReducer from './login.reducers';
import employeeReducer from './employee.reducers';

let rootReducer = combineReducers({
    login: loginReducer,
    products: productReducer,
    about: employeeReducer
});

const store = createStore(rootReducer,
    {},    
    applyMiddleware(thunk, logger));
export default store;