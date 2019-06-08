import { LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_IN } from "../actionTypes";

const initialState = {
  name: "",
  username: "",
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, isAuthenticated: true, ...action };
    case LOG_IN_ERROR:
      return { ...state, isAuthenticated: false };
    case LOG_IN:
      return {
        ...state,
        username: action.payload.username,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
