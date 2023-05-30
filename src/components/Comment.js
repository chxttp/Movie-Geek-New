import React, { useState, useEffect } from "react";
import './Comment.css';

const Comment = ({username, id, ListId}) => {
  /// pass movie id and list id from the detail page #####
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from the API when the component mounts
    if(id){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/getMovieReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, movieID: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the comments state with the fetched comments
        if (Array.isArray(data) && data.length > 0) {
          setComments(data);
        } else {
          setComments([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else if(ListId){
      fetch("https://moviegeek.azurewebsites.net/listActivity/getComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify({ username: username, listID: ListId}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setComments(data);
        } else {
          setComments([]);
        }
        
    
      })
      .catch((error) => {
        console.log(error);
      });

    }
    


      
  }, [id, ListId]);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === null) {
      alert("Please login before commenting.");
      return;
    }

  if (newComment.trim() !== '') {
    const commentObject = {
      username: username,
      review: newComment,
    };
    // Create a comment object with the username and newComment
    setComments([...comments, commentObject]);
    setNewComment('');
    
    if(id){
      fetch("https://moviegeek.azurewebsites.net/movieActivity/insertReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify({ username: username, movieID: id, actType: "review", review: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
    
      })
      .catch((error) => {
        console.log(error);
      });

    }
    else if(ListId){
      fetch("https://moviegeek.azurewebsites.net/listActivity/insertComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify({ username: username, listID: ListId, actType: "comment", comment: newComment }),
    })
      .then((response) => response.json())
      .then((data) => {
    
      })
      .catch((error) => {
        console.log(error);
      });
    }

    


    }



  };

  return (
    <div className="comment-container">
      {/* <h2>Comments</h2> */}
      <div className="comment-list">
      {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <div className="comment-header">
                <div className="comment-avatar" >
                  <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" />

                </div>
                <div className="comment-username">{comment.username}</div>
              </div>
              <div className="comment-text">{comment.review || comment.comment}</div>
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
