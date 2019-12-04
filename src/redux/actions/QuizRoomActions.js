import { SET_QUIZ_ROOM, SET_IS_ADDING_USER_TO_QUIZ_ROOM, SET_QUIZ_ROOM_TIME, SET_QUIZ_ROOM_PHASE, SET_QUIZ_RESULTS, SET_QUIZ_ROOM_USERS_ONLINE, SET_CURRENT_QUESTION } from './types';

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

export const setQuizRoomUsersOnline = (users) => {
  return {
    type: SET_QUIZ_ROOM_USERS_ONLINE,
    payload: users
  }
}

export const setCurrentQuestion = (question) => {
  return {
    type: SET_CURRENT_QUESTION,
    payload: question
  }
}