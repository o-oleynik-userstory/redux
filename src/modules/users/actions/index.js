import {usersActions} from 'modules/users/constants';

/**
 * Декремент
 * @return {*} Результат запроса
 */
export const actionUsersDecrement = () => (dispatch) => {
    dispatch({type: usersActions.DECREMENT});
};

/**
 * Инкремент
 * @return {*} Результат запроса
 */
export const actionUsersIncrement = () => (dispatch) => {
    dispatch({type: usersActions.INCREMENT});
};
