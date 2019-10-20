import { SET_AUTH_TOKEN } from "../actions/types";

const INITIAL_STATE = {
  authToken: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload }
    default:
      return state;
  }
}
