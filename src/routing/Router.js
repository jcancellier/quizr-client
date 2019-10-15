import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '.';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path="/joinquiz" component={JoinQuizPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export { Router };
