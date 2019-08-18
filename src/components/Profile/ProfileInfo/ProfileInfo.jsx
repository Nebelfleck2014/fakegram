import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        Profile
      </div>
      <div className={s.profile_info}>
        avatar description
      </div>
    </div>
  )
}

export default ProfileInfo;
