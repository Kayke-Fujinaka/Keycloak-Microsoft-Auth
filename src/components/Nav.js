import { useKeycloak } from "@react-keycloak/web";
import React from "react";

const Nav = () => {
  const { keycloak } = useKeycloak();

  return (
    <div>
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
                  {!keycloak.authenticated && (
                    <button type="button" onClick={() => keycloak.login()}>
                      Login
                    </button>
                  )}

                  {!!keycloak.authenticated && (
                    <button type="button" onClick={() => keycloak.logout()}>
                      Logout ({keycloak.tokenParsed.preferred_username})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Nav;
