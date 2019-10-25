import { SET_USERS_ONLINE, SET_HUB_CONNECTION, SET_IS_HUB_CONNECTION_LOADING } from './types';

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

export const setIsHubConnectionLoading = (isHubConnectionLoading) => {
  return {
    type: SET_IS_HUB_CONNECTION_LOADING,
    payload: isHubConnectionLoading
  }
}