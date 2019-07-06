import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return(
    <div>
      <div>
        <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'></img>
      </div>
      <div>
        Profile
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          Post1
        </div>
        <div className={s.item}>
          Post2
        </div>
      </div>
    </div>
  )
}

export default Profile;
