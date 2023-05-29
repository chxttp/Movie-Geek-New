import React, { useState, useEffect } from "react";
import './Comment.css';

const Comment = ({username, id}) => {
  /// pass movie id and list id from the detail page #####
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from the API when the component mounts
    fetch("https://moviegeek.azurewebsites.net/movieDynamic/getMovieDynamic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieID: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the comments state with the fetched comments
        if (Array.isArray(data) && data.length > 0) {
          const commentArray = data[0].review.split(",");
          setComments(commentArray);
        } else {
          setComments([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieID: id, actType: "review", review: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data)
      })
      .catch((error) => {
        console.log(error);
      });
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-container">
      {/* <h2>Comments</h2> */}
      <div className="comment-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div className="comment-item" key={index}>
              <div className="comment-header">
                <div className="comment-avatar" />
                <div className="comment-username">{"user"}</div>
              </div>
              <div className="comment-text">{comment}</div>
            </div>
          ))
        ) : (
          <div className="no-comments">No comments yet.</div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleChange}
        />
        <div className='comment-button-cotainer'>
            <button type="submit" disabled={!newComment.trim()} className="comment-button">
            Comment
            </button>
        </div>
        
      </form>
    </div>
  );
};

export default Comment;
