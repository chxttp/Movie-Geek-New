import { NavLink } from "react-router-dom";
import logo from "../Images/moviegeek.png";
import profile from "../Images/pic-icon.png";
import "./Navbar.css";
import TextField from "@mui/material/TextField";
import UserData from "../Data/UserData";
import { useState, useContext, useEffect } from "react";

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;

  const { setUsername: setSharedUsername } = useContext(UserData);

  function handleLogout() {
    localStorage.removeItem("username"); // Clear the username from localStorage
    setSharedUsername(""); // Clear the shared username state
  }

  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-left">
          <img src={logo} />
        </li>

        <li className="navbar-left">
          <NavLink to="/home" className="active hover">
            MovieGeek
          </NavLink>
        </li>

        <li className="navbar-right">Genres</li>

        <li className="navbar-right">Films</li>

        <li className="navbar-right">Lists</li>

        <li className="navbar-right">
          <NavLink to="/geek" className="active hover">
            Geeks
          </NavLink>
        </li>
        <li className="navbar-right">
          <input placeholder="search" />
        </li>

        {isLoggedIn ? (
          // authenticated
          <>
            <li className="navbar-right">
              <NavLink to="/profile" className="active hover">
                <img src={profile} alt="profile" />
              </NavLink>
              <NavLink to="/profile" className="active hover">
                {props.username}
              </NavLink>
            </li>

            <li className="navbar-right">
              <NavLink
                to="/login"
                className="active hover"
                onClick={handleLogout}
              >
                LogOut
              </NavLink>
            </li>
          </>
        ) : (
          // not authenticated
          <>
            <li className="navbar-right">
              <NavLink to="/login" className="active hover">
                LogIn
              </NavLink>
            </li>

            <li className="navbar-right">
              <NavLink to="/signup" className="active hover">
                SignUp
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
