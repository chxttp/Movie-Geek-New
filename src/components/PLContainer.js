import React from "react";
import Rect_b from "./Rect_b";
import ProfileBorder_s from "./ProfileBorder_s";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import "./PLContainer.css";

function PLContainer({
  title,
  listimg1,
  listimg2,
  listimg3,
  listimg4,
  listimg5,
  profileimg,
  profilename,
  filminlist,
  likeamount,
  commentamount,
  listdesc,
}) {
  const handleLikeClick = () => {};

  return (
    <div className="sub-list-container">
      <div className="l-container">
        <Rect_b src={listimg1}></Rect_b>
        <Rect_b src={listimg2}></Rect_b>
        <Rect_b src={listimg3}></Rect_b>
        <Rect_b src={listimg4}></Rect_b>
        <Rect_b src={listimg5}></Rect_b>
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
            <FaHeart onClick={handleLikeClick} className="heart-pl" />
            <p>{likeamount}</p>
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
