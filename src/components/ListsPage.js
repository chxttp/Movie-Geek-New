import React from "react";
import Navbar from "./Navbar";
import PLContainer from "./PLContainer";
import Footer from "./Footer";
import "./ListsPage.css";

function ListsPage() {
  return (
    <div className="List">
      <Navbar></Navbar>

      <div className="list-popular-title">
        <div className="p-list">POPULAR LISTS</div>
        <div className="p-sort">
          Sort By
          <select className="p-option-menu">
            <option value="">POPULARITY</option>
            <option value="">ALL TIME</option>
            <option value="">THIS WEEK</option>
            <option value="">THIS MONTH</option>
            <option value="">THIS YEAR</option>
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
