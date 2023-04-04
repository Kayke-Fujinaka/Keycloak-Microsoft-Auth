import { ReactKeycloakProvider } from "@react-keycloak/web";
import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Home, Painel } from "./pages";
import { keycloak } from "./services";

function App() {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
