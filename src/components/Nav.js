import { useKeycloak } from "@react-keycloak/web";
import React from "react";

export const Nav = () => {
  const { keycloak } = useKeycloak();

  const handleButtonClick = () =>
    keycloak.authenticated ? keycloak.logout() : keycloak.login();

  return (
    <div>
      <section>
        <nav>
          <div>
            <h1>PeerBR - React Auth with Keycloak.</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/painel">Painel</a>
              </li>
            </ul>
            <div>
              <div>
                <button type="button" onClick={handleButtonClick}>
                  {keycloak.authenticated
                    ? `Logout (${keycloak.tokenParsed.preferred_username})`
                    : "Login"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
