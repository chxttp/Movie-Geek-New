import React from "react";
import Navbar from "./Navbar";
import PLContainer from "./PLContainer";
import Footer from "./Footer";
import "./ListsPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListsPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(true);
  const [poster, setPoster] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState("");
  const [popularlists, setPopularLists] = useState([]);

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
        setPopularLists(data);
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
    setIsLoggedIn(username !== null);
  }, [username]);

  function createListClicked() {
    navigate(`/CreateList`);
  }

  const listClicked = (movieId) => {
    navigate(`/ListDetail/${movieId}`);
  };

  const handleSortBy = (event) => {
    const selectedValue = event.target.value;
    setSortingCriteria(selectedValue);

    if (selectedValue === username) {
      fetch("https://moviegeek.azurewebsites.net/listStatic/getMyList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sort: username }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPopularLists(data);
          const posters = data.map((item) =>
            item.listMoviePoster.split(",").map((url) => url.trim())
          );
          setPoster(posters);
        })
        .catch((error) => {
          console.error("Error during API request:", error);
        });
    } else if (selectedValue === "popular") {
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
          setPopularLists(data);
          const posters = data.map((item) =>
            item.listMoviePoster.split(",").map((url) => url.trim())
          );
          setPoster(posters);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLike = (listId) => {
    const updatedLists = popularlists.map((list) => {
      if (list.id === listId) {
        const updatedList = { ...list };
        updatedList.likeAmount += updatedList.liked ? -1 : 1;
        updatedList.liked = !updatedList.liked;
        return updatedList;
      }
      return list;
    });
    setPopularLists(updatedLists);
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
        <div className="p-list">Lists</div>
        <div className="p-sort">
          Sort By
          <select
            className="p-option-menu"
            onChange={handleSortBy}
            id="sort-by"
          >
            <option value="popular">Popularity</option>
            <option value={username}>Your list</option>
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
                profilename={popularlist.listOwner}
                filminlist={popularlist.numOfMovies}
                likeamount={popularlist.likeAmount}
                commentamount={popularlist.numOfComments}
                listdesc={popularlist.listDescript}
                liked={popularlist.liked}
                onLike={() => handleLike(popularlist.id)}
                onClick={() => listClicked(popularlist.id)}
              />
              <hr className="separator" />
            </React.Fragment>
          );
        })}
      </div>
      {/* <div className="list-footer">
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export default ListsPage;
