import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { outLocal } from "../utils/HelperFunctions/userFunctions";

const ProtectedRoutes = () => {
  const token = outLocal("token");

  return !token ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
