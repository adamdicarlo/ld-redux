import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from '../universal/routes';
import {Provider} from 'react-redux';
import createStore from '../universal/redux/store';
import ldRedux from 'ld-redux';

const reduxState = window.__INITIAL_STATE__ || undefined;
const store = createStore(reduxState);

ldRedux.init('57d3a57f53f8630721228f2d', store);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('reactDiv')
);
