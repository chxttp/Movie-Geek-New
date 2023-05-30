import React, { useEffect, useState } from "react";
import ProfileBorder_s from "./ProfileBorder_s";
import "./FollowingPopup.css";
import { useNavigate, Redirect, Navigate } from 'react-router-dom';

function FollowingPopup({ onClose, isOwnProfile, username }) {
  const [following, setFollowing] = useState([

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
        setFollowing(data.following.split(", "));
        
      })
      
      .catch((error) => console.log(error));

      const handleProfileClick = (username) => {
   
        navigate(`/profile?username=${username}`)
        onClose();
      };

  

  return (
    <div className="following-popup-overlay">
      <div className="following-popup-widget">
        <div className="following-header">
          <h1>Following</h1>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="following-list">
          {following !==  null? (
            following.map((follow) => (
              <div className="following-item" key={follow.id}>
                <ProfileBorder_s src={"https://img.freepik.com/free-icon/user_318-159711.jpg"} />
                <span onClick={() => handleProfileClick(follow)} className="name-click">
                  {follow}
                </span>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FollowingPopup;
