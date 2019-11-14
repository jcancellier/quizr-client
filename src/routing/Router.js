import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ProtectedRoute, joinquizRoutePath, QuizRoute, quizRoutePath } from '.';

const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path={joinquizRoutePath} component={JoinQuizPage} />
        <QuizRoute path={quizRoutePath} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export { Router };
