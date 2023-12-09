import React, {useState} from 'react';

const PostItem = (props) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <div>{props.post.Name}</div>
        <div>{props.post.Nominal}</div>
        <div>{props.post.CharCode}</div>
        <div>{props.post.Value}</div>
      </div>
    </div>
  );
};


export default PostItem;