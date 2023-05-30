import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate, Redirect, Navigate } from "react-router-dom";
import "./Login.css";
import logo from "../Images/moviegeek.png";
import Navbar from "./Navbar";
import UserData from "../Data/UserData";
import ProfilePage from "./ProfilePage";

function Login() {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState("");

  const { setUsername: setSharedUsername } = useContext(UserData);

  function handleSubmit(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const loginData = {
      username: username,
      password: password,
    };

    fetch("https://moviegeek.azurewebsites.net/user/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          // If response is successful (status code 200-299)
          return response.json(); // Convert response to JSON
        } else {
          throw new Error("Login unsuccessful"); // Throw an error for unsuccessful response
        }
      })
      .then((data) => {
        // Handle the response data
        if (data.username == loginData.username) {
          // Check if the response data username and password match the entered values
          console.log("api", data.username);
          console.log("com", loginData.username);
          setAuthenticated(true); // Set authenticated state to true
          setUsername(loginData.username);
          setSharedUsername(loginData.username);

          // Perform any additional actions, such as storing authentication token, redirecting, etc.
        } else {
          throw new Error("Login unsuccessful"); // Throw an error if login was not successful
        }
      })
      .catch((error) => {
        // Handle any errors that may occur during the API request
        console.error('Error during login:', error);
        alert("Username or password is wrong")
      });
  }

  if (authenticated) {
    localStorage.setItem("username", username);
    navigate("/home");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div>
          <NavLink to="/home">
            <img src={logo} />
          </NavLink>
        </div>
        <h1 className="login-heading">Welcome to MovieGeek</h1>
        <form onSubmit={handleSubmit}>
          <label className="login-label">
            <div className="username-text">Username:</div>
            <input
              className="login-input"
              id="username"
              type="text"
              style={{ width: '100%' }}
            />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Password:</div>
            <input className="login-input" id="password" type="password" />
          </label>
          <NavLink
            to="/Signup"
            style={{ color: "white", textDecoration: "none" }}
          >
            Don't have an account?
          </NavLink>
          <br />
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

