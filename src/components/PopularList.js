import React from "react";
import "./PopularList.css";
import { useNavigate, Redirect, Navigate, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

function PopularList() {
  const navigate = useNavigate();
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [listID1 , setListID1] = useState([]);
  const [listID2 , setListID2] = useState([]);
 

  const listClicked = (movieId) => {
    navigate(`/ListDetail/${movieId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/listStatic/getSort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort: "favorite" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length >= 1) {
          const firstMovie = data[0];
          setListID1(firstMovie.id);
          const moviePosters1 = firstMovie.listMoviePoster.split(", ");
          setMovies1(moviePosters1);
        }
        if (data.length >= 2) {
          // Get the posters for movies in list no.2
          const secondMovie = data[1];
          setListID2(secondMovie.id);
          const moviePosters2 = secondMovie.listMoviePoster.split(", ");
          setMovies2(moviePosters2);
        }
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="popular-list-container">
      <div className="popular-list-title">
        Most Liked List
        <div className="popular-list-more">MORE</div>
      </div>

      <div className="popular-list">
        <div className="flex-container">
          <div className="popular-card-container">
            {movies1.map((poster, index) => (
              <div className="popular-card" key={index}>
                <img src={poster} alt={`Movie Poster ${index + 1}`} 
                onClick={() => listClicked(listID1)}/>
              </div>
            ))}
          </div>

          <div className="popular-card-container2">
            {movies2.map((poster, index) => (
              <div className="popular-card" key={index}>
                <img src={poster} alt={`Movie Poster ${index + 1}`} 
                onClick={() => listClicked(listID2)}/>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className='list-name'>
      <div className='list1'>
        <p>INDIAN MAFIA 🏴 ☠️</p>
      </div>
      
      <div className='list2'>
        <p>MIDNIGHT RAMYEON 🍜</p>
      </div>


      </div> */}
    </div>
  );
}

export default PopularList;
