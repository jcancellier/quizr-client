import { SET_USER, SET_IS_LOGGED_IN } from './types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIn
  }
}
