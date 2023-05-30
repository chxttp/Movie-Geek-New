import React from 'react';
import PropTypes from 'prop-types';
import './ProfileBorder_s.css';

const ProfileBorder = ({ size, src, onClick }) => {
  const borderStyle = {
    width: size,
    height: size
  };
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className="profile-border-s" style={borderStyle}  onClick={handleClick}>
      <div className="profile-container-s">
        <img src={src} alt="Profile Picture-s" onClick={handleClick}/>
      </div>
    </div>
  );
};

ProfileBorder.propTypes = {
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ProfileBorder;
