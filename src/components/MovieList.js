import React, { useState , useEffect} from 'react';
import './MovieList.css';
import { useNavigate, Redirect, Navigate, Link } from 'react-router-dom';



function MovieList(props) {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(1);
  
  const [expanded, setExpanded] = useState(false);
  
  const listsToShow = 1; // Number of lists to show initially
  const listsToAdd = 2; //list to show more when more is click
  const moviesPerList = 5 //no.of movie to show in each list


  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/movie/getAll" ,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((data) => setPopularMovies(data))
       
      .catch((error) => console.log(error));
  }, []);

  function MovieClicked(movie) {
    navigate(`/MovieDetail/${movie.id}`);
  }

  // function MoreClicked(){
    
  //   // setRowsToShow(prevRows => prevRows === newMovies.length ? 1 : prevRows + 2);
  //   setShowAllMovies(true);
  //   // setRowsToShow((prevRows) => prevRows + 1);

  // }

  function toggleExpanded() {
    setExpanded((prevExpanded) => !prevExpanded);
  }
  
  const newMovies = [
    { id: 1, title: 'Black Panther 2', description: 'Description of Movie A', poster: 'https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg' },
    { id: 2, title: 'Antman Quantummania', description: 'Description of Movie B', poster: 'https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg' },
    {id: 3, title: 'Top Gun Maverick', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 4, title: 'Avatar 2', description: 'Description of Movie H', poster: 'https://s359.kapook.com/pagebuilder/44c62352-5ba7-4bb7-a42c-0f37e652ffa6.jpg' },
    { id: 5, title: 'Ditto', description: 'Description of Movie I', poster: 'https://asianwiki.com/images/6/61/Ditto_2022-p1.jpg' },
    {id: 6, title: 'An Irish Goodbye', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
    { id: 7, title: 'THE WHALE', description: 'Description of Movie E', poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
    { id: 8, title: 'EVERYTHING EVERYWHERE', description: 'Description of Movie F', poster: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
    { id: 9, title: 'ALL QUIET ON WESTERN FRONT', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
    { id: 10, title: 'TOP GUN', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 11, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
    {id: 12, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'}
    
  ];


  const oscarAwards = [
    { id: 1, title: 'The Whale', description: 'Description of Movie E', poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
    { id: 2, title: 'Everything Everywhere', description: 'Description of Movie F', poster: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
    { id: 3, title: 'All Quiet In Western Front', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
    { id: 4, title: 'Top Gun', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 5, title: 'An Irish Goodbye', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
    {id: 6, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
    { id: 7, title: 'THE WHALE', description: 'Description of Movie E', poster: 'https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg' },
    { id: 8, title: 'EVERYTHING EVERYWHERE', description: 'Description of Movie F', poster: 'https://i.ebayimg.com/images/g/X~MAAOSwIfJiR4-N/s-l1600.jpg' },
    { id: 9, title: 'ALL QUIET ON WESTERN FRONT', description: 'Description of Movie G', poster: 'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg' },
    { id: 10, title: 'TOP GUN', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 11, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
    {id: 12, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
    { id: 13, title: 'TOP GUN', description: 'Description of Movie H', poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg' },
    { id: 14, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg' },
    {id: 15, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'},
    {id: 16, title: 'AN IRISH GOODBYE', description: 'Description of Movie I', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/An_Irish_Goodbye_poster.jpg/220px-An_Irish_Goodbye_poster.jpg'}
  ];

  let moviesToDisplay = [];

  if (props.listType === 'new') {
    moviesToDisplay = newMovies;
  } else if (props.listType === 'popular') {
    moviesToDisplay = popularMovies;
  } else if (props.listType === 'oscar') {
    moviesToDisplay = oscarAwards;
  } 


  
  
  // const maxMovies = expanded ? moviesToDisplay.length : listsToShow;
  // const maxMovies = expanded ? Math.ceil(moviesToDisplay.length / moviesPerList) : listsToShow;
  const maxMovies = expanded
    ? Math.min(listsToShow + listsToAdd, Math.ceil(moviesToDisplay.length / moviesPerList))
    : listsToShow;

  const buttonText = expanded ? 'LESS' : 'MORE';
  return (
//     <div className='movie-list-container'>
      
//       <div className='movie-list'>
//         <div className='movie-list-title'>
//           {props.listType === 'new' && 'NEW ON MOVIEGEEK'}
//           {props.listType === 'popular' && 'POPULAR ON MOVIEGEEK'}
//           {props.listType === 'oscar' && 'OSCAR WINNING 2023'}
//           <div className='movie-list-more' onClick={() => MoreClicked()}>MORE</div>
//         </div>
//         <div className='movie-card-container'>
//           {/* {moviesToDisplay.map(movie => (
//             <div className='movie-card' key={movie.id}>
              
//               <img src={movie.poster} alt={movie.title} onClick={() => MovieClicked(movie)}/>
           
//               <div className='title'>{movie.title}</div>
              
//             </div>
//           ))} */}

// {moviesToDisplay.map((movie, index) => {
//   if (index < rowsToShow * 5) {
//     return (
//       <div className='movie-card' key={movie.id}>
//         <img src={movie.poster} alt={movie.title} onClick={() => MovieClicked(movie)} />
//         <div className='title'>{movie.title}</div>
//       </div>
//     );
//   }
//   return null;
// })}
//         </div>
//       </div>
//     </div>
<div className='movie-list-container'>
      <div className='movie-list'>
        <div className='movie-list-title' style={{ height: '28px' }}>
          {props.listType === 'new' && 'New Release'}
          {props.listType === 'popular' && 'Popular'}
          {props.listType === 'oscar' && 'Oscar Winning'}
          <div className='movie-list-button' onClick={toggleExpanded}>
            {buttonText}
          </div>
        </div>
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
      