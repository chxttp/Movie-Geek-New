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

  const [popularlists, setpopularlists] = useState([
    {
      title: "Weirdo Movies for Beginners",
      listimg1:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*",
      listimg2:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*",
      listimg3:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*",
      listimg4:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*",
      listimg5:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/cuckoos-nest-poland.jpg?resize=480:*",
      profileimg:
        "https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg",
      profilename: "Olive",
      filminlist: "151",
      likeamount: "8080",
      commentamount: "2",
      listdesc: "Bla Bla Bla Bla Bla Bla",
    },
  ]);

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
        {popularlists.map((popularlists) => {
          return (
            <PLContainer
              title={popularlists.title}
              listimg1={popularlists.listimg1}
              listimg2={popularlists.listimg2}
              listimg3={popularlists.listimg3}
              listimg4={popularlists.listimg4}
              listimg5={popularlists.listimg5}
              profileimg={popularlists.profileimg}
              filminlist={popularlists.filminlist}
              likeamount={popularlists.likeamount}
              commentamount={popularlists.commentamount}
              listdesc={popularlists.listdesc}
            />
          );
        })}
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
