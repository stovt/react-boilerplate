import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { history } from './store/middleware/routerMiddleware';
import store from './store/createStore';
import theme from './styles';
import LocaleProvider from './shared/components/Locale';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderRoot = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  renderRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
