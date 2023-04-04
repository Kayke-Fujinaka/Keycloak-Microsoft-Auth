import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./Keycloak";
import Nav from "./components/Nav";
import Home from "./pages/Homepage";
import Painel from "./pages/Painelpage";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
