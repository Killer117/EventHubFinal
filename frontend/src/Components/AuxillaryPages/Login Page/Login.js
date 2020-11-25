import React, { useEffect, useState } from "react";
import "./login.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: ""
  });
  const [loggedIN, setLoggedIn] = useState({found:false});

  useEffect(() => {
    document.title = "Login ";
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      };
    });
  }

  function login(event) {
    axios.post("http://localhost:5000/api/users/login", info)
      .then(function (res) {
        setLoggedIn(res.data);
      });
    setInfo({
      email: "",
      password: ""
    });
    event.preventDefault();
  }

  if (loggedIN.found===true) {

    return <div>
      <h1>Successfully Logged in</h1>
      <Link to="/">Move to home page</Link>
    </div>
  }
  else{
    if(loggedIN.found==="incorrect"){
      alert("Incorrect email or password");
      setLoggedIn(prevLogin=>{
        return {
          found:false
        };
      });
    }
    return (

      <div className="login_header">
        <Navbar />
        <div className="bgImage">
          <div className="wrapper">
            <div className="title">EventHub</div>
            <form onSubmit={login}>
              <div className="field">
                <input onChange={handleChange} type="text" required name="email" />
                <label>Email Address</label>
              </div>
              <div className="field">
                <input onChange={handleChange} name="password" type="password" required />
                <label>Password</label>
              </div>
              <div className="content">
                <div className="checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
                </div>
                <div className="pass-link">
                  <Link to="/">Forgot password?</Link>
                </div>
              </div>
              <div className="field">
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                <Link to="/registeration">Create Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
