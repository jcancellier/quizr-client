import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ServerReducer from './ServerReducer';
import QuizRoomReducer from './QuizRoomReducer';

export default combineReducers({
  auth: AuthReducer,
  server: ServerReducer,
  quizRoom: QuizRoomReducer
})
