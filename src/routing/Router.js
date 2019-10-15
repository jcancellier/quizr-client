import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ProtectedRoute } from '.';

const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path="/joinquiz" component={JoinQuizPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export { Router };
