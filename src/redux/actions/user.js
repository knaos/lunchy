import { LOG_IN } from "../actionTypes";
import api from '../../api';

export const requestLogIn = (username, password) => {
  return dispatch => {
    dispatch(logIn(username, password));

    api.post('login', {username, password});
  };
};

export const logIn = (username, password) => ({
  type: LOG_IN,
  payload: {
    username,
    password
  }
});

