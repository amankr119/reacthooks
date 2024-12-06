import React from "react";
// import { useState } from "react";
// import ReactUseState from "./Components/ReactUseState";
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";
 import LoginContextProvider from "./Context/LoginContextProvider";
// import Usereducer from "./Components/Usereducer";
// import Useref from "./Components/Useref";
import UseLayoutEffect from './Components/UseLayoutEffect';

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        {/* <Login />
        <Profile />  */}
        {/* <Useref/> */}
        {/* <Usereducer /> */}
        <UseLayoutEffect/>
      </LoginContextProvider>
    </div>
  );
}

export default App;
