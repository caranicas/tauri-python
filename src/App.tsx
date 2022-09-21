import { ReactLocation, Router } from "@tanstack/react-location";

import HomePage from "./pages/homePage";

import "./App.css";
import SettingsPage from "./pages/settingsPage";
const location = new ReactLocation();

function App() {

  return (<Router
    location={location}
    routes={[
      { path: "/", element: <HomePage /> },
      { path: "/settings", element: <SettingsPage /> },
    ]}
  ></Router>);

}

export default App;
