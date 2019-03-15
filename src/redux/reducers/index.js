import { combineReducers } from "redux";
import user from "./user";
import restaurants from "./restaurants";

const rootReducer = combineReducers({
  user,
  restaurants
});

export default rootReducer;
