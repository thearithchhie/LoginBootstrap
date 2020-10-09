import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const {
    isLogin,
    authenticationComponent: AuthenticationComponent,
    adminDashboardPage: AdminDashboardPage,
  } = props;
  return (
      <div>
          <h1>Home Page</h1>
      </div>
    // <Route
    //   render={(props) =>
    //     isLogin ? (
    //       <AdminDashboardPage {...props} />
    //     ) : (
    //       <AuthenticationComponent {...props} />
    //     )
    //   }
    // />
  );
};
export default PrivateRoute;
