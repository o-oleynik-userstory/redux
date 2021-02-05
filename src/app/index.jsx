import Products from 'modules/products/components/Products';
import Users from 'modules/users/components/Users';
import React from 'react';
import './style.less';

/**
 * Пример компонента.
 */
class App extends React.Component {
    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    constructor(props) {
        super(props);
    }

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <div className="layout">
                <h1>redux</h1>
                <div className="layout__container">
                    <Products />
                    <div className="layout__container">
                        <Users />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
