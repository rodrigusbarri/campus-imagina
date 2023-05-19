//import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import Header from "./components/Header";
import { Validate } from "./components/Validate";

function App() {
  const validate = Validate.handleLogout;

  return (
    <BrowserRouter>
      <>
        {window.location.pathname !== "/" && <Header onLogout={() => validate.handleLogout} />}

        <MyRoutes isLoggedIn={() =>validate.isLoggedIn} />
      </>
    </BrowserRouter>
  );
}

export default App;