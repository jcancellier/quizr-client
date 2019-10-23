import { SET_USERS_ONLINE, SET_HUB_CONNECTION } from './types';

export const setUsersOnline = (usersOnline) => {
  return {
    type: SET_USERS_ONLINE,
    payload: usersOnline
  }
}

export const setHubConnection = (hubConnection) => {
  return {
    type: SET_HUB_CONNECTION,
    payload: hubConnection
  }
}
