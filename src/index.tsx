import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LocaleProvider from './shared/components/Locale';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderRoot = document.getElementById('root');

ReactDOM.render(
  <Router>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Router>,
  renderRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
