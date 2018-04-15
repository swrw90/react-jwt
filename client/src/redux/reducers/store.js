import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productReducer from './product.reducers';
import loginReducer from './login.reducers';

let rootReducer = combineReducers({
    login: loginReducer,
    products: productReducer,
});

const store = createStore(rootReducer,
    {},    
    applyMiddleware(thunk, logger));
export default store;