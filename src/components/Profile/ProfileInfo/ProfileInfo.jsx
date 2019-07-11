import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'></img>
      </div>
      <div className={s.profile_info}>
        avatar description
      </div>
    </div>
  )
}

export default ProfileInfo;
