import {createSelector} from 'reselect';

/**
 * Получить Users.
 * @param state Стейт.
 * @return {*} Products.
 */
export const selectUsers = (state) => state.users;

export const selectUsersValue = createSelector(
    [selectUsers],
    (users) => users.value
);
