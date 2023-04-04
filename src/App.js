import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { KeycloakProvider } from "./contexts";
import { PrivateRoute } from "./helpers";
import { Home, Painel } from "./pages";

function App() {
  return (
    <div>
      <KeycloakProvider>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/painel"
              element={
                <PrivateRoute>
                  <Painel />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </KeycloakProvider>
    </div>
  );
}

export default App;
