import {usersActions} from 'modules/users/constants';

const initialState = {
    value: 0,
};

/**
 * Reducer.
 * @param {any} state State
 * @param {any} action Action
 * @returns {*} Представление
 */
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersActions.DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        case usersActions.INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        default:
            return state;
    }
};
