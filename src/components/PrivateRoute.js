import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  componentProps,
  path,
  exact,
  routes,
  ...restProps
}) => (
  <Route
    exact={exact}
    path={path}
    {...restProps}
    render={props => {
      const canGo = isAuthenticated();

      if (canGo) {
        return <Component {...props} {...componentProps} routes={routes} />;
      }
    }}
  />
);

function isAuthenticated() {
  // TODO: implement
  return true;
}

export default PrivateRoute;
