import React from 'react';
import PropTypes from 'prop-types';
import './ProfileBorder.css';

const ProfileBorder = ({ size, src }) => {
  const borderStyle = {
    width: size,
    height: size
  };

  return (
    <div className="profile-border" style={borderStyle}>
      <div className="profile-container">
        <img src={src} alt="Profile Picture" />
      </div>
    </div>
  );
};

ProfileBorder.propTypes = {
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default ProfileBorder;
