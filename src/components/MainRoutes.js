import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar";

const NotFound = () => <h1>Not Found</h1>;

const MainRoutes = () => (
  <Fragment>
    <Navbar />
    <main style={{ padding: "100px 20px 20px 100px" }}>
      <Switch>
        {publicRoutes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
        {privateRoutes.map(route => (
          <PrivateRoute key={route.path} {...route} />
        ))}
        <Route path="/*" component={NotFound} />
      </Switch>
    </main>
  </Fragment>
);

export default MainRoutes;
