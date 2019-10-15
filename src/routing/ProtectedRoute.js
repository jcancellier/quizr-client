import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let isLoggedIn = false;

const ProtectedRoute = (props) => {

    const renderPageOrRedirect = () => {
        if (isLoggedIn) {
            return props.children
        } else {
            return <Redirect to="/"/>
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