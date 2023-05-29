import React from "react";
import PropTypes from "prop-types";
import "./Rect_b.css";

const RectangleBorder = ({ src, alt, firststackBehind, secondstackBehind, thirdstackBehind, fourthstackBehind }) => {
  let className = "rectangle-image";

  if (firststackBehind) {
    className += " behind-image1";
  }

  if (secondstackBehind) {
    className += " behind-image2";
  }

  if (thirdstackBehind) {
    className += " behind-image3";
  }

  if (fourthstackBehind) {
    className += " behind-image4";
  }
  return (
    <div className="rectangle-border-s">
      <div className="rectangle-container-s">
        <img src={src} alt={alt} className= {`rectangle-image ${className}`} />
      </div>
    </div>
  );
};

RectangleBorder.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RectangleBorder;
