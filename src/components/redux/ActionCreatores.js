import * as ActionTypes from "./ActionTypes";

export const setUserName = function (userName) {
  return {
    type: ActionTypes.SET_USER_NAME,
    payload: userName,
  };
};

export const setUserAnswer = function ({ questionId, answerId }) {
  return {
    type: ActionTypes.SET_USER_ANSWER,
    payload: { questionId, answerId },
  };
};

export const setUserGrade = function () {
  return {
    type: ActionTypes.SET_USER_GRADE,
    payload: null,
  };
};
