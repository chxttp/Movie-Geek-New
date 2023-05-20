import React from "react";
import Navbar from "./Navbar";
import ProfileBorder from "./ProfileBorder";
import RectangleBorder from "./RectangleBorder";
import Footer from "./Footer";
import "./Geeks.css";

function Geeks() {
  var profileName = ["Jonny Doe", "Kristen", "Foxxxxx", "Christopher"];
  var filmWacted = ["500", "1200", "5", "5000"];
  var filmReviewed = ["200", "2300", "23", "20300"];

  return (
    <div className="Geek">
      <Navbar />
      <div className="top-container">
        <h1>GEEKS</h1>
        <p>Make friends, find popular movie geeks in this community!</p>
      </div>

      <div className="popular-this-week-container">
        <div className="popular-this-week-list">
          <div className="popular-this-week-title">
            POPULAR THIS WEEK
            <hr></hr>
          </div>
        </div>

        <div className="popular-profile-container">
          <div className="popular-profile">
            <ProfileBorder src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"></ProfileBorder>
            <div>
              <h2>{profileName[0]}</h2>
              <h3>
                {filmWacted[0]} films {filmReviewed[0]} reviews
              </h3>
            </div>
            <div className="recently-review-container">
              <RectangleBorder src="https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg"></RectangleBorder>
              <RectangleBorder src="https://m.media-amazon.com/images/I/717la8Z17sL._AC_UF894,1000_QL80_.jpg"></RectangleBorder>
              <RectangleBorder src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/be-james-bond%21-design-template-f1fbb5b86763e74c882fb5577decefb9_screen.jpg?ts=1643417717"></RectangleBorder>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src="https://www.kapwing.com/resources/content/images/2020/04/square-avatar.png"></ProfileBorder>
            <div>
              <h2>{profileName[1]}</h2>
              <h3>
                {filmWacted[1]} films {filmReviewed[1]} reviews
              </h3>
            </div>
            <div className="recently-review-container">
              <RectangleBorder src="https://www.themoviedb.org/t/p/original/faxj22bQODBwLH5t3XIZuxsNvo4.jpg"></RectangleBorder>
              <RectangleBorder src="https://m.media-amazon.com/images/I/71Lvqoov42L.jpg"></RectangleBorder>
              <RectangleBorder src="https://pbs.twimg.com/media/FozSgaCaEAIHR6z.jpg"></RectangleBorder>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src="https://media.istockphoto.com/id/504523972/photo/head-of-red-fox-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Zhr6Iy5Js2Nlsne2HJ-ngF6YC17sOy26oAq13NldjBM="></ProfileBorder>
            <div>
              <h2>{profileName[2]}</h2>
              <h3>
                {filmWacted[2]} films {filmReviewed[2]} reviews
              </h3>
            </div>
            <div className="recently-review-container">
              <RectangleBorder src="https://i0.wp.com/obeygiant.com/images/2015/07/poster_animalfarm_lrg.jpg?fit=416%2C680&ssl=1"></RectangleBorder>
              <RectangleBorder src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_265360720.jpg"></RectangleBorder>
              <RectangleBorder src="https://m.media-amazon.com/images/I/418g2jo7fBL._AC_UF894,1000_QL80_.jpg"></RectangleBorder>
            </div>
          </div>

          <div className="popular-profile">
            <ProfileBorder src="https://static.vecteezy.com/system/resources/previews/004/903/091/original/cartoon-character-of-christopher-columbus-holding-telescope-columbus-day-vector.jpg"></ProfileBorder>
            <div>
              <h2>{profileName[3]}</h2>
              <h3>
                {filmWacted[3]} films {filmReviewed[3]} reviews
              </h3>
            </div>
            <div className="recently-review-container">
              <RectangleBorder src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"></RectangleBorder>
              <RectangleBorder src="https://i.ebayimg.com/images/g/LfYAAOSwx8pi~Lf3/s-l1600.jpg"></RectangleBorder>
              <RectangleBorder src="https://i.pinimg.com/736x/8b/3d/3d/8b3d3d7c569be75b587075c0b062f8e4.jpg"></RectangleBorder>
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer-geek">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Geeks;
