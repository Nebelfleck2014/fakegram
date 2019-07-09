import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.main_nav}>
      <ul>
        <li className={s.item}>
          <a href='/Profile'>Profile</a>
        </li>
        <li className={s.item}>
          <a href='/Dialogs'>Messages</a>
        </li>
        <li className={s.item}>
          <a href='/News'>News</a>
        </li>
        <li className={s.item}>
          <a href='/Music'>Music</a>
        </li>
        <li className={s.item}>
          <a href='/Settings'>Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
