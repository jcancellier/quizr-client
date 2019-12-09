import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ProtectedRoute, joinquizRoutePath, QuizRoute, QuizResultsRoute, quizRoutePath, quizResultsPath } from '.';

const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path={joinquizRoutePath} component={JoinQuizPage} />
        <QuizRoute path={quizRoutePath} />
        <QuizResultsRoute path={quizResultsPath} component={ResultsPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export { Router };
