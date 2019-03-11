import React from "react";
import { Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import PrivateRoute from "./PrivateRoute";

const NotFound = () => <h1>Not Found</h1>;

const MainRoutes = () => (
  <Switch>
    {publicRoutes.map(route => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
    {privateRoutes.map(route => (
      <PrivateRoute key={route.path} {...route} />
    ))}
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default MainRoutes;
