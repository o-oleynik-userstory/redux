import {createSelector} from 'reselect';

/**
 * Получить Products.
 * @param state Стейт.
 * @return {*} Products.
 */
export const selectProducts = (state) => {
    return state.products;
};

export const selectProductsValue = createSelector(
    [selectProducts],
    (products) => products.value
);
