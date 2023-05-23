import React, { useState, useRef } from "react";
import "./EditProfile.css";

function EditProfile({ onClose }) {
  const [username, setUsername] = useState("nonnynon");
  const [bio, setBio] = useState("");
  const fileInputRef = useRef(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    // Perform the file upload logic here
    // For example, you can upload the file to a server using FormData or an API call
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the profile update logic here
    // You can use the username and bio state values to update the user's profile information
    // For example, you can make an API call to update the user's profile data
    // Once the update is successful, you can close the EditProfileWidget or show a success message
  };
  const handleProfilePictureClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="edit-profile-overlay">
      <div className="edit-profile-widget">
        <form onSubmit={handleSubmit}>
          <div className="edit-profile-header">
            <h1>UPDATE PROFILE</h1>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          {/* <div className="form-group">
              <label htmlFor="description">Description:</label>
              <select>
                <option value="">Artist</option>
                <option value="">Reviewer</option>
                <option value="">Actor</option>
                <option value="">Actress</option>
                <option value="">Influencer</option>
              </select>
            </div> */}

          <div className="form-group">
            <label htmlFor="profilePicture">Edit Profile Picture:</label>
            <button onClick={handleProfilePictureUpload}>
              Edit Picture
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
            </button>
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
