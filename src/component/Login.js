import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

function Login() {
const [userCred, setUserCred] = useState({
    email:"",
    password:"",
});

const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    let userData = await axios.post("http://localhost:4000/login",userCred)

    Cookies.set("token", userData.data.token);
    Cookies.set('userId', userData.data.userId);
    navigate(`/profile/${userData.data.userId}`)
  };


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={userCred.email}
            onChange={(e)=>{setUserCred({...userCred,email:e.target.value})}}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={userCred.password}
            onChange={(e)=>{setUserCred({...userCred,password:e.target.value})}}
          />
        </div>

        <div className="login-component-button">
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
