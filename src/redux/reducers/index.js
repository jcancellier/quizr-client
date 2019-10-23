import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ServerReducer from './ServerReducer';

export default combineReducers({
  auth: AuthReducer,
  server: ServerReducer
})
