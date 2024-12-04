import React, {useState} from "react";
import { LoginContext } from "./LoginContext";

const LoginContextProvider = ({ children }) => {

  const [user, setUser] = useState("");
  const [showUser, setShowUser] = useState(false);

  return <LoginContext.Provider value={{user, setUser, showUser, setShowUser}}>
    {children}
  </LoginContext.Provider>;
};

export default LoginContextProvider;
