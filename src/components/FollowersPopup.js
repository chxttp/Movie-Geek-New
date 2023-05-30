import React, { useState, useEffect } from "react";
import ProfileBorder_s from "./ProfileBorder_s";
import "./FollowersPopup.css";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';
function FollowersPopup({ onClose , showRemoveButton, username}) {
  const [followers, setFollowers] = useState([
    // { id: 1, username: "user1" },
    // { id: 2, username: "user2" },
    // { id: 3, username: "user3" },
    // // Add more followers as needed
  ]);
  const navigate = useNavigate();
  
  fetch("https://moviegeek.azurewebsites.net/userDynamic/getMyDetail", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data.follower.split(", "));
        
      })
      .catch((error) => console.log(error));

      const handleProfileClick = (username) => {
   
        navigate(`/profile?username=${username}`)
        onClose();
      };

  

  return (
    <div className="followers-popup-overlay">
      <div className="followers-popup-widget">
        <div className="followers-header">
          <h1>Followers</h1>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="followers-list">
          {followers.map((follower) => (
            <div className="follower-item" key={follower.id}>
              <ProfileBorder_s src={"https://img.freepik.com/free-icon/user_318-159711.jpg"}/>
              <div className="follower-details">
                <span className="follower-username" onClick={() => handleProfileClick(follower)}>{follower}</span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowersPopup;
