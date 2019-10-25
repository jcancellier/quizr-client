import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ProtectedRoute, joinquizRoutePath } from '.';

const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path={joinquizRoutePath} component={JoinQuizPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export { Router };
