import App from 'app';
import {store} from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'styles/index.less';

const root = document.getElementById('root');

/**
 * Вывести приложение.
 */
function renderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('app', renderApp);
}
