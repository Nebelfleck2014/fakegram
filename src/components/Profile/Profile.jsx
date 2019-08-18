import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  return(
    <div className={s.profile_wrapper}>
      <ProfileInfo />
      <MyPosts postsData =
        {props.profilePage.postsData}
        newPostText = {props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;
