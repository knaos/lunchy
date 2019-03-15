import api from "../../api";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_ERROR = "FETCH_RESTAURANTS_ERROR";
// export const FETCH_RESTAURANTS_ = "FETCH_RESTAURANTS";

export const requestRestaurants = () => {
  return dispatch => {
    dispatch({ type: FETCH_RESTAURANTS });

    return api
      .get("/restaurants")
      .then(response => {
        console.log(response);
        dispatch(fetchRestaurantsSuccess(response.collection));
      })
      .catch(error => {
        dispatch(fetchRestaurantsError());
        console.log(error);
      });
  };
};

export const fetchRestaurantsSuccess = payload => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload
});

export const fetchRestaurantsError = error => ({
  type: FETCH_RESTAURANTS_ERROR,
  payload: error
});
