import {productsActions} from 'modules/products/constants';

/**
 * Декремент
 * @return {*} Результат запроса
 */
export const actionProductsDecrement = () => (dispatch) => {
    dispatch({type: productsActions.DECREMENT});
};

/**
 * Инкремент
 * @return {*} Результат запроса
 */
export const actionProductsIncrement = () => (dispatch) => {
    dispatch({type: productsActions.INCREMENT});
};
