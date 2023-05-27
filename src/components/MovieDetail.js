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
      fetchActivityData();
  }, []);

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
  const fetchActivityData = () => {
    // Fetch activity data from the API
    fetch("https://moviegeek.azurewebsites.net/movieActivity/getAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt }),
    })
      .then((data) => {
       
        setLikeStatus(data.likeStatus);
        setWatchStatus(data.watchStatus);
        setRating(parseInt(data.Rating));
        alert(data.likeStatus)
        if (data.likeStatus === "1") {
          setLiked(true);
          setHeartColor("red");
        }
        if (data.watchStatus === "1") {
          setEyeColor("yellow");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt, actType: "rate", likeStatus: "0", watchStatus: "0", rating: rating }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => console.log(error));
    
  };

  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setHeartColor("white");
      setLikeStatus("0");
      
    } else {
      setLiked(true);
      setHeartColor("red");
      setLikeStatus("1");
      
    }

    if(likeStatus === "1"){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt, actType: "like", likeStatus: likeStatus, watchStatus: "0", rating: 0 }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => console.log(error));
      
      
    }
    else if(likeStatus === "0"){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt, actType: "like", likeStatus: likeStatus, watchStatus: "0", rating: 0 }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => console.log(error));

    }
  };

  const handleWatchClick = () => {
    if (watchStatus === "0") {
      setEyeColor("yellow");
      setWatchStatus("1");
      
    } else {
      setEyeColor("white");
      setWatchStatus("0");
     
    }

    if(watchStatus === "1"){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt, actType: "watch", likeStatus: "0", watchStatus: watchStatus, rating: 0 }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => console.log(error));
      
      
    }
    else if(watchStatus === "0"){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertAct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieId: movieIdAsInt, actType: "watch", likeStatus: "0", watchStatus: watchStatus, rating: 0 }),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => console.log(error));

    }
    
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
                  <BsEye className="eyes" onClick={handleWatchClick}
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
                <Comment username={username}></Comment>
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