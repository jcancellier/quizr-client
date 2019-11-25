import React from 'react';
import { Redirect } from 'react-router-dom';
import { ProtectedRoute } from '.';
import { connect } from 'react-redux';


const QuizResultsRouteComponent = (props) => {
  const renderPageOrRedirect = () => {
    if (props.quizResults) {
      return <ProtectedRoute {...props}/>
    } else {
      return <Redirect to="/" />
    }
  }

  return (
    renderPageOrRedirect()
  )
}

const mapStateStateToProps = (state) => {
  return {
    quizResults: state.quizRoom.results
  }
}

const QuizResultsRoute = connect(mapStateStateToProps)(QuizResultsRouteComponent)

export { QuizResultsRoute };
