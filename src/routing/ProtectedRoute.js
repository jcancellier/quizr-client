import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const ProtectedRouteComponent = (props) => {

  const renderPageOrRedirect = () => {
    if (props.isLoggedIn) {
      return <props.component />
    } else {
      return <Redirect to="/" />
    }
  }

  const { component, ...other } = props;

  return (
    <Route {...other}>
      {renderPageOrRedirect()}
    </Route>
  )
}

const mapStateStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const ProtectedRoute = connect(mapStateStateToProps)(ProtectedRouteComponent)

export { ProtectedRoute };
