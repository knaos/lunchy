import React from "react";
import { Route, Redirect} from "react-router-dom";

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
      } else {
        return <Redirect to="/login"></Redirect>;
      }
    }}
  />
);

function isAuthenticated() {
  // TODO: implement
  return true;
}

export default PrivateRoute;
