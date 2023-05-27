import React, { useState } from "react";
import Rect_b from "./Rect_b";
import ProfileBorder_s from "./ProfileBorder_s";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import "./PLContainer.css";

function PLContainer({
  id,
  title,
  listimg,
  profileimg,
  profilename,
  filminlist,
  likeamount,
  commentamount,
  listdesc,
  onClick,
}) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setLiked((prevLiked) => !prevLiked);
    // Perform any other logic related to the like action
  };

  const handleListClick = () => {
    onClick(id);
  };

  return (
    <div className="sub-list-container" onClick={handleListClick}>
      <div className="l-container">
        {listimg.map((poster, index) => (
          <Rect_b key={index} src={poster} />
        ))}
      </div>
      <div className="r-container">
        <div className="r-container-title">
          <h2>{title}</h2>
        </div>
        <div className="r-container-profile">
          <ProfileBorder_s src={profileimg} />
          <p>{profilename}</p>
          <p>{filminlist} films</p>
          <div className="heart-like-container">
            <FaHeart
              onClick={handleLikeClick}
              className={`heart-pl ${liked ? "liked" : ""}`}
            />
            <p>{liked ? likeamount + 1 : likeamount}</p>
          </div>
          <div className="comment-word-container">
            <FaComments onClick={handleLikeClick} className="comment-pl" />
            <p>{commentamount}</p>
          </div>
        </div>
        <div className="r-container-desc">
          <p>{listdesc}</p>
        </div>
      </div>
    </div>
  );
}

export default PLContainer;
