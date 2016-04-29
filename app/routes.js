import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';
import AppLayout from './pages/app-layout';
import NotFoundPage from './pages/not-found';
import Component from './pages/component';

export default (
  <Route component={AppLayout}>
    <Route path="components" component={Component} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
