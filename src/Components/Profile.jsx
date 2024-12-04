import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Profile() {
  const { user } = useContext(LoginContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">{user.userName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
