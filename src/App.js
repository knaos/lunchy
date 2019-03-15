import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./components/MainRoutes";
import configureStore from "./redux/store";

import {
  fetchRestaurantMenus,
  fetchRestaurantMenuItems,
  fetchRestaurantWithMenus
} from "./redux/actions/restaurants";

const store = configureStore();

// store.dispatch(fetchRestaurantMenus("5"));
// store.dispatch(fetchRestaurantMenuItems("5"));
// store.dispatch(fetchRestaurantWithMenus("5"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
