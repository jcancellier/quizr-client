import { SET_AUTH_TOKEN, SET_USER, SET_IS_LOGGED_IN, SET_IS_LOGGING_IN } from "../actions/types";

const INITIAL_STATE = {
  authToken: '',
  user: '',
  isLoggedIn: false,
  isLoggingIn: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload }
    case SET_USER:
      return { ...state, user: action.payload }
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload }
    case SET_IS_LOGGING_IN:
      return { ...state, isLoggingIn: action.payload }
    default:
      return state;
  }
}
