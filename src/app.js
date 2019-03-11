import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";

render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
