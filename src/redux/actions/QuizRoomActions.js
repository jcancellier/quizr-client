import { SET_QUIZ_ROOM, SET_IS_ADDING_USER_TO_QUIZ_ROOM, SET_QUIZ_ROOM_TIME, SET_QUIZ_ROOM_PHASE, SET_QUIZ_RESULTS } from './types';

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

export const setQuizRoomTime = (time) => {
  return {
    type: SET_QUIZ_ROOM_TIME,
    payload: time
  }
}

export const setQuizRoomPhase = (phase) => {
  return {
    type: SET_QUIZ_ROOM_PHASE,
    payload: phase
  }
}

export const setQuizResults = (results) => {
  return {
    type: SET_QUIZ_RESULTS,
    payload: results
  }
}