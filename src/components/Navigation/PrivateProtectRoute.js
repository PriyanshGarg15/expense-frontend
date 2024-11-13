import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateProtectRoute = ({ element: Component, ...rest }) => {
  // Check if user is logged in
  const user = useSelector(state => state?.users);
  const { userAuth } = user;

  // If user is authenticated, render the component, otherwise redirect to login
  return userAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateProtectRoute;
