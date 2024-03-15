//Sign Up
import React, { useState } from "react";
import {useNavigate }from 'react-router-dom'

const SignUp = () => {
  const [credential, setCredential] = useState({ name:"",email: "", password: "" ,cpassword:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/createUser");
    const {name,email,password}=credential;
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
    } else {
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className='Login'>
      <div className="page">
        <form onSubmit={handleSubmit} className="card_2">
            <div className="head">
                Sign Up
            </div>
            <div className="usernamepart">
            <label htmlFor="name" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="username"
            onChange={onChange}
            value={credential.name}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            minLength={5}
            required
          /></div>
            <div className="emailpart">
            <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="email"
            onChange={onChange}
            value={credential.email}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          /></div>
            <div className="passwordpart">
            <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="password"
            onChange={onChange}
            value={credential.password}
            id="password"
            name="password"
            minLength={5}
            required
          /> </div>
            <div className="confirmpasswordpart">
                <label htmlFor="cpassword" className="form-label">
           Confirm Password
          </label>
          <input
            type="password"
            className="confirm_password"
            onChange={onChange}
            value={credential.password}
            id="cpassword"
            name="cpassword"
            minLength={5}
            required
          /> </div>
            <button type="submit" className="btn">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp