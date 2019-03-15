import { LOG_IN_SUCCESS, LOG_IN_ERROR } from "../actionTypes";

const initialState = {
  name: "",
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, isAuthenticated: true, ...action };
    case LOG_IN_ERROR:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
