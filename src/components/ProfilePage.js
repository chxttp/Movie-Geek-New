import React from "react";
import Navbar from "./Navbar";
import profile from "../Images/pic-icon.png";

import "./ProfilePage.css";
import Footer from "./Footer";
import { useState , useContext, useEffect  } from 'react';
import UserData from '../Data/UserData';
import EditProfile from "./EditProfile";



//
function ProfilePage() {
    const [isLoggedIn] = useState(true);
    
    const [username, setUsername] = useState('');
    const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, []);
  // Access the shared username
  const showEditProfile = () => {
    setShowEdit(true)
  }
  const closeEditProfile = () => {
    setShowEdit(false);
  };

  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username}></Navbar>
      <div className="profile-page-container">
        <div className="profile-header">
          <img
            src="https://wolfcenter.org/wp-content/uploads/2021/04/preview-full-red-fox-portrait-1080x675.jpg"
            alt="Profile"
            
          />
          <div className="profile-name">
            <h1>{username}</h1>
          </div>
          <button className="profile-edit-button" onClick={showEditProfile}>Edit Profile</button>
          {showEdit && (<EditProfile onClose = {closeEditProfile}/>)}
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <div className="films">
            
              <p>5</p>
              <h3>FILMS </h3>
            </div>

            <div className="lists">
              <p>1</p>

              <h3>LISTS </h3>
            </div>

            <div className="following">
              <p>10</p>

              <h3>FOLLOWING </h3>
            </div>

            <div className="followers">
              <p>250</p>
              <h3>FOLLOWERS </h3>
            </div>
          </div>
          <div className="profile-description">
            <h2 className="bio-title">BIO</h2>
            {/* <h2 className='bio-edit'>EDIT</h2> */}

            <p>I'm a fox who enjoy watching movie during my vacations! <br/> You can see what i like and enjoy here!</p>
          </div>
          <div className="recent-activities">
            <h2>RECENT ACTIVITY</h2>
            <div className="photo-grid">
              <img
                src="https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg"
                alt="Photo 1"
              />
              <img src="https://i.mydramalist.com/4v6zJ_4f.jpg" alt="Photo 2" />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg"
                alt="Photo 3"
              />
            </div>
            
          </div>

          <div className="recent-review-container">
            <h3 className="recent-review-text">RECENT REVIEWS</h3>
            <div className="recent-review-item">
              <div className="image-container">
              <img src="https://i.mydramalist.com/4v6zJ_4f.jpg" alt="" />

              </div>
                
                <div className="recent-review-info">
                    <h4>THE GLORY</h4>
                    <p>The best revenge series ever, Years after surviving horrific abuse in high school, a woman puts an elaborate revenge scheme in motion to make the perpetrators pay for their crimes.</p>
                    <div className="rating">
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9734;</span>
                  <span className="star-icon">&#9734;</span>
                    </div>
                </div>
            </div>

            <div className="recent-review-item">
              <div className="image-container">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg" alt="" />

              </div>
                
                <div className="recent-review-info">
                    <h4>VINCENZO</h4>
                    <p>Vincenzo is trusted by his adoptive father, Paolo. When Fabio dies, Vincenzo takes it upon himself to execute his last word and sets fire to the vineyard of a rival mafia head.</p>
                    <div className="rating">
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9733;</span>
                  <span className="star-icon">&#9734;</span>
                  <span className="star-icon">&#9734;</span>
              
                    </div>
                </div>

            </div>
            
          </div>

          
          

          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfilePage;
