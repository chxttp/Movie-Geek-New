import React, { useState, useEffect } from "react";
import "./CreateList.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieCard from "./MovieCard";

function CreateList() {
    const [Movie, setMovies] = useState([]);
    const moviesPerList = 6; //no.of movie to show in each list
    const [list, setList] = useState(false);
    useEffect(() => {
        fetch("https://moviegeek.azurewebsites.net/movieStatic/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setMovies(data))
    
          .catch((error) => console.log(error));
      }, []);

    const movieItems = Movie.map((movie) => (
        <MovieCard
          key={movie.id}
          imageUrl={movie.poster}
        //   onClick={() => MovieClicked(movie)}
        />
      ));
    
      const movieLists = [];
    
      for (let i = 0; i < movieItems.length; i += moviesPerList) {
        const movieRow = movieItems.slice(i, i + moviesPerList);
        const filmItem = (
          <div className="list-movie" key={i}>
            {movieRow}
          </div>
        );
        movieLists.push(filmItem);
        
      }
  return (
    <div className="create-list-container">
      <Navbar />
      <div className="create">
        <div className="create-title">Create A List</div>
      </div>
      <div className="c-l-container">
        <div className="form-area">
          <form>
            <div className="form-group-cl">
              <label htmlFor="list-name">List Name:</label>
              <input
                type="text"
                id="list-name"
                name="list-name"
                
                className="name-input"
              />
            </div>

            <div className="form-group-cl">
              <label htmlFor="list-description">List Description:</label>
              <textarea
                id="list-description"
                name="list-description"
                
                className="descript-input"
              />
            </div>

            <div className="search-bar">
              <input placeholder="search" />
              <button className="save-button">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="display-movie-container">
        {!list ? (
          <div className="display-movie">
            <div className="no-movie">
              <h4>Your list is still empty</h4>
              <p>You can add movies to the list using the field above</p>
            </div>
          </div>
        ) : (
          <div className="display-movie">
            <div className="show-movie">{movieLists}</div>
          </div>
        )}
      </div>
      
      
    </div>
  );
}

export default CreateList;
