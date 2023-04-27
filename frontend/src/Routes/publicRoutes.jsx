import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { outLocal } from "../utils/HelperFunctions/userFunctions";

const PublicRoutes = () => {
  const token = outLocal("token");

  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
