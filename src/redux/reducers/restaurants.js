import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_ERROR
} from "../actions/restaurants";

const initialState = {
  restaurants: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return { ...state, loading: true };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload, loading: false };
    case FETCH_RESTAURANTS_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
