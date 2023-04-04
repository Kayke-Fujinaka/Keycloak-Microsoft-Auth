import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Navigate } from "react-router-dom";

const Painel = () => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h1>Welcome to the Painel</h1>
    </div>
  );
};

export default Painel;
