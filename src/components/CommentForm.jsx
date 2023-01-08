import React, { useState, useEffect } from "react";

const CommentForm = ({ user, parentId}) => {
  const [commentBody, setCommentBody] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
   fetch("/comments").then(
      (response) => response.json()
    ).then(
      (data) => setComments(data)
   )
  }, [comments]);

  const time = new Date()
    .toTimeString()
    .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();
  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
  const timestamp = dateString + " " + time;

  const OnChange = (e) => {
    setCommentBody(e.target.value);
  };
  const OnClick = (e) => {
    e.preventDefault();
    const commentData = {
      id: comments.length + 1,
      img: user.img,
      comment: commentBody,
      timestamp: timestamp,
      author: user.name,
      authorId: user.id,
      upvotes: 0,
      parentId: parentId,
    };
    fetch("http://localhost:3500/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
    setCommentBody("");
  };
  return (
    <div className="comment-form">
      <img src="https://i.pravatar.cc/150?img=13" alt="avatar" />
      <input
        type="text"
        id="comment"
        placeholder="What are your thoughts?"
        value={commentBody}
        onChange={OnChange}
      />
      <button className="comment-btn" onClick={OnClick}>
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
