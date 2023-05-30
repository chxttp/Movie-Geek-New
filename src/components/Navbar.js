import { NavLink } from "react-router-dom";
import logo from "../Images/moviegeek.png";
import profile from "../Images/pic-icon.png";
import "./Navbar.css";
import UserData from "../Data/UserData";
import { useState, useContext, useEffect } from "react";

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { setUsername: setSharedUsername } = useContext(UserData);

  function handleLogout() {
    localStorage.removeItem("username"); // Clear the username from localStorage
    setSharedUsername(""); // Clear the shared username state
    setDropdownOpen(false); // Close the dropdown menu
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar-dropdown")) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-left">
          <NavLink to="/home" className="active hover">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>

        <li className="navbar-left">MovieGeek</li>

        <li className="navbar-right">
          <NavLink to="/film" className="active hover">
            Films
          </NavLink>
        </li>

        <li className="navbar-right">
          <NavLink to="/lists" className="active hover">
            Lists
          </NavLink>
        </li>

        <li className="navbar-right">
          <NavLink to="/geek" className="active hover">
            Geeks
          </NavLink>
        </li>

        {isLoggedIn ? (
          // authenticated
          <>
            <li className="navbar-right">
              <div className="navbar-dropdown">
                <div className="navbar-username" onClick={toggleDropdown}>
                  <img src={profile} alt="profile" />
                  {props.username}
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <div>
                      <NavLink to={`/profile?username=${props.username}`}  className="active hover">
                        Profile
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to="/login"
                        className="active hover"
                        onClick={handleLogout}
                      >
                        Log Out
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </>
        ) : (
          // not authenticated
          <>
            <li className="navbar-right">
              <NavLink to="/login" className="active hover">
                Log In
              </NavLink>
            </li>

            <li className="navbar-right">
              <NavLink to="/signup" className="active hover">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
