import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ element: Component, ...rest }) => {
  // Check if the user is logged in and has admin privileges
  const user = useSelector(state => state?.users);
  const { userAuth } = user;

  // If user is admin, render the component, otherwise redirect to not-admin page
  return userAuth?.isAdmin ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/not-admin" />
  );
};

export default AdminRoute;
