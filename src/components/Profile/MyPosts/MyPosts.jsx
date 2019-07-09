import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <Post message="Hi, whatsup?"/>
      <Post message="Hey, dude"/>
    </div>
  )
}

export default MyPosts;
