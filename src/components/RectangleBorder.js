import React from 'react';
import PropTypes from 'prop-types';
import './RectangleBorder.css';

const RectangleBorder = ({ src, alt }) => {
  return (
    <div className="rectangle-border">
      <div className="rectangle-container">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

RectangleBorder.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RectangleBorder;
