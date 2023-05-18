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




function MovieDetail() {
  const videoId = "JXxAnZaZrG0";
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState(true);
 
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  

  


  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://moviegeek.azurewebsites.net/movie/getAll`)
      .then((response) => response.json())
      .then((data) => {
        const movieData = data.find((movie) => movie.id === Number(movieId));
        setMovie(movieData);
      })
      .catch((error) => console.log(error));
  }, [movieId]);
  

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
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
  };

  const handleLikeClick = () => {};

  const castClicked = () => {
    const cast = movie?.cast
    document.getElementById("text").innerHTML =
      cast
  };

  const DirectorClicked = () =>{
    const director = movie?.director
    document.getElementById("text").innerHTML = director
  }
  const WriterClicked = () =>{
    const writer = movie?.screenWriter
    document.getElementById("text").innerHTML = writer

  }
  const GenresClicked = () =>{
    const genres = movie?.genre
    document.getElementById("text").innerHTML = genres
  }
  
  return (
    <div className="movie-detail">
      <Navbar isLoggedIn={isLoggedIn} username={username}/>
      <div>
        <div className="detail-container">
          <div className="right-column">
            <img src= {movie?.poster} alt="Poster"/>
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
                  <BsEye className="eyes" />
                  <FaHeart onClick={handleLikeClick} className="heart" />
                  <MdOutlinePlaylistAddCircle className="watchlist" />
                </div>
              </div>
            </div>
          </div>
          <div className="left-column">
            <h4>
              {movie?.title}
            </h4>
            <br />
            <p>
              {movie?.descript}
            </p>

            <div>
              <YouTube videoId={movie?.trailer} opts={opts} className="youtube" />
            </div>
            <div className="menu">
              <button onClick={castClicked}>Cast</button>
              <button onClick={DirectorClicked} >Director</button>
              <button onClick={WriterClicked}>Screen Writer</button>
              <button onClick={GenresClicked}>Genres</button>
            </div>
            <div className="info">
              <p id="text"></p>
            </div>
      

            <div className="popular-reviews">
              <div className="popular">POPULAR REVIEWS</div>
              <div className="more">MORE</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MovieDetail;

