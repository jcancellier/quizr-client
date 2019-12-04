import { SET_QUIZ_ROOM, SET_IS_ADDING_USER_TO_QUIZ_ROOM, SET_QUIZ_ROOM_TIME, SET_QUIZ_ROOM_PHASE, SET_QUIZ_RESULTS, SET_QUIZ_ROOM_USERS_ONLINE } from "../actions/types";

const INITIAL_STATE = {
  isAddingUserToQuizRoom: false,
  quizRoom: null,
  roomTime: 0,
  quizPhase: 'lobby',
  results: null,
  usersOnline: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_QUIZ_ROOM:
      return { ...state, quizRoom: action.payload };
    case SET_IS_ADDING_USER_TO_QUIZ_ROOM:
      return { ...state, isAddingUserToQuizRoom: action.payload }
    case SET_QUIZ_ROOM_TIME:
      return { ...state, roomTime: action.payload }
    case SET_QUIZ_ROOM_PHASE:
      return { ...state, quizPhase: action.payload }
    case SET_QUIZ_RESULTS:
      return { ...state, results: action.payload }
    case SET_QUIZ_ROOM_USERS_ONLINE:
      return { ...state, usersOnline: action.payload }
    default:
      return state;
  }
}
