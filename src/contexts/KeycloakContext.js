import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { keycloak } from "../services";

export const KeycloakProvider = ({ children }) => {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      {children}
    </ReactKeycloakProvider>
  );
};
