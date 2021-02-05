import {selectUsersValue} from 'modules/users/selectors';
import React from 'react';
import {useSelector} from 'react-redux';
import './style.less';

/**
 * UsersSum
 * @returns {*} Представление
 */
export const UsersSum = () => {
    const value = useSelector(selectUsersValue);
    return (
        <div className="users-sum">
            <h4>UsersSum</h4>
            <div className="users-sum__content">
                <span className="users-sum__value">{value}</span>
            </div>
        </div>
    );
};
