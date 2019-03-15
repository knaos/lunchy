import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from "../actionTypes";
import api from "../../api";

export const requestLogIn = (username, password) => {
  return dispatch => {
    dispatch(logIn(username, password));

    return api
      .post("login", { username, password })
      .then(payload => {
        console.log(payload);
        dispatch(logInSuccess(payload));
      })
      .catch(error => dispatch(logInError(error)));
  };
};

export const logIn = (username, password) => ({
  type: LOG_IN,
  payload: {
    username,
    password
  }
});

export const logInSuccess = payload => ({
  type: LOG_IN_SUCCESS,
  payload
});

export const logInError = error => ({
  type: LOG_IN_ERROR,
  payload: error
});
