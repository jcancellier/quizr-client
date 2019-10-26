import { SET_USERS_ONLINE, SET_HUB_CONNECTION, SET_IS_HUB_CONNECTION_LOADING } from "../actions/types";

const INITIAL_STATE = {
  hubConnection: null,
  usersOnline: null, // How many users are online
  isHubConnectionLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HUB_CONNECTION:
      return { ...state, hubConnection: action.payload }
    case SET_USERS_ONLINE:
      return { ...state, usersOnline: action.payload }
    case SET_IS_HUB_CONNECTION_LOADING:
      return { ...state, isHubConnectionLoading: action.payload }
    default:
      return state;
  }
}
        