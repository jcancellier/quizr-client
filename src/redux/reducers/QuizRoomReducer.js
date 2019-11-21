import { SET_QUIZ_ROOM, SET_IS_ADDING_USER_TO_QUIZ_ROOM, SET_QUIZ_ROOM_TIME } from "../actions/types";

const INITIAL_STATE = {
  isAddingUserToQuizRoom: false,
  quizRoom: null,
  roomTime: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_QUIZ_ROOM:
      return { ...state, quizRoom: action.payload };
    case SET_IS_ADDING_USER_TO_QUIZ_ROOM:
      return { ...state, isAddingUserToQuizRoom: action.payload }
    case SET_QUIZ_ROOM_TIME:
      return { ...state, roomTime: action.payload }
    default:
      return state;
  }
}
