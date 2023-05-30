import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateList.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieCard from "./MovieCard";


function CreateList() {
  const navigate = useNavigate();
  const [Movie, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [SearchResults, setSearchResults] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  const moviesPerRow = 5;
  const [listTitle, setListTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);

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

  useEffect(() => {
    const ids = selectedMovies.map((movie) => movie.id);
    setSelectedMovieIds(ids.join(", "));
  }, [selectedMovies]);

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    const filteredMovies = Movie.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  const saveData = () => {
    fetch("https://moviegeek.azurewebsites.net/listStatic/addDAO", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listName: listTitle,
        listMovieID: selectedMovieIds,
        listOwner: username,
        listDescript: descript,
      }),
    })
      .then((response) => response.text)
      .then((data) => {
        if (data !== null) {
          setAuthenticated(true);
        } else {
          alert("The list cannot be added");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (authenticated === true) {
      navigate("/lists");
    }
  }, [authenticated]);

  const handleMovieSelect = (movie) => {
    const isAlreadySelected = selectedMovies.some(
      (selectedMovie) => selectedMovie.id === movie.id
    );

    if (isAlreadySelected) {
      setSelectedMovies((prevMovies) =>
        prevMovies.filter((selectedMovie) => selectedMovie.id !== movie.id)
      );
    } else {
      setSelectedMovies((prevMovies) => [...prevMovies, movie]);
    }
    setSearchInput(""); 
  };

  const chunkMovies = (movies, size) => {
    const chunkedArray = [];
    for (let i = 0; i < movies.length; i += size) {
      chunkedArray.push(movies.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="create-list-container">
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className="create">
        <div className="create-title">Create a List</div>
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
                onChange={(e) => setListTitle(e.target.value)}
              />
            </div>

            <div className="form-group-cl">
              <label htmlFor="list-description">List Description:</label>
              <textarea
                id="list-description"
                name="list-description"
                className="descript-input"
                onChange={(e) => setDescript(e.target.value)}
              />
            </div>

            <div className="search-bar-container">
              <div className="search-bar">
                <input
                  placeholder="Search"
                  onChange={handleSearchInput}
                  value={searchInput}
                />
              </div>
              {searchInput && SearchResults.length > 0 && (
                <div className="search-results">
                  <h4>Search Results</h4>
                  <ul>
                    {SearchResults.map((movie) => (
                      <li
                        key={movie.id}
                        onClick={() => handleMovieSelect(movie)}
                      >
                        {movie.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
        <button className="save-button" onClick={() => saveData()}>
          Save
        </button>
      </div>

      <div className="display-movie-container">
        {selectedMovies.length === 0 ? (
          <div className="display-movie">
            <div className="no-movie">
              <h4>Your list is still empty</h4>
              <p>You can add movies to the list using the field above</p>
            </div>
          </div>
        ) : (
          <div className="display-movie">
            {chunkMovies(selectedMovies, moviesPerRow).map((row, rowIndex) => (
              <div className="movie-row" key={rowIndex}>
                {row.map((movie) => (
                  
                    <MovieCard imageUrl={movie.poster} />
                    
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CreateList;
