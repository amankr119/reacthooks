import React, { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(LoginContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({userName, password})
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className=" w-50">
            <input
              className="form-control bg-info"
              type="text"
              placeholder="Enter User name..."
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="form-control bg-info"
              type="text"
              placeholder="Enter password..."
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSubmit}>showProfile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
