import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let isLoggedIn = true;

const ProtectedRoute = (props) => {

  const renderPageOrRedirect = () => {
    if (isLoggedIn) {
      return props.children
    } else {
      alert('must be admin to access');
      return <Redirect to="/" />
    }
  }

  return (
    <Route {...props}>
      {
        renderPageOrRedirect()
      }
    </Route>
  )
}

export { ProtectedRoute };
