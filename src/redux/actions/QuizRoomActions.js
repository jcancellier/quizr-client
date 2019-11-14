import { SET_QUIZ_ROOM, SET_IS_ADDING_USER_TO_QUIZ_ROOM } from './types';

export const setQuizRoom = (quizRoom) => {
  return {
    type: SET_QUIZ_ROOM,
    payload: quizRoom
  }
}

export const setIsAddingUserToQuizRoom = (isAddingUserToQuizRoom) => {
  return {
    type: SET_IS_ADDING_USER_TO_QUIZ_ROOM,
    payload: isAddingUserToQuizRoom
  }
}
