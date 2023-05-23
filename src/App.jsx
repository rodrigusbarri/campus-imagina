import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";





function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <div></div>
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
