import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';
import './Login.css';
import logo from '../Images/moviegeek.png';

function Signup() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    let email = document.getElementById("email").value
    event.preventDefault();
    
    

    const newUser = {
      username: username,
      password: password,
      email: email
    };

    // Fetch request to API endpoint for user registration
    fetch('https://moviegeek.azurewebsites.net/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => {
      if (response.ok) {
        // If response is successful (status code 200-299)
        return response.json(); // Convert response to JSON
      } else {
        throw new Error('Registration unsuccessful'); // Throw an error for unsuccessful response
      }
    })
    .then(data => {
      // Handle the response data
      console.log('Registration successful:', data);
      setAuthenticated(true); // Set authenticated state to true
      // Perform any additional actions, such as storing authentication token, redirecting, etc.
    })
    .catch(error => {
      // Handle any errors that may occur during the API request
      console.error('Error during registration:', error);
      
    });
  }

  if (authenticated) {
    // history.push("/home"); 
    localStorage.setItem('username', username);
    navigate('/home')
    
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div>
        <NavLink to="/home">
          <img src={logo}/>
          </NavLink>
        </div>
        <h1 className="login-heading">Welcome to MovieGeek</h1>
        <form onSubmit={handleSubmit}>
        <label className="login-label">
            <div className="email-text">Email:</div>
            <input className="login-input" type="email" id='email' />
          </label>
          <br />
          <label className="login-label">
            <div className="username-text">Username:</div>
            <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Create Password:</div>
            <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label className="login-label">
            <div className="password-text">Confirm Password:</div>
            <input className="login-input" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className="login-button" type="submit">Create an account</button>
          <NavLink to="/login" style={{color: 'white', textDecoration: 'none'}}>
            Already have an account? 
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signup;