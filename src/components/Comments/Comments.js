import React from 'react';
// import Posts from '../Posts/Posts';
import Comment from './Comment';
import './Comments.css';
//console.log(comments)
const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* {Posts.map((postObj) => {
        return postObj.comments
      })} */}
      {/* {comments.map(comments => {
        return <Comment comments={posts} key={comments.id}/>
      })} */}
    {comments.map(comment => {
        return <Comment comment={comment} key={comment.id} />
      })}
      
    </div>
  );
};

export default Comments;
