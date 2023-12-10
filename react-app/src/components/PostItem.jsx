import React, {useState} from 'react';
import {Checkbox} from "@mui/material";
import '@fontsource/roboto/400.css';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const PostItem = (props) => {
  console.log(props)
  return (
    <div className='post'>
      <div className='post__content'>
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <div>{props.post.Name}</div>
        <div>{props.post.Nominal}</div>
        <div>{props.post.CharCode}</div>
        <div>{props.post.Value}</div>
      </div>
    </div>  );
};


export default PostItem;