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
  

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    console.log(selectedValue);

    fetch("https://moviegeek.azurewebsites.net/movie/getFilter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({genre: selectedValue}),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error during API request:", error);
      });
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
          <select className="option-menu" id = "genre" onChange={handleSelectChange}>
            <option value="">Default</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="War">War</option>
            <option value="History">History</option>
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
