import React, { useState , useEffect} from 'react';
import './MovieList.css';
import { useNavigate, Redirect, Navigate, Link } from 'react-router-dom';



function MovieList(props) {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [audientFavorite, setAudientFavorite] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(1);
  
  const [expanded, setExpanded] = useState(false);
  
  const listsToShow = 1; // Number of lists to show initially
  const listsToAdd = 2; //list to show more when more is click
  const moviesPerList = 5 //no.of movie to show in each list


  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/movieStatic/filterAndSort" ,{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({genre: "", sort: "popular"}),

    })
      .then((response) => response.json())
      .then((data) => setPopularMovies(data))
       
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/movieStatic/filterAndSort" ,{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({genre: "", sort: "newest"}),

    })
      .then((response) => response.json())
      .then((data) => setNewMovies(data))
       
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/movieStatic/filterAndSort" ,{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({genre: "", sort: "favorite"}),

    })
      .then((response) => response.json())
      .then((data) => setAudientFavorite(data))
       
      .catch((error) => console.log(error));
  }, []);



  function MovieClicked(movie) {
    navigate(`/MovieDetail/${movie.id}`);
  }

  
  function toggleExpanded() {
    setExpanded((prevExpanded) => !prevExpanded);
  }
  


  let moviesToDisplay = [];

  if (props.listType === 'new') {
    moviesToDisplay = newMovies;
  } else if (props.listType === 'popular') {
    moviesToDisplay = popularMovies;
  } else if (props.listType === 'favorite') {
    moviesToDisplay = audientFavorite;
  } 


  
  
  // const maxMovies = expanded ? moviesToDisplay.length : listsToShow;
  // const maxMovies = expanded ? Math.ceil(moviesToDisplay.length / moviesPerList) : listsToShow;
  const maxMovies = expanded
    ? Math.min(listsToShow + listsToAdd, Math.ceil(moviesToDisplay.length / moviesPerList))
    : listsToShow;

  const buttonText = expanded ? 'LESS' : 'MORE';
  return (
//     
<div className='movie-list-container'>
<div className='movie-list-title' style={{ height: '28px' }}>
          {props.listType === 'new' && 'New Release'}
          {props.listType === 'popular' && 'Popular'}
          {props.listType === 'favorite' && "Audience's Favorite"}
          <div className='movie-list-button' onClick={toggleExpanded}>
            {buttonText}
          </div>
        </div>
      <div className='movie-list'>
        {/* <div className='movie-list-title' style={{ height: '28px' }}>
          {props.listType === 'new' && 'New Release'}
          {props.listType === 'popular' && 'Popular'}
          {props.listType === 'favorite' && "Audience's Favorite"}
          <div className='movie-list-button' onClick={toggleExpanded}>
            {buttonText}
          </div>
        </div> */}
        <div className='movie-card-container'>
          {moviesToDisplay.slice(0, maxMovies * moviesPerList).map((movie) => (
            <div className='movie-card' key={movie.id}>
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => MovieClicked(movie)}
              />
              <div className='title' onClick={() => MovieClicked(movie)}>{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  
  

  
  }
    export default MovieList
      