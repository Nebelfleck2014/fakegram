import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let postsData = [
  {id:1, message:'Hey, whatsup?'},
  {id:1, message:'Hey, dude?'}
]

let postElements = postsData.map( post => <Post message = {post.message} />) 

const MyPosts = () => {
  return (
    <div className={s.posts}>
      {postElements}
    </div>
  )
}

export default MyPosts;
