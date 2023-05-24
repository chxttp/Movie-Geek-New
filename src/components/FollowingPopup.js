import React, { useState } from "react";
import ProfileBorder_s from "./ProfileBorder_s";
import "./FollowingPopup.css";

function FollowingPopup({ onClose }) {
  const [following, setFollowing] = useState([
    { id: 1, username: "user1", isFollowing: true },
    { id: 2, username: "user2", isFollowing: true },
    { id: 3, username: "user3", isFollowing: true },
    // Add more following as needed
  ]);

  const toggleFollowStatus = (userId) => {
    setFollowing((prevFollowing) =>
      prevFollowing.map((follow) =>
        follow.id === userId ? { ...follow, isFollowing: !follow.isFollowing } : follow
      )
    );
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
          {following.map((follow) => (
            <div className="following-item" key={follow.id}>
              <ProfileBorder_s />
              <span>{follow.username}</span>
              <button
                className={`follow-button ${follow.isFollowing ? "following" : ""}`}
                onClick={() => toggleFollowStatus(follow.id)}
              >
                {follow.isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FollowingPopup;
