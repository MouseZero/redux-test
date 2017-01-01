import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <h1>Hello World</h1>,
  document.getElementById('app')
)