import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
  let postsElements =
    props.postsData.map( post => <Post message = {post.message} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
