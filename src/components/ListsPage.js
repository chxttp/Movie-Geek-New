import React from "react";
import Navbar from "./Navbar";
import PLContainer from "./PLContainer";
import Footer from "./Footer";
import "./ListsPage.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Redirect, Navigate, Link } from "react-router-dom";

function ListsPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);
  const [poster, setPoster] = useState([]);

  const [popularlists, setpopularlists] = useState([
    // {
    //   title: "Weirdo Movies for Beginners",
    //   listimg:
    //     "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    //   profileimg:
    //     "https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg",
    //   profilename: "Olive",
    //   filminlist: "151",
    //   likeamount: "8080",
    //   commentamount: "2",
    //   listdesc: "Bla Bla Bla Bla Bla Bla",
    // },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://moviegeek.azurewebsites.net/listStatic/getSort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort: "" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setpopularlists(data);
        const posters = data.map((item) =>
          item.listMoviePoster.split(",").map((url) => url.trim())
        );
        setPoster(posters);
      })

      .catch((error) => console.log(error));
  }, []);

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

  function createListClicked() {
    navigate(`/CreateList`);
  }
  const listClicked = (movieId) => {
    navigate(`/ListDetail/${movieId}`);
  };
  return (
    <div className="List">
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      <div className="create-list">
        <h4>Create and Share your own List</h4>
        <button onClick={createListClicked} className="create-list-button">
          Create a list
        </button>
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
        {popularlists.map((popularlist, index) => {
          const posters = poster[index]?.slice(0, 5);
          const isLastItem = index === popularlists.length - 1;

          return (
            <React.Fragment key={popularlist.id}>
              <PLContainer
                title={popularlist.listName}
                listimg={posters}
                profileimg={popularlist?.profileimg}
                filminlist={popularlist.numOfMovies}
                likeamount={popularlist.likeAmount}
                commentamount={popularlist.numOfComments}
                listdesc={popularlist.listDescript}
                onClick={() => listClicked(popularlist.id)}
              />
              {!isLastItem && <hr className="separator" />}
            </React.Fragment>
          );
        })}
        {/* <hr className="separator" /> */}
        {/* <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" />
        <PLContainer></PLContainer>
        <hr className="separator" /> */}

        {/* <PLContainer></PLContainer> */}
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default ListsPage;
