import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "./hooks/auth";
import { logoutAsync } from "./store/reducers/auth.reducer";

const PrivateRoute = ({ permissions, children }) => {
  const auth = useAuth();
  const dispatch = useDispatch();

  if (!auth?.user) {
    dispatch(logoutAsync());
    return <Navigate to="/login" />;
  }

  const userRole = auth?.user?.role;
  const hasPermission = permissions?.some((p) => userRole?.includes(p));

  if (auth.token && !hasPermission) {
    dispatch(logoutAsync());
    return <Navigate to='/not-authorized' />;
  }

  return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
