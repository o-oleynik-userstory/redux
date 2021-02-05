import {productsActions} from 'modules/products/constants';

const initialState = {
    value: 0,
};

/**
 * Reducer.
 * @param {any} state State
 * @param {any} action Action
 * @returns {*} Представление
 */
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsActions.DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        case productsActions.INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        default:
            return state;
    }
};
