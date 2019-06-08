import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  componentProps,
  path,
  exact,
  routes,
  isAuthenticated,
  ...restProps
}) => (
  <Route
    exact={exact}
    path={path}
    {...restProps}
    render={props => {
      const canGo = isAuthenticated;
      debugger;
      if (canGo) {
        return <Component {...props} {...componentProps} routes={routes} />;
      } else {
        return <Redirect to="/sign-in" />;
      }
    }}
  />
);

function isAuthenticated() {
  // TODO: implement
  return true;
}
let mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});
export default connect(mapStateToProps)(PrivateRoute);
