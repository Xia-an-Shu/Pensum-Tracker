import { Auth0Provider} from "@auth0/auth0-react";
import './App.scss';
import React from "react";
import { AppRouter } from "./components/routes/AppRouter";


function App() {
  return (
      <Auth0Provider
          domain="dev-t4k4tx5owk02vb5k.us.auth0.com"
          clientId="8ZuZCFv24cLeuiM3JHHzJWkoom17KGqb"
          redirectUri={window.location.origin + "/Pensum-Tracker/home"}
      >
          <AppRouter />

      </Auth0Provider>
  );
}

export default App;
