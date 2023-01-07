import React from 'react'
import Comment from './Comment'

const Comments = ({comments, user}) => {
    const rootComments = comments.filter(comment => comment.parentId === null).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );;
    const getReplies = (commentId) => {
        return comments.filter(comment => comment.parentId === commentId);
        
    }
  return (
    <div className="comments">
      {rootComments.map((comment) => (
        <Comment key={comment.id} comment={comment} replies={getReplies(comment.id)} user={user}/>
        ))}
    </div>
  )
}

export default Comments