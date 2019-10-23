import { SET_USERS_ONLINE, SET_HUB_CONNECTION } from "../actions/types";

const INITIAL_STATE = {
  hubConnection: null,
  usersOnline: null // How many users are online
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HUB_CONNECTION:
      return { ...state, hubConnection: action.payload }
    case SET_USERS_ONLINE:
      return { ...state, usersOnline: action.payload }
    default:
      return state;
  }
}
