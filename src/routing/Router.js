import React from 'react';
import { HomePage, JoinQuizPage } from '../pages';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ProtectedRoute, joinquizRoutePath, QuizRoute, QuizResultsRoute, quizRoutePath, quizResultsPath } from '.';
import { ResultsPage } from '../pages/Results/ResultsPage';

const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={ResultsPage} />
        <ProtectedRoute path={joinquizRoutePath} component={JoinQuizPage} />
        <QuizRoute path={quizRoutePath} />
        <QuizResultsRoute path={quizResultsPath} component={ResultsPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export { Router };
