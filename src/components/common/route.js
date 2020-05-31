import React from "react";

import { Route, Redirect } from "react-router-dom";

import _ from "lodash";

import { useAuthContext } from "../../context";

export const PrivateRoute = ({ children, actions = [], ...rest }) => {
  const { user } = useAuthContext();

  const isAllow = (admin, actions) => {
    if (!admin) {
      return false;
    }
    const permissions = admin.permissions || [];
    return _.isEqual(_.intersection(permissions, actions), actions);
  };

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAllow(user, actions) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
