import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./components/MainRoutes";
import configureStore from "./redux/store";

import {requestLogIn} from './redux/actions/user';


const store = configureStore();

store.dispatch(requestLogIn('user', 'pass'));
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
