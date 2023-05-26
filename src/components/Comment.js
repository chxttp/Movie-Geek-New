import React, { useState } from 'react';
import './Comment.css';

const Comment = ({username}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
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
                <div className="comment-username">{username}</div>
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
