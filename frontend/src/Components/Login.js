//Login

import React, { useState } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const host = "http://localhost:5000";
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      history("/main");
    fetch("http://localhost:5000/api/auth/login");
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem("token", json.auhToken);
    } else {
      setMsg("Please login Using Correct details");
    }
  };
  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="Login">
      <div className="page">
        <form className="card" onSubmit={handleSubmit}>
          <div className="head">Login</div>
          <div className="usernamepart">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="username"
              onChange={onchange}
              value={credential.email}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <br />
          <div className="passwordpart">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="password"
              onChange={onchange}
              value={credential.password}
              id="password"
              name="password"
            />
          </div>
          <div className="msg" style={{color:'red',textAlign:'center'}}>{msg}</div>
          <button type="submit" className="btn">
            LOGIN
          </button>
          <br />
          <div className="text">
            <p className="elss_text">Or sign up using</p>
          </div>
          <div className="else">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
