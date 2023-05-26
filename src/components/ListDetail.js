import React from "react";
import "./ListDetail.css";
import "./Navbar.js";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useNavigate, Redirect, Navigate, Link } from "react-router-dom";
import { useState , useContext, useEffect  } from 'react';
import ProfileBorder from "./ProfileBorder_s";
import Comment from "./Comment";
import { useParams } from 'react-router-dom';


function ListDetail() {
    const [Movie, setMovies] = useState([]);
    const [listDetail, setDetail] = useState([])
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);

  const { listId } = useParams();
  // const intId = parseInt(listId)

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
 

  const moviesPerList = 6; //no.of movie to show in each list
    useEffect(() => {
        fetch("https://moviegeek.azurewebsites.net/listStatic/getMovieFromList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(listId),
        })
          .then((response) => response.json())
          .then((data) => setMovies(data))
    
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        fetch("https://moviegeek.azurewebsites.net/listStatic/getDetailOfList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(listId),
        })
          .then((response) => response.json())
          .then((data) => setDetail(data))
    
          .catch((error) => console.log(error));
      }, []);
    
      function MovieClicked(movie) {
        navigate(`/MovieDetail/${movie.id}`);
      }
    
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
          <div className="list-movie" key={i}>
            {movieRow}
          </div>
        );
        movieLists.push(filmItem);
        
      }
  return (
    <div className="list-container">
      <Navbar isLoggedIn={isLoggedIn} username={username}/>
      <div className="list-listname">
            <h1>{listDetail.listName}</h1>
      </div>
      <div className="list-profile-container">
        <div className="list-profile-header">
          <ProfileBorder src="https://variety.com/wp-content/uploads/2021/09/Drake-publicity3-2021.jpg?w=1000"/>
          <div className="list-profile-name">
            <h1>List by {listDetail.listOwner}</h1>
          </div>
          
          
        </div>
        <div className="list-description">
        <p>{listDetail.listDescript}</p>

        </div>
        
      </div>

      <div className="list-movie-container">
        {movieLists}

      </div>

      <div className="list-comment">
        COMMENT
      </div>
      <div className="comment">
      <Comment username={username}/>


      </div>
    </div>
  );
}
export default ListDetail;
