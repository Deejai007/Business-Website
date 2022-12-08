import React from "react";
import Dialogfp from "./Dialogfp";
import { useState } from "react";
import { Button, TextField, Dialog } from "@mui/material";
import "./Login.css";

import { useNavigate, useLocation } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // document.getElementById("leftnavbar").classList.remove("hide");
    navigate("/home", { state: { username: obj.userName, loggedin: true } });
    console.log(obj);
  };

  const [obj, setObj] = useState({
    userName: "",
    password: "",
  });
  const handleUserChange = (e) => {
    setObj({ ...obj, userName: e.target.value });
  };
  const handlePassChange = (e) => {
    setObj({ ...obj, password: e.target.value });
  };
  return (
    <div className="LoginComp">
      <header className="login-header">
        <h2>Login</h2>
        <h5>Enter your Details</h5>
      </header>
      <div className="formm">
        <TextField
          id="outlined-basic"
          label="Username"
          className="usernamee"
          variant="outlined"
          onChange={handleUserChange}
        />

        <TextField
          id="outlined-password-input"
          className="passwordd"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handlePassChange}
        />
        <Dialogfp></Dialogfp>
        <Button
          className="submitt"
          variant="contained"
          onClick={navigateToHome}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
/*
 <div className="LoginComp">
<header class="login-header">
  <h2>Login</h2>
  <h3>Enter your personal info</h3>
</header>
<div>
  <TextField
        id="outlined-basic"
        label="Username"
        className="usernamee"
        variant="outlined"
        onChange={handleUserChange}
  />
    <TextField
        id="outlined-password-input"
        className="passwordd"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={handlePassChange}
    />
  <Dialogfp></Dialogfp>
  <Button className="submitt" variant="contained" onClick={navigateToHome}>
        Submit
      </Button>
</div>
</div>
*/
