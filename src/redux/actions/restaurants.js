import api from "../../api";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_ERROR = "FETCH_RESTAURANTS_ERROR";
// export const FETCH_RESTAURANTS_ = "FETCH_RESTAURANTS";

export const EDIT_RESTAURANT = "EDIT_RESTAURANT";
export const EDIT_RESTAURANT_SUCCESS = "EDIT_RESTAURANT_SUCCESS";
export const EDIT_RESTAURANT_ERROR = "EDIT_RESTAURANT_ERROR";

export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const ADD_RESTAURANT_SUCCESS = "ADD_RESTAURANT_SUCCESS";
export const ADD_RESTAURANT_ERROR = "ADD_RESTAURANT_ERROR";

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

export const editRestaurant = restaurant => {
  return dispatch => {
    dispatch({ type: EDIT_RESTAURANT });

    return api
      .post(`/restaurants/${restaurant.id}`)
      .then(response => {
        console.log("Edit response", response);
        dispatch(editRestuarantSuccess());
      })
      .catch(error => {
        console.log("Edit restaurant error:", error);
        dispatch(editRestuarantError(error));
      });
  };
};

export const editRestuarantSuccess = payload => ({
  type: EDIT_RESTAURANT_SUCCESS,
  payload
});

export const editRestuarantError = error => ({
  type: EDIT_RESTAURANT_SUCCESS,
  payload: error
});

export const addRestaurant = restaurant => {
  return dispatch => {
    dispatch({ type: ADD_RESTAURANT });

    return api
      .post(`/restaurants`, restaurant)
      .then(response => {
        console.log("add response", response);
        dispatch(addRestuarantSuccess());
      })
      .catch(error => {
        console.log("add restaurant error:", error);
        dispatch(addRestuarantError(error));
      });
  };
};

export const addRestuarantSuccess = payload => ({
  type: ADD_RESTAURANT_SUCCESS,
  payload
});

export const addRestuarantError = error => ({
  type: EDIT_RESTAURANT_SUCCESS,
  payload: error
});
