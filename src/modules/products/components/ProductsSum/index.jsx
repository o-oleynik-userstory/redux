import {selectProductsValue} from 'modules/products/selectors';
import React from 'react';
import {useSelector} from 'react-redux';
import './style.less';

/**
 * ProductsSum
 * @returns {*} Представление
 */
export const ProductsSum = () => {
    const value = useSelector(selectProductsValue);
    return (
        <div className="products-sum">
            <h4>ProductsSum</h4>
            <div className="products-sum__content">
                <span className="products-sum__value">{value}</span>
            </div>
        </div>
    );
};
