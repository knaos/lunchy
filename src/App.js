import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./components/MainRoutes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
