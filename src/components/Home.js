import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'
import './Home.css'
import MovieList from './MovieList';
import PopularList from './PopularList';
import { useState, useContext, useEffect } from 'react';
import Footer from './Footer';
import UserData from '../Data/UserData';
import MovieCard from './MovieCard';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);

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



  

  return (
    <div className='Home'>
      
      <Navbar isLoggedIn={isLoggedIn} username={username}/>
      <MovieList listType='new'/>
      <MovieList listType='popular'/>
      <MovieList listType ='oscar'/>
      <PopularList/>
     
      
      
      <Footer/>

    </div>
    
  );
}

export default Home;
