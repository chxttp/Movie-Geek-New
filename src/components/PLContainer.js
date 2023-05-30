import { useState, useEffect } from "react";
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
  const [username, setUsername] = useState("");
  const [likeStatus, setLikeStatus] = useState("0");
  const [currentLikeAmount, setCurrentLikeAmount] = useState(likeamount);
  const [initialRender, setInitialRender] = useState(true);


  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    fetch("https://moviegeek.azurewebsites.net/listActivity/getLikeStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter the data to get the likeStatus for the current list ID
        const likeStatusData = data.filter((item) => item.listID === id);
        if (likeStatusData.length > 0) {
          const likeStatus = likeStatusData[0].likeStatus;
          setLikeStatus(likeStatus);
          setLiked(likeStatus === "1");
          setInitialRender(likeStatus);
        }
      })
      .catch((error) => console.log(error));
    
  }, [id, username]);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    const newLikeStatus = likeStatus === "1" ? "0" : "1";
    setLikeStatus(newLikeStatus);
    setLiked((prevLiked) => !prevLiked);
    fetch("https://moviegeek.azurewebsites.net/listActivity/insertLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username : username, listID: id, actType: "like", comment : "", likeStatus : newLikeStatus}),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
        setCurrentLikeAmount((prevLikeAmount) => {
          if (initialRender == "1") {
            // If it's the initial render and the likeStatus is "1", do not change the like amount
            setInitialRender("0")
            return prevLikeAmount;
          }
          return prevLikeAmount + (newLikeStatus === "1" ? 1 : -1); 
        });
        
      
        
      })
      .catch((error) => console.log(error));
   
      
    window.location.reload();

  };

  const handleListClick = () => {
    onClick(id);
  };

  return (
    <div className="sub-list-container" onClick={handleListClick}>
      <div className="l-container">
        {listimg.map((poster, index) => (
          <Rect_b key={index} src={poster} firststackBehind={index == 1} secondstackBehind={index == 2} thirdstackBehind={index == 3} fourthstackBehind={index == 4} fifthstackBehind={index == 5} sixthstackBehind={index == 6}/>
          
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
            {/* <p>{liked ? currentLikeAmount + 1 : currentLikeAmount}</p> */}
            <p>{currentLikeAmount}</p>
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
