import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import EditProfile from "./EditProfile";
import FollowersPopup from "./FollowersPopup";
import FollowingPopup from "./FollowingPopup";
import Footer from "./Footer";
import profile from "../Images/pic-icon.png";

import "./ProfilePage.css";

function ProfilePage() {
  const [isLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showFollowersPopup, setShowFollowersPopup] = useState(false);
  const [showFollowingPopup, setShowFollowingPopup] = useState(false);
  const [userData, setUserData] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [recentReview, setRecentReview] = useState([]);
  const [recentReviewPoster, setRecentReviewPoster] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const usernameFromLink = searchParams.get('username');
  const usernameFromLocalStorage = localStorage.getItem('username');
  const isOwnProfile = usernameFromLink === usernameFromLocalStorage;
  const [followButtonText, setFollowButtonText] = useState(isFollowing ? "following" : "follow");



  // useEffect(() => {
  //   // Manually create an array with three images
  //   const images = [
  //     "https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg",
  //     "https://i.mydramalist.com/4v6zJ_4f.jpg",
  //     "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg",
  //   ];

  //   setRecentActivity(images);
  // }, []);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    fetch("https://moviegeek.azurewebsites.net/userDynamic/getMyDetail", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort: usernameFromLink }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setRecentActivity(data.recentPosters);
        setRecentReview(data.recentReview)
        setRecentReviewPoster(data.reviewPosters)
      })
      .catch((error) => console.log(error));

      fetch("https://moviegeek.azurewebsites.net/userDynamic/getFollowStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        follower: usernameFromLocalStorage,
        follow_ing: usernameFromLink,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        const followStatus = data === "1";
        const buttonText = followStatus ? "following" : "follow";
        setIsFollowing(followStatus);
        setFollowButtonText(buttonText);
      })
      .catch((error) => console.log(error));
  }, [usernameFromLink, usernameFromLocalStorage, userData]);
 

  
  


    
  

  const showEditProfile = () => {
    setShowEdit(true);
  };

  const closeEditProfile = () => {
    setShowEdit(false);
  };

  const handleFollowersClick = () => {
    setShowFollowersPopup(true);
  };

  const handleCloseFollowersPopup = () => {
    setShowFollowersPopup(false);
  };

  const handleFollowingClick = () => {
    setShowFollowingPopup(true);
  };

  const handleCloseFollowingPopup = () => {
    setShowFollowingPopup(false);
  };
  const handleFollowClick = () => {
    setIsFollowing((prevState) => !prevState);
    const followStatus = isFollowing ? "0" : "1";
    const updatedStatus = followStatus === "1" ? "following" : "follow";
    setFollowButtonText(updatedStatus);
    setIsFollowing(followStatus === "1");
  
    
    
    const apiEndpoint = isFollowing ? "https://moviegeek.azurewebsites.net//userDynamic/unfollow" : "https://moviegeek.azurewebsites.net//userDynamic/follow";
  
    
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ follower: usernameFromLocalStorage, follow_ing: usernameFromLink }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
      })
      .catch((error) => console.log(error));
  };
  
  

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className="profile-page-container">
        <div className="profile-header">
          <img
            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
            // src={userData.proImage}
            alt="Profile"
          />
          <div className="profile-name">
            <h1>{usernameFromLink}</h1>
          </div>
          {isOwnProfile ? (
            <button className="profile-edit-button" onClick={showEditProfile}>
              Edit Bio
            </button>
          ) : (
            // <button className="profile-edit-button" onClick={handleFollowClick}>{isFollowing ? "Following" : "Follow"}</button>
            <button className="profile-edit-button" onClick={handleFollowClick}>{followButtonText}</button>
          )}
          {showEdit && <EditProfile onClose={closeEditProfile} />}
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <div className="films">
              <p>{userData.movie_amount}</p>
              <h3>FILMS</h3>
            </div>

            <div className="lists">
              <p>{userData.numofList}</p>
              <h3>LISTS</h3>
            </div>

            <div className="following" onClick={handleFollowingClick}>
              <p>{userData.numofFollowing}</p>
              <h3>FOLLOWING</h3>
            </div>

            <div className="followers" onClick={handleFollowersClick}>
              <p>{userData.numofFollower}</p>
              <h3>FOLLOWERS</h3>
            </div>
          </div>
          <div className="profile-description">
            <h2 className="bio-title">BIO</h2>
            <p>{userData.bio}</p>
          </div>
          <div className="recent-activities">
            <h2>RECENT ACTIVITY</h2>
            <div className="photo-grid">
            {recentActivity&& recentActivity.length >0 ? (
            recentActivity.map((photo, index) => (
              <img src={photo} alt={`Photo ${index + 1}`} key={index} />
            ))
          ) : (
            <p>No recent activity yet.</p>
          )}
            </div>
          </div>
          <div className="recent-review-container">
            <h3 className="recent-review-text">RECENT REVIEWS</h3>
            {recentReview&& recentReview.length > 0 ? (
          recentReview.map((review, index) => (
            <div className="recent-review-item" key={index}>
              <div className="image-container">
                <img src={recentReviewPoster[index]} alt="" />
              </div>
              <div className="recent-review-info">
                <p>{review}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No recent reviews yet.</p>
        )}
            
          </div>
        </div>
      </div>
      {showFollowingPopup && (
        <FollowingPopup onClose={handleCloseFollowingPopup} isOwnProfile={isOwnProfile} username={usernameFromLink} />
      )}
      {showFollowersPopup && (
        <FollowersPopup onClose={handleCloseFollowersPopup} showRemoveButton={isOwnProfile} username={usernameFromLink}/>
      )}
      <Footer />
    </div>
  );
}

export default ProfilePage;
