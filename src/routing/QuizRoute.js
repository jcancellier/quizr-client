import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { QuizLobbyPage } from '../pages';
import { joinquizRoutePath } from '.';

let quizPhase = 'lobby';

const QuizRouteComponent = (props) => {

  const renderQuizPhaseOrRedirect = () => {
    if (!props.isLoggedIn) {
      return <Redirect to="/" />
    }
    if (!props.quizRoom) {
      return <Redirect to={joinquizRoutePath} />
    }
    switch (quizPhase) {
      case 'lobby':
        return <QuizLobbyPage />
      default:
        return <Redirect to="/" />
    }
  }

  const { component, ...other } = props;

  return (
    <Route {...other}>
      {renderQuizPhaseOrRedirect()}
    </Route>
  )
}

const mapStateStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    quizRoom: state.quizRoom.quizRoom
  }
}

const QuizRoute = connect(mapStateStateToProps)(QuizRouteComponent)

export { QuizRoute };
