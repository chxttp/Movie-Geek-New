import React, { useState, useEffect } from "react";
import "./FilmPage.css";
import { useNavigate, Redirect, Navigate, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

function FilmPage() {
  const [Movie, setMovies] = useState([]);
  const navigate = useNavigate();

  const moviesPerList = 6; //no.of movie to show in each list

  useEffect(() => {
    fetch("https://moviegeek.azurewebsites.net/movie/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))

      .catch((error) => console.log(error));
  }, []);

  function MovieClicked(movie) {
    navigate(`/MovieDetail/${movie.id}`);
  }

  // const movieLists = [];

  // for (let i = 0; i < Movie.length; i += moviesPerList) {
  //   const currentList = Movie.slice(i, i + moviesPerList);

  //   const movieCards = currentList.map((movie) => (
  //     <MovieCard
  //       key={movie.id}
  //       imageUrl={movie.poster}
  //       onClick={() => MovieClicked(movie)}
        
  //     />
  //   ));

  //   movieLists.push(
    
  //       <div className="film-item">
  //         {movieCards}

  //       </div>
  //   )
  // }

  const movieItems = Movie.map((movie) => (
    <MovieCard
      key={movie.id}
      imageUrl={movie.poster}
      onClick={() => MovieClicked(movie)}
    />
  ));

  const movieLists = [];

  for (let i = 0; i < movieItems.length; i += moviesPerList) {
    const movieRow = movieItems.slice(i, i + moviesPerList);
    const filmItem = (
      <div className="film-item" key={i}>
        {movieRow}
      </div>
    );
    movieLists.push(filmItem);
    
  }

  return (
    <div className="film-container">
      <Navbar />
      <div className="film-item-title">
        <div className="film">Films</div>
        <div className="genres">
          Genres
          <select className="option-menu">
            <option value="">Default</option>
            <option value="">Action</option>
            <option value="">Horror</option>
            <option value="">Drama</option>
            <option value="">Comedy</option>
            <option value="">Romance</option>
            <option value="">Science fiction</option>
            <option value="">Romance</option>
          </select>
        </div>

        <div className="sort">
          Sort By
          <select className="option-menu">
            <option value="">Default</option>
            <optgroup label="Popularity">
              <option value="">All time</option>
              <option value="">This Week</option>
              <option value="">Today</option>
            </optgroup>
            
            <optgroup label="Release Date">
              <option value="">Newest</option>
              <option value="">Oldest</option>

            </optgroup>

          </select>
        </div>
      </div>
      <div className="film-item-container">
        
        {movieLists}
        

        
        
        
      </div>
    </div>
  );
}
export default FilmPage;
