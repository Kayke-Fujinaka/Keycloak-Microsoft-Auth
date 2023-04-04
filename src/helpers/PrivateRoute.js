import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak(ReactKeycloakProvider);

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : <Navigate to="/" />;
};
