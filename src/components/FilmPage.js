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

  
  
  const movieLists = [];
 

  for (let i = 0; i < Movie.length; i += moviesPerList) {
    const currentList = Movie.slice(i, i + moviesPerList);

    const movieCards = currentList.map((movie) => (
      <MovieCard
        key={movie.id}
        imageUrl={movie.poster}
        onClick={() => MovieClicked(movie)}
        
      />
    ));

    movieLists.push(
      <div className="film-item" key={i} >
        {movieCards}
      </div>
    );
  }


  
  return (
    <div className="film-container">
      <Navbar />
      <div className="film-item-title">
        <div className="film">Films</div>
        <div className="genres" >Genres</div>

        <div className="sort">Sort By</div>
      </div>
      <div className="film-item-container">
        {/* <div className="film-item" onClick={() => MovieClicked(Movie[1])}>
          <MovieCard imageUrl={Movie[1]?.poster} />
          <MovieCard imageUrl={Movie[2]?.poster} />
          <MovieCard imageUrl={Movie[3]?.poster} />
          <MovieCard imageUrl={Movie[4]?.poster} />
          <MovieCard imageUrl={Movie[5]?.poster} />
          <MovieCard imageUrl={Movie[6]?.poster} />
        </div>

        <div className="film-item">
          <MovieCard imageUrl={Movie[7]?.poster} />
          <MovieCard imageUrl={Movie[8]?.poster} />
          <MovieCard imageUrl={Movie[9]?.poster} />
          <MovieCard imageUrl={Movie[1]?.poster} />
          <MovieCard imageUrl={Movie[5]?.poster} />
          <MovieCard imageUrl={Movie[6]?.poster} />
        </div> */}

        {/* <div className="film-item">
          {Movie.map((movie, index) => {
            if (index >= 6) return null;

            return <MovieCard imageUrl={movie?.poster} />;
          })}
        </div> */}
        
        {movieLists}
       

        

        


        
        
      </div>
    </div>
  );
}
export default FilmPage;
