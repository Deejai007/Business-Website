import React from "react";
import Dialogfp from "./Dialogfp";
import { useState } from "react";
import { Button, TextField, Dialog } from "@mui/material";
import "./Login.css";

import { useNavigate, useLocation } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home", { state: { username: obj.userName } });
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
      {/* <span className="forgott" onClick={openDialog}>
        Forgot password?
      </span> */}
      <Dialogfp></Dialogfp>
      <Button className="submitt" variant="contained" onClick={navigateToHome}>
        Submit
      </Button>
    </div>
  );
}
export default Login;
