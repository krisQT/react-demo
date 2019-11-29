import React from 'react';

export default function CommentItenm (props) {
  return (
    <div className="comment-item">
      <h3>评论人： {props.name}</h3>
      <p>评论内容： {props.content}</p>
    </div>
  );
}