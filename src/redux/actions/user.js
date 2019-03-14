import { LOG_IN } from "../actionTypes";

export const logIn = (username, password) => ({
  type: LOG_IN,
  payload: {
    username,
    password
  }
});
