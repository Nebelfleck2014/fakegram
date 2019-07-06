import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
  return(
    <div>
      <div>
        <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'></img>
      </div>
      <div>
        Profile
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
