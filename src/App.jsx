import { Auth0Provider} from "@auth0/auth0-react";
import './App.scss';
import React from "react";
import { AppRouter } from "./components/routes/AppRouter";


function App() {
  return (
      <Auth0Provider
          domain="isis2503-fai-aher.us.auth0.com"
          clientId="trA7SfedJedZG91taIOeYTyjyUHvbljz"
          redirectUri={window.location.origin + "/home"}
      >
          <AppRouter />

      </Auth0Provider>
  );
}

export default App;
