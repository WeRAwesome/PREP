// Styles
import '../public/style/css/main.css';
import '../public/style/css/bio.css';
import '../public/style/css/home.css';
import '../public/style/css/self-help.css';
import '../public/style/css/climato.css';
import '../public/style/css/geo.css';
import '../public/style/css/manmade.css';
import '../public/style/css/hydro.css';
import '../public/style/css/w3.css';

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
