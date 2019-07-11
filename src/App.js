import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


const App =(props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar />
        <div className='main-content'>
          <Route path='/profile' component = { () => <Profile postsData={props.postsData} /> } />
          <Route path='/dialogs' component = { () => <Dialogs dialogData={props.dialogData} messageData={props.messageData} /> } />
          <Route path='/news' component = { () => <News newsData={props.newsData} /> } />
          <Route path='/music' component = {Music} />
          <Route path='/settings' component = {Settings} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
