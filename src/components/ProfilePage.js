// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import EditProfile from "./EditProfile";
// import FollowersPopup from "./FollowersPopup";
// import FollowingPopup from "./FollowingPopup";
// import Footer from "./Footer";

// import "./ProfilePage.css";

// function ProfilePage() {
//   const [isLoggedIn] = useState(true);
//   const [username, setUsername] = useState("");
//   const [showEdit, setShowEdit] = useState(false);
//   const [showFollowersPopup, setShowFollowersPopup] = useState(false);
//   const [showFollowingPopup, setShowFollowingPopup] = useState(false);
//   const [UserData, setUserData] = useState({});
//   const [recentActivity, setRecentActivity] = useState([]);

//   useEffect(() => {
//     // Manually create an array with three images
//     const images = [
//       "https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg",
//       "https://i.mydramalist.com/4v6zJ_4f.jpg",
//       "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg",
//     ];

//     setRecentActivity(images);
//   }, []);

//   useEffect(() => {
//     setUsername(localStorage.getItem("username"));
//   }, []);

  
//     fetch("https://moviegeek.azurewebsites.net/userDynamic/getMyDetail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ sort: username }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUserData(data);
//       })
//       .catch((error) => console.log(error));

//   const showEditProfile = () => {
//     setShowEdit(true);
//   };

//   const closeEditProfile = () => {
//     setShowEdit(false);
//   };

//   const handleFollowersClick = () => {
//     setShowFollowersPopup(true);
//   };

//   const handleCloseFollowersPopup = () => {
//     setShowFollowersPopup(false);
//   };

//   const handleFollowingClick = () => {
//     setShowFollowingPopup(true);
//   };

//   const handleCloseFollowingPopup = () => {
//     setShowFollowingPopup(false);
//   };

//   return (
//     <div>
//       <Navbar isLoggedIn={isLoggedIn} username={username} />
//       <div className="profile-page-container">
//         <div className="profile-header">
//           <img
//             src="https://wolfcenter.org/wp-content/uploads/2021/04/preview-full-red-fox-portrait-1080x675.jpg"
//             // src= {UserData.proImage}
//             alt="Profile"
//           />
//           <div className="profile-name">
//             <h1>{username}</h1>
//           </div>
//           <button className="profile-edit-button" onClick={showEditProfile}>
//             Edit Profile
//           </button>
//           {showEdit && <EditProfile onClose={closeEditProfile} />}
//         </div>
//         <div className="profile-body">
//           <div className="profile-info">
//             <div className="films">
//               <p>{UserData.numofFilm}</p>
//               <h3>FILMS</h3>
//             </div>

//             <div className="lists">
//               <p>{UserData.numofList}</p>
//               <h3>LISTS</h3>
//             </div>

//             <div className="following" onClick={handleFollowingClick}>
//               <p>{UserData.numofFollowing}</p>
//               <h3>FOLLOWING</h3>
//             </div>

//             <div className="followers" onClick={handleFollowersClick}>
//               <p>{UserData.numofFollower}</p>
//               <h3>FOLLOWERS</h3>
//             </div>
//           </div>
//           <div className="profile-description">
//             <h2 className="bio-title">BIO</h2>
//             <p>
//               {/* I'm a fox who enjoys watching movies during my vacations! <br />
//               You can see what I like and enjoy here! */}
//               {UserData.bio}
//             </p>
//           </div>
//           {/* <div className="recent-activities">
//             <h2>RECENT ACTIVITY</h2>
//             <div className="photo-grid">
//               <img
//                 src="https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg"
//                 alt="Photo 1"
//               />
//               <img src="https://i.mydramalist.com/4v6zJ_4f.jpg" alt="Photo 2" />
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg"
//                 alt="Photo 3"
//               />
//             </div>
//           </div> */}
//           <div className="recent-activities">
//             <h2>RECENT ACTIVITY</h2>
//             <div className="photo-grid">
//               {recentActivity.map((photo, index) => (
//                 <img src={photo} alt={`Photo ${index + 1}`} key={index} />
//               ))}
//             </div>
//           </div>

//           <div className="recent-review-container">
//             <h3 className="recent-review-text">RECENT REVIEWS</h3>
//             <div className="recent-review-item">
//               <div className="image-container">
//                 <img src="https://i.mydramalist.com/4v6zJ_4f.jpg" alt="" />
//               </div>

//               <div className="recent-review-info">
//                 <h4>THE GLORY</h4>
//                 <p>
//                   The best revenge series ever! Years after surviving horrific
//                   abuse in high school, a woman puts an elaborate revenge scheme
//                   in motion to make the perpetrators pay for their crimes.
//                 </p>
//                 <div className="rating">
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9734;</span>
//                   <span className="star-icon">&#9734;</span>
//                 </div>
//               </div>
//             </div>

//             <div className="recent-review-item">
//               <div className="image-container">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg"
//                   alt=""
//                 />
//               </div>

//               <div className="recent-review-info">
//                 <h4>VINCENZO</h4>
//                 <p>
//                   Vincenzo is trusted by his adoptive father, Paolo. When Fabio
//                   dies, Vincenzo takes it upon himself to execute his last word
//                   and sets fire to the vineyard of a rival mafia head.
//                 </p>
//                 <div className="rating">
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9733;</span>
//                   <span className="star-icon">&#9734;</span>
//                   <span className="star-icon">&#9734;</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showFollowingPopup && (
//         <FollowingPopup onClose={handleCloseFollowingPopup} />
//       )}
//       {showFollowersPopup && (
//         <FollowersPopup onClose={handleCloseFollowersPopup} />
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default ProfilePage;

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import EditProfile from "./EditProfile";
import FollowersPopup from "./FollowersPopup";
import FollowingPopup from "./FollowingPopup";
import Footer from "./Footer";

import "./ProfilePage.css";

function ProfilePage() {
  const [isLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showFollowersPopup, setShowFollowersPopup] = useState(false);
  const [showFollowingPopup, setShowFollowingPopup] = useState(false);
  const [userData, setUserData] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Manually create an array with three images
    const images = [
      "https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg",
      "https://i.mydramalist.com/4v6zJ_4f.jpg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg",
    ];

    setRecentActivity(images);
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  
  fetch("https://moviegeek.azurewebsites.net/userDynamic/getMyDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.log(error));
    
  

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
   
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className="profile-page-container">
        <div className="profile-header">
          <img
            src="https://wolfcenter.org/wp-content/uploads/2021/04/preview-full-red-fox-portrait-1080x675.jpg"
            // src={userData.proImage}
            alt="Profile"
          />
          <div className="profile-name">
            <h1>{username}</h1>
          </div>
          {username === localStorage.getItem("username") ? (
            <button className="profile-edit-button" onClick={showEditProfile}>
              Edit Profile
            </button>
          ) : (
            <button className="profile-edit-button" onClick={handleFollowClick}>{isFollowing ? "Following" : "Follow"}</button>
          )}
          {showEdit && <EditProfile onClose={closeEditProfile} />}
        </div>
        <div className="profile-body">
          <div className="profile-info">
            <div className="films">
              <p>{userData.numofFilm}</p>
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
              {recentActivity.map((photo, index) => (
                <img src={photo} alt={`Photo ${index + 1}`} key={index} />
              ))}
            </div>
          </div>
          <div className="recent-review-container">
            <h3 className="recent-review-text">RECENT REVIEWS</h3>
            <div className="recent-review-item">
              {/* First recent review */}
              <div className="image-container">
                 <img src="https://i.mydramalist.com/4v6zJ_4f.jpg" alt="" />
               </div>

               <div className="recent-review-info">
                 <h4>THE GLORY</h4>
                 <p>
                   The best revenge series ever! Years after surviving horrific
                   abuse in high school, a woman puts an elaborate revenge scheme
                   in motion to make the perpetrators pay for their crimes.
                 </p>
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
              {/* Second recent review */}
              
              
              
            </div>
          </div>
        </div>
      </div>
      {showFollowingPopup && (
        <FollowingPopup onClose={handleCloseFollowingPopup} isOwnProfile={username === localStorage.getItem("username")} />
      )}
      {showFollowersPopup && (
        <FollowersPopup onClose={handleCloseFollowersPopup} showRemoveButton={username === localStorage.getItem("username")} />
      )}
      <Footer />
    </div>
  );
}

export default ProfilePage;
