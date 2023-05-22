import React from 'react';
import PropTypes from 'prop-types';
import './ProfileBorder_s.css';

const ProfileBorder = ({ size, src }) => {
  const borderStyle = {
    width: size,
    height: size
  };

  return (
    <div className="profile-border-s" style={borderStyle}>
      <div className="profile-container-s">
        <img src={src} alt="Profile Picture-s" />
      </div>
    </div>
  );
};

ProfileBorder.propTypes = {
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default ProfileBorder;
