import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import "./MovieDetail.css";
import { color } from "@mui/system";
import YouTube from "react-youtube";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comment from "./Comment";
import MovieCard from "./MovieCard";



function MovieDetail() {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState(true);
  const [heartColor, setHeartColor] = useState("white");
  const [likeStatus, setLikeStatus] = useState("0");
  const [eyeColor, setEyeColor] = useState("white");
  const [watchStatus, setWatchStatus] = useState("0");

  const { movieId } = useParams();
  const movieIdAsInt = parseInt(movieId);
  const [movie, setMovie] = useState(null);

  

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://moviegeek.azurewebsites.net/movieStatic/getAll`)
      .then((response) => response.json())
      .then((data) => {
        const movieData = data.find((movie) => movie.id === Number(movieId));
        setMovie(movieData);
      })
      .catch((error) => console.log(error));
      
      
  }, []);

  useEffect(() => {
    fetch("https://moviegeek.azurewebsites.net/movieActivity/getAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieID: movieIdAsInt , username: username }),
    })
    .then((response) => response.json()) 
    .then((data) => {
      const ratingData = data.find((activity) => activity.actType === "rate");
      const watchData = data.find((activity) => activity.actType === "watch");
      const likeData = data.find((activity) => activity.actType === "like");
      
      

      if (ratingData) {
        setRating(ratingData.rating);
        
      }
      if (watchData) {
        
        setWatchStatus(watchData.watchStatus);
        if(watchData.watchStatus === "0"){
          setEyeColor("white")
        }
        else if(watchData.watchStatus === "1"){
          setEyeColor("yellow")
        }

      }
      if (likeData) {
       
        setLikeStatus(likeData.likeStatus);
        if(likeData.likeStatus === "0"){
          setHeartColor("white")
        }
        else if(likeData.likeStatus === "1"){
          setHeartColor("red")
        }
      }
    })
      .catch((error) => console.log(error));
  },[movieIdAsInt, username])

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    if (username !== null) {
      setIsLoggedIn(true);
      
    } else {
      setIsLoggedIn(false);
    }
  }, [username]);

  const opts = {
    height: "390",
    width: "600",
    playerVars: {
      autoplay: 2,
    },
  };
  

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    updateRating(newRating)
    
  };

  


  const handleLikeClick = () => {
    if (likeStatus == "1") {
      setLiked(false);
      setHeartColor("white");
      setLikeStatus("0");
      updateLikeStatus("0")
      
    } else {
      setLiked(true);
      setHeartColor("red");
      setLikeStatus("1");
      updateLikeStatus("1")
      
    }
    
  };
  

  const handleWatchClick = () => {
    if (watchStatus === "0") {
      setEyeColor("yellow");
      setWatchStatus("1");
      updateWatchStatus("1")
      
    } else {
      setEyeColor("white");
      setWatchStatus("0");
      updateWatchStatus("0")
     
    }
    
    
  };
  const updateRating = (newRating) => {
    fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        movieID: movieIdAsInt,
        actType: "rate",
        rating: newRating,
        likeStatus: "0",
        watchStatus: "0",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
      })
      .catch((error) => console.log(error));
  };

  const updateLikeStatus = (newLikeStatus) => {
    fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        movieID: movieIdAsInt,
        actType: "like",
        rating: 0,
        likeStatus: newLikeStatus,
        watchStatus: "0",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
      })
      .catch((error) => console.log(error));
  };

  const updateWatchStatus = (newWatchStatus) => {
    fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        movieID: movieIdAsInt,
        actType: "watch",
        rating: 0,
        likeStatus: "0",
        watchStatus: newWatchStatus,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
      })
      .catch((error) => console.log(error));
  };

  const castClicked = () => {
    const cast = movie?.cast;
    document.getElementById("text").innerHTML = cast;
  };

  const DirectorClicked = () => {
    const director = movie?.director;
    document.getElementById("text").innerHTML = director;
  };

  const WriterClicked = () => {
    const writer = movie?.screenWriter;
    document.getElementById("text").innerHTML = writer;
  };

  const GenresClicked = () => {
    const genres = movie?.genre;
    document.getElementById("text").innerHTML = genres;
  };

  useEffect(() => {
    if (movie !== null) {
      // Update the heart color and value based on the liked state
      const heartIcon = document.getElementById("heart-icon");

      if (heartIcon) {
        heartIcon.style.color = heartColor;
        heartIcon.setAttribute("value", likeStatus);
      }

      const eyeIcon = document.getElementsByClassName("eyes")[0]
      if (eyeIcon) {
        eyeIcon.style.color = eyeColor;
        eyeIcon.setAttribute("value", watchStatus);
      }
    }
  }, [heartColor, likeStatus, eyeColor, watchStatus, movie]);

  if (!movie) {
    return <div>Loading...</div>; // Add a loading state or spinner while fetching movie data
  }

  return (
    <div className="movie-detail">
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div>
        <div className="detail-container">
          <div className="right-column">
            <MovieCard imageUrl={movie?.poster} />
            <div class="show-rating">⭐ &nbsp;RATING 2.0 / 5.0</div>
            <div className="rating">
              <p>Rate this movie: &nbsp;</p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => handleRatingChange(num)}
                    className={num <= rating ? "active" : ""}
                  >
                    &#9733;
                  </span>
                ))}
                <div className="like-button">
                  <p>Like this movie ?</p>
                  <br />
                  <BsEye className={`eyes ${watchStatus === "1" ? "watched" : ""}`} onClick={handleWatchClick}
              style={{ color: eyeColor }} />
                  <FaHeart
                    onClick={handleLikeClick}
                    className={`heart ${liked ? "liked" : ""}`}
                    id="heart-icon"
                  />
                  <MdOutlinePlaylistAddCircle className="watchlist" />
                </div>
              </div>
            </div>
          </div>
          <div className="left-column">
            <h4>{movie?.title}</h4>
            <br />
            <p>{movie?.descript}</p>

            <div>
              <YouTube videoId={movie?.trailer} opts={opts} className="youtube" />
            </div>
            <div className="menu">
              <button onClick={castClicked}>Cast</button>
              <button onClick={DirectorClicked}>Director</button>
              <button onClick={WriterClicked}>Screen Writer</button>
              <button onClick={GenresClicked}>Genres</button>
            </div>
            <div className="info">
              <p id="text"></p>
            </div>

            <div className="popular-reviews">
              <div className="popular">POPULAR REVIEWS</div>
              <div className="p-comment">
                <Comment username={username} id={movieIdAsInt}></Comment>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetail;