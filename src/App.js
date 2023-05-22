import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import ProfilePage from './components/ProfilePage';
import UserData from './Data/UserData';
import ListsPage from './components/ListsPage';
import Geeks from './components/Geeks';
import Film from './components/FilmPage'
import FilmPage from './components/FilmPage';
import ListDetail from './components/ListDetail';

function App() {
  
  return (
    <UserData.Provider value={{ username: '', setUsername: () => {} }}>
    <Router>
      <div>
        
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/MovieDetail/:movieId" element = {<MovieDetail/>}/>
          <Route path="/profile" element = {<ProfilePage/>}/> 
          <Route path="/lists" element = {<ListsPage/>}/>
          <Route path="/geek" element = {<Geeks/>}/> 
          <Route path= "/film" element = {<FilmPage/>}/>
          <Route path= "/ListDetail" element = {<ListDetail/>}/>
         
        </Routes>
      </div>
    </Router>
    </UserData.Provider>
  );
}

export default App;
