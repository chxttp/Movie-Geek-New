import React, { useState, useEffect } from "react";
import ProfileBorder_s from "./ProfileBorder_s";
import "./FollowersPopup.css";

function FollowersPopup({ onClose , showRemoveButton}) {
  const [followers, setFollowers] = useState([
    // { id: 1, username: "user1" },
    // { id: 2, username: "user2" },
    // { id: 3, username: "user3" },
    // // Add more followers as needed
  ]);

  const removeFollower = (followerId) => {
    setFollowers((prevFollowers) =>
      prevFollowers.filter((follower) => follower.id !== followerId)
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setFollowers(data);
    })

    .catch((error) => console.log(error));
  }, [])

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
              <ProfileBorder_s src={follower.profileimg}/>
              <div className="follower-details">
                <span className="follower-username">{follower.username}</span>
                {showRemoveButton && (
                  <button
                    className="remove-follower-button"
                    onClick={() => removeFollower(follower.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowersPopup;
