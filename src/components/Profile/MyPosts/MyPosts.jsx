import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
  let postsElements =
    props.postsData.map( post => <Post message = {post.message} />)
  return (
    <div className={s.posts}>
      {postsElements}
    </div>
  )
}

export default MyPosts;
