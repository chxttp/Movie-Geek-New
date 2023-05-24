import React from "react";
import Navbar from "./Navbar";
import PLContainer from "./PLContainer";
import Footer from "./Footer";
import "./ListsPage.css";
import { useState, useContext, useEffect } from 'react';
import { useNavigate, Redirect, Navigate, Link } from 'react-router-dom';

function ListsPage() {
  const navigate = useNavigate();
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

  function createListClicked(){
    navigate(`/CreateList`);
  
  }
  return (
    <div className="List">
      <Navbar isLoggedIn={isLoggedIn} username={username}/>
      <div className="create-list">
        <h4>Create and Share your own List</h4>
        <button onClick={createListClicked} className="create-list-button">Create a list</button>
      </div>

      <div className="list-popular-title">
        <div className="p-list">POPULAR LISTS</div>
        <div className="p-sort">
          Sort By
          <select className="p-option-menu">
            <option value="">POPULARITY</option>
            <option value="">Your list</option>
            
          </select>
        </div>
      </div>
      <div className="p-list-cotainer">
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        
        {/* <PLContainer></PLContainer> */}
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default ListsPage;
