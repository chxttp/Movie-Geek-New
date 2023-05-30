import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

function EditProfile({ onClose }) {
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState(true);
  const navigate = useNavigate();

  const handleBioChange = (event) => {
    setBio(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const saveProfileInformation = async () => {
      try {
        const response = await fetch(
          "https://moviegeek.azurewebsites.net/userDynamic/editBio",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, bio: bio }),
          }
        );

        if (response.ok) {
          // Assuming the API call is successful, navigate to the profile page
          window.location.reload(); // Refresh the page
        } else {
          // Handle the case where the API call was not successful
          console.error(
            "Error saving profile information:",
            response.statusText
          );
        }
      } catch (error) {
        // Handle any error that occurred during the API call
        console.error("Error saving profile information:", error);
      }
    };

    saveProfileInformation();
  };

  return (
    <div className="edit-profile-overlay">
      <div className="edit-profile-widget">
        <form onSubmit={handleSubmit}>
          <div className="edit-profile-header">
            <h1>UPDATE BIO</h1>
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              rows="13"
              id="bio"
              name="bio"
              value={bio}
              onChange={handleBioChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit" disabled={!bio}>
              Save
            </button>
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
