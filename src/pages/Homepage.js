import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { keycloak } = useKeycloak();

  if (keycloak.authenticated) {
    return <Navigate to="/painel" replace={true} />;
  }

  return (
    <div>
      <h1>Welcome to the PeerBR</h1>
    </div>
  );
};

export default Home;
