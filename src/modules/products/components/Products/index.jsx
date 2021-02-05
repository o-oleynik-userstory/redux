import {actionProductsDecrement, actionProductsIncrement} from 'modules/products/actions';
import {ProductsSum} from 'modules/products/components/ProductsSum';
import {selectProductsValue} from 'modules/products/selectors';
import propTypes from 'prop-types';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import './style.less';

/**
 * Products.
 * @returns {*} Представление
 */
const Products = ({dispatch, value}) => {
    const handleDecrement = useCallback(() => {
        dispatch(actionProductsDecrement());
    }, [dispatch]);

    const handleIncrement = useCallback(() => {
        dispatch(actionProductsIncrement());
    }, [dispatch]);

    return (
        <div className="products">
            <h4>Products</h4>
            <div className="products__content">
                <button className="products__button" onClick={handleDecrement}>
                    -
                </button>
                <span className="products__value">{value}</span>
                <button className="products__button" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="products__sum-container">
                <ProductsSum />
            </div>
        </div>
    );
};

Products.propTypes = {
    dispatch: propTypes.any,
    value: propTypes.number,
};

export default connect((state) => ({
    value: selectProductsValue(state),
}))(Products);
