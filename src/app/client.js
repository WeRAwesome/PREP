import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';
import reducers from './reducers';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , app);
