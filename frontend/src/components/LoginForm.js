import React, { Component } from "react";
import "./LoginForm.css";
import ToggleButton from "./ToggleButton";

const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Create an Account</h1>
            <ToggleButton
              title="Register as a:"
              leftLabel="Student"
              rightLabel="Company"
            />
            <br></br>
            <label>E-mail</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>First Name & Last Name</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="Sign Up" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
