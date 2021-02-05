import {actionUsersDecrement, actionUsersIncrement} from 'modules/users/actions';
import {UsersSum} from 'modules/users/components/UsersSum';
import {selectUsersValue} from 'modules/users/selectors';
import propTypes from 'prop-types';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import './style.less';

/**
 * Users.
 * @returns {*} Представление
 */
const Users = ({dispatch, value}) => {
    const handleDecrement = useCallback(() => {
        dispatch(actionUsersDecrement());
    }, [dispatch]);

    const handleIncrement = useCallback(() => {
        dispatch(actionUsersIncrement());
    }, [dispatch]);

    return (
        <div className="users">
            <h4>Users</h4>
            <div className="users__content">
                <button className="users__button" onClick={handleDecrement}>
                    -
                </button>
                <span className="users__value">{value}</span>
                <button className="users__button" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="products__sum-container">
                <UsersSum />
            </div>
        </div>
    );
};

Users.propTypes = {
    dispatch: propTypes.any,
    value: propTypes.number,
};

export default connect((state) => ({
    value: selectUsersValue(state),
}))(Users);
