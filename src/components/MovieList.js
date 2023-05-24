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
  

  // const oscarAwards = [
  //   { id: 1, title: 'The Whale', description: 'Description of Movie E', poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
  //   { id: 2, title: 'Everything Everywhere', description: 'Description of Movie F', poster: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
  //   { id: 3, title: 'All Quiet In Western Front', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
  //   { id: 4, title: 'Top Gun', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
  //   { id: 5, title: 'An Irish Goodbye', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
  //   {id: 6, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
  //   { id: 7, title: 'THE WHALE', description: 'Description of Movie E', poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
  //   { id: 8, title: 'EVERYTHING EVERYWHERE', description: 'Description of Movie F', poster: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
  //   { id: 9, title: 'ALL QUIET ON WESTERN FRONT', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
  //   { id: 10, title: 'TOP GUN', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
  //   { id: 11, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
  //   {id: 12, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
  //   { id: 13, title: 'TOP GUN', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
  //   { id: 14, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
  //   {id: 15, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
  //   {id: 16, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'}
  // ];

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
      