import React from "react";
// import { useState } from "react";
// import ReactUseState from "./Components/ReactUseState";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import LoginContextProvider from "./Context/LoginContextProvider";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Login />
        <Profile />
      </LoginContextProvider>
    </div>
  );
}

export default App;
