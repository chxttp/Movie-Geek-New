import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import ProfileBorder from './ProfileBorder';
import RectangleBorder from './RectangleBorder';
import Footer from './Footer';
import './Geeks.css';

function Geeks() {
  const profileData = [
    {
      profileName: 'Jonny Doe',
      filmWacted: '500',
      filmReviewed: '200',
      profileimg:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      listimg:
        'https://m.media-amazon.com/images/I/717la8Z17sL._AC_UF894,1000_QL80_.jpg',
    },
    // Add more profile objects as needed
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
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

        setUserdata(limitedData)

      })

      .catch((error) => console.log(error));
  }, []);



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
              <ProfileBorder src={profile.proImage}></ProfileBorder>
              <div>
                <h2>{profile.username}</h2>
                <h3>
                  {profile.numofFilm} films {profile.numofReview} reviews
                </h3>
              </div>
              <div className="recently-review-container">
                <RectangleBorder src={profile.actImage}></RectangleBorder>
                {/* Add more RectangleBorder components if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-geek">
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}

export default Geeks;
