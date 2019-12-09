import React from 'react';
import { Redirect } from 'react-router-dom';
import { ProtectedRoute } from '.';
import { connect } from 'react-redux';
import theme from '../global/styles/theme';
import LoadingOverlay from 'react-loading-overlay';

const QuizResultsRouteComponent = (props) => {
  const renderPageOrRedirect = () => {
    if(!props.isLoggedIn) {
      return <Redirect to="/" />
    }

    if (!props.quizResults) {
      return _renderLoadingOverlay();
    } else {
      return <ProtectedRoute {...props} />
    }
  }

  const _renderLoadingOverlay = () => {
    return (
      <LoadingOverlay
        active={!props.quizResults}
        spinner={true}
        fadeSpeed={0}
        text='Retrieving quiz results'
        styles={{
          spinner: (base) => ({
            ...base,
            '& svg circle': {
              stroke: `${theme.palette.primary[theme.palette.type]}`
            }
          }),
          content: (base) => ({
            ...base,
            fontFamily: theme.typography.fontFamily
          }),
          overlay: (base) => ({
            ...base,
            zIndex: 2000,
            width: '100vw',
            height: '100vh'
          })
        }}
      />
    )
  }

  return (
    renderPageOrRedirect()
  )
}

const mapStateStateToProps = (state) => {
  return {
    quizResults: state.quizRoom.results,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const QuizResultsRoute = connect(mapStateStateToProps)(QuizResultsRouteComponent)

export { QuizResultsRoute };
