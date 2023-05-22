import React from "react";
import PropTypes from "prop-types";
import "./Rect_b.css";

const RectangleBorder = ({ src, alt }) => {
  return (
    <div className="rectangle-border-s">
      <div className="rectangle-container-s">
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
