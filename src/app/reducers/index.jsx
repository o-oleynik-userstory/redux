import {productsReducer} from 'modules/products/reducers';
import {usersReducer} from 'modules/users/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({products: productsReducer, users: usersReducer});
