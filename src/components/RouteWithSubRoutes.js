import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = ({
  component: Component,
  componentProps,
  path,
  exact,
  routes,
  ...restProps
}) => (
  <Route
    path={path}
    exact={exact}
    {...restProps}
    render={props => (
      // pass the sub-routes down to keep nesting
      <Component {...props} {...componentProps} routes={routes} />
    )}
  />
);

export default RouteWithSubRoutes;
