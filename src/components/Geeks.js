import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import ProfileBorder from "./ProfileBorder";
import RectangleBorder from "./RectangleBorder";
import Footer from "./Footer";
import "./Geeks.css";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';

function Geeks() {
  
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    if (username !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [username]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/userDynamic/getUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        const limitedData = data.slice(0,3);

        setUserdata(limitedData);
      })

      .catch((error) => console.log(error));
  }, []);

  const handleProfileClick = (username) => {
   
    navigate(`/profile?username=${username}`)
  };

  return (
    <div className="Geek">
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className="top-container">
        <h1>GEEKS</h1>
        <p>Make friends, find popular movie geeks in this community!</p>
      </div>

      <div className="popular-this-week-container">
        <div className="popular-this-week-list">
          <div className="popular-this-week-title">
            POPULAR THIS WEEK
            <hr />
          </div>
        </div>

        <div className="popular-profile-container">
          {userdata.map((profile, index) => (
            <div className="popular-profile" key={index}>
              {/* <ProfileBorder src={profile.proImage}></ProfileBorder> */}
              <ProfileBorder src="https://img.freepik.com/free-icon/user_318-159711.jpg" />

              
              <div>
                <h2 onClick={() => handleProfileClick(profile.username)} className="geeks-username">{profile.username}</h2>
                <h3>
                  {profile.movie_amount} films {profile.review_amount} reviews
                </h3>
              </div>
              <div className="recently-review-container">
              {profile.recentPosters.slice(0, 3).map((poster, posterIndex) => (
                <RectangleBorder src={poster} key={posterIndex}></RectangleBorder>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-geek">{/* <Footer></Footer> */}</div>
    </div>
  );
}

export default Geeks;
