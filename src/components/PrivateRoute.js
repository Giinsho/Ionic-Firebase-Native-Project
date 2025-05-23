import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const  PrivateRoute = ()=> {
  const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;