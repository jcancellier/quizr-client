import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { QuizLobbyPage } from '../pages';
import { joinquizRoutePath } from '.';
import { PrequestionPage } from '../pages/Prequestion/PrequestionPage';
import { QuestionPage } from '../pages/Question/QuestionPage';

const QuizRouteComponent = (props) => {

  const renderQuizPhaseOrRedirect = () => {
    if (!props.isLoggedIn) {
      return <Redirect to="/" />
    }
    if (!props.quizRoom) {
      return <Redirect to={joinquizRoutePath} />
    }
    switch (props.quizPhase) {
      case 'lobby':
        return <QuizLobbyPage />
      case 'prequestion':
        return <PrequestionPage />
      case 'question':
        return <QuestionPage />
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
    quizRoom: state.quizRoom.quizRoom,
    quizPhase: state.quizRoom.quizPhase
  }
}

const QuizRoute = connect(mapStateStateToProps)(QuizRouteComponent)

export { QuizRoute };
