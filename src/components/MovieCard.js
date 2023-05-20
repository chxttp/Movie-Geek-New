import React from "react";
import "./MovieCard.css";

function MovieCard({ imageUrl, onClick }) {
    return (
      <div className="movie-container">
        <div className="movie-border">
          <img src={imageUrl} alt="Movie Poster" className="movie-image" onClick={onClick} />
        </div>
      </div>
    );
  }
  

export default MovieCard;
