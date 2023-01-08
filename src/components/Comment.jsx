import React, { useState } from "react";
import { BiUpArrow} from "react-icons/bi";
import CommentForm from "./CommentForm";

const Comment = ({ comment, replies, user }) => {
  const [clickReply, setClickReply] = useState(false);
  const reply = () => {
    setClickReply(!clickReply);
  };
  const addUpvote = () => {
    fetch(`/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ upvotes: comment.upvotes + 1 }),
    });
  };
  return (
    <div className="comment">
      <div className="comment-content">
        <div className="comment-header">
          <img src={comment.img} alt="avatar" />
          <div className="comment-author">{comment.author}</div>
          <div className="comment-date">
            &#x2022;{" "}
            {new Date(Date.now()).getTime() -
              new Date(comment.timestamp).getTime() <
            86400000
              ? new Date(comment.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : new Date(comment.timestamp).toLocaleDateString([], {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
          </div>
        </div>
        <div className="comment-body">{comment.comment}</div>
      </div>
      {/* add upvote and replay */}
      <div className="comment-actions">
        {user && user.id !== comment.authorId && (
          <>
            <div className="comment-upvote" onClick={()=>{return addUpvote()}}>
              <BiUpArrow />
              Upvote
            </div>
            <div className="comment-upvote-count">{comment.upvotes}</div>
            <div
              className="comment-reply"
              onClick={() => {
                return reply();
              }}
            >
              Reply
            </div>
          </>
        )}
      </div>
      {clickReply && <CommentForm user={user} parentId={comment.id} />}
      {replies.length > 0 && (
        <div className="comment-replies">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} replies={[]} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
