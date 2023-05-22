import React from "react";
import "./PopularList.css";
import { useNavigate, Redirect, Navigate, Link } from 'react-router-dom';

function PopularList() {
  const navigate = useNavigate();
  const movies1 = [
    {
      id: 1,
      title: "INDIAN MAFIA 🏴 ☠️",
      imageUrl:
        "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227028/Gangubai-BookingsOpenV.jpg",
    },
    {
      id: 2,
      title: "INDIAN MAFIA 🏴 ☠️",
      imageUrl:
        "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    },
    {
      id: 3,
      title: "INDIAN MAFIA 🏴 ☠️",
      imageUrl:
        "https://1.bp.blogspot.com/-79vmCCwoZ_E/X4_artAUp7I/AAAAAAAAaO4/qsr-ZiGmgwcmsP72F_NAyWamwA2rsLhTwCLcBGAsYHQ/s595/Suraj-Pe-Mangal-Bhari-movie-poster-release-date.jpg",
    },
    {
      id: 4,
      title: "INDIAN MAFIA 🏴 ☠️",
      imageUrl:
        "http://www.boxofficemovies.in/now/wp-content/uploads/New-poster-of-Akshay-Kumar-starrer-Gold-movie.jpg",
    },
    {
      id: 5,
      title: "INDIAN MAFIA 🏴 ☠️",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23f9b25876903.5de890e9ce8ee.png",
    },
  ];
  const listClicked = () => {
    navigate(`/ListDetail`);

  }

  const movies2 = [
    {
      id: 1,
      title: "Movie A",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/th/3/3e/Hometown_Cha-Cha-Cha.jpg",
    },
    {
      id: 2,
      title: "Movie B",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Vincenzo_TV_series.jpg/220px-Vincenzo_TV_series.jpg",
    },
    {
      id: 3,
      title: "Movie C",
      imageUrl: "https://i.mydramalist.com/4v6zJ_4f.jpg",
    },
    {
      id: 4,
      title: "Movie D",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/64/Crash_Landing_on_You_main_poster.jpg",
    },
    {
      id: 5,
      title: "Movie E",
      imageUrl: "https://f.ptcdn.info/501/079/000/ro7a57tj7kZ21R4R7heZ-o.jpg",
    },
  ];

  return (
    <div className="popular-list-container">
      <div className="popular-list">
        <div className="popular-list-title">
          Popular Lists
          <div className="popular-list-more">MORE</div>
        </div>

        <div className="flex-container">
          <div className="popular-card-container" onClick={listClicked}>
            {movies1.map((movie) => (
              <div className="popular-card" key={movie.id}>
                <img src={movie.imageUrl} alt={movie.title} />
              </div>
            ))}
          </div>

          <div className="popular-card-container2" onClick={listClicked}>
            {movies2.map((movie) => (
              <div className="popular-card" key={movie.id}>
                <img src={movie.imageUrl} alt={movie.title} />
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
