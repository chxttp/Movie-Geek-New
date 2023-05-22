import React from "react";
import Rect_b from "./Rect_b";
import ProfileBorder_s from "./ProfileBorder_s";
import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import "./PLContainer.css";

function PLContainer() {
  var profileName = ["Olive", "C", "Letterboxd"];
  var filminList = ["151", "335", "100"];
  var likeamount = ["8080", "13000", "1100"];
  var commentamount = ["2", "36", "9"];

  const handleLikeClick = () => {};

  return (
    <div className="sub-list-container">
      <div className="l-container">
        <Rect_b src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:564/q:75/https://bleedingcool.com/wp-content/uploads/2022/08/Fa9bKbqUEAElNSX.jpeg"></Rect_b>
        <Rect_b src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*"></Rect_b>
        <Rect_b src="https://m.media-amazon.com/images/I/51Lk0WZkEqL._AC_UF894,1000_QL80_.jpg"></Rect_b>
        <Rect_b src="https://assets-prd.ignimgs.com/2022/07/27/weird-1658932398949.jpeg"></Rect_b>
        <Rect_b src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/gladiator-ghana.jpg?resize=480:*"></Rect_b>
        <Rect_b src="https://mymodernmet.com/wp/wp-content/uploads/2016/12/NeoBaggins-Movie-Face-Flip-8.jpg"></Rect_b>
      </div>
      <div className="r-container">
        <div className="r-container-title">
          <h2>Weirdo Movies for Beginners</h2>
        </div>
        <div className="r-container-profile">
          <ProfileBorder_s src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg" />
          <p>{profileName[0]}</p>
          <p>{filminList[0]} films</p>
          <div className="heart-like-container">
            <FaHeart onClick={handleLikeClick} className="heart-pl" />
            <p>{likeamount[0]}</p>
          </div>
          <div className="comment-word-container">
            <FaComments onClick={handleLikeClick} className="comment-pl" />
            <p>{commentamount[0]}</p>
          </div>
        </div>
        <div className="r-container-desc">
          <p>
            Niche, transgressive, and weird films that are well known in
            cinephile circles but would blow the average filmgoer's mind.
            Beginner…
          </p>
        </div>
      </div>
    </div>
  );
}

export default PLContainer;
