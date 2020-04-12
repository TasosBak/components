import React from "react";

const CommentDetail = ({ author, timeAgo, commentText, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="profile pic" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{commentText}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
