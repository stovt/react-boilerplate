import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/middleware/routerMiddleware';
import store from './store/createStore';
import LocaleProvider from './shared/components/Locale';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  renderRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
