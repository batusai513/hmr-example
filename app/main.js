import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

export default render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
