import React, { useState, useRef } from "react";
import "./EditProfile.css";

function EditProfile({ onClose }) {
  const [username, setUsername] = useState("nonnynon");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleProfilePictureUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the profile update logic here
    // You can use the username and bio state values to update the user's profile information
    // For example, you can make an API call to update the user's profile data
    // Once the update is successful, you can close the EditProfileWidget or show a success message
  };

  return (
    <div className="edit-profile-overlay">
      <div className="edit-profile-widget">
        <form onSubmit={handleSubmit}>
          <div className="edit-profile-header">
            <h1>UPDATE PROFILE</h1>
          </div>
          <div className="form-group">
            <div className="pfp-container">
              <div className="profile-picture-label">
                <label htmlFor="profilePicture">Update Profile Picture</label>
                <button onClick={handleProfilePictureUpload}>
                  Choose a File
                </button>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
              </div>
              <div className="profile-picture-preview">
                {profilePicture && (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-image"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={handleBioChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
