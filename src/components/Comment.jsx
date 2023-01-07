import React from "react";
import { BiUpArrow, BiUpvote } from "react-icons/bi";
import CommentForm from "./CommentForm";

const Comment = ({ comment, replies, user }) => {
    const replay = (user, parentId) => {
        console.log(user, parentId);
        <CommentForm data={comment} user={user} parentId={parentId} />
    }


  return (
    <div className="comment">
      <div className="comment-content">
        <div className="comment-header">
          <img src={comment.img} alt="avatar" />
          <div className="comment-author">{comment.author}</div>
          <div className="comment-date">&#x2022; 2 days ago</div>
        </div>
        <div className="comment-body">{comment.comment}</div>
      </div>
      {/* add upvote and replay */}
      <div className="comment-actions">
        <div className="comment-upvote">
          <BiUpArrow />
          Upvote
        </div>
        <div className="comment-upvote-count">0</div>
        <div className="comment-reply" onClick={() => {
                  return replay(user, comment.id);
              }}>Reply</div>
      </div>
      {replies.length > 0 && (
        <div className="comment-replies">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} replies={[]} user={user}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
