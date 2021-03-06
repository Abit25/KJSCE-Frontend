import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Context } from "../context/authContext";
import axios from "axios";
import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";
import "./SignupPage.css";

const SignUp = () => {
  let history = useHistory();
  let { addUser, state } = useContext(Context);
  useEffect(() => {
    const check = async () => {
      console.log("Checking");
      const response = await axios.get("http://localhost:8000/checkLogin/", {
        withCredentials: true
      });
      console.log(response.data);
      if (response.data.user) {
        addUser(response.data.user);
        history.push("/test");
      }
    };
    check();
  }, []);

  return (
    <div className="container2">
      <div className="img">
        <img src="https://images.unsplash.com/photo-1536318015590-7bf4095a08a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2536&q=80"></img>
      </div>
      <div className="outline">
        <h1 style={{ marginTop: "10%" }}>Some Heading</h1>
        <Input
          className="inp"
          placeholder="First Name"
          id="input-with-icon-adornment1"
        />
        <Input
          className="inp"
          placeholder="Last Name"
          id="input-with-icon-adornment2"
        />
        <Input
          className="inp"
          placeholder="Username"
          id="input-with-icon-adornment3"
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
        <Input
          className="inp"
          type="password"
          placeholder="Password"
          id="input-with-icon-adornment4"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          }
        />
        <a href="http://localhost:8080/auth/google" className="button">
          Create an Account
        </a>
        <a
          href="http://localhost:8000/login/google-oauth2"
          style={{ width: "60%", textDecoration: "none" }}
        >
          <GoogleLoginButton />
        </a>
        <a
          href="http://localhost:8000/login/facebook"
          style={{ width: "60%", textDecoration: "none", marginBottom: "4%" }}
        >
          <FacebookLoginButton />
        </a>
      </div>
    </div>
  );
};

export default SignUp;
