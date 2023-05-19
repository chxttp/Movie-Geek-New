import React from "react";
import Navbar from "./Navbar";
import ProfileBorder from "./ProfileBorder";
import "./Geeks.css";

function Geeks() {
  var profileName = ["Jonny Doe", "Kristen", "Foxxxxx", "Christopher"];
  var filmWacted = ["500", "1200", "5", "5000"];
  var filmReviewed = ["200", "2300", "23", "20300"];

  return (
    <div className="Geek">
      <Navbar />
      <div className="top-container">
        <h1>GEEKS</h1>
        <p>Make friends, find popular movie geeks in this community!</p>
      </div>

      <div className="popular-this-week-container">
        <div className="popular-this-week-list">
          <div className="popular-this-week-title">
            POPULAR THIS WEEK
            <hr></hr>
          </div>
        </div>

        <div className="popular-profile-container">
          <div className="popular-profile">
            <ProfileBorder src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"></ProfileBorder>
            <div>
              <h2>{profileName[0]}</h2>
              <h3>
                {filmWacted[0]} films {filmReviewed[0]} reviews
              </h3>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src=""></ProfileBorder>
            <div>
              <h2>{profileName[1]}</h2>
              <h3>
                {filmWacted[1]} films {filmReviewed[1]} reviews
              </h3>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src=""></ProfileBorder>
            <div>
              <h2>{profileName[2]}</h2>
              <h3>
                {filmWacted[2]} films {filmReviewed[2]} reviews
              </h3>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src=""></ProfileBorder>
            <div>
              <h2>{profileName[3]}</h2>
              <h3>
                {filmWacted[3]} films {filmReviewed[3]} reviews
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Geeks;
